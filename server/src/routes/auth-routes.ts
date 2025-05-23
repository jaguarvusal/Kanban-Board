import { Router, Request, Response } from 'express';
import { User } from '../models/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ where: { username } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    const secretKey = process.env.JWT_SECRET_KEY || 'default_secret';
    const token = jwt.sign({ username: user.username }, secretKey, { expiresIn: '1h' });

    return res.json({ token }); // Explicit return
  } catch (error: any) {
    res.status(500).json({ message: error.message });
    return; // Ensure all code paths return
  }
};

const router = Router();

// POST /login - Login a user
router.post('/login', login);

export default router;
