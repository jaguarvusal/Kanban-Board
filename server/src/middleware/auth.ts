import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface JwtPayload {
  username: string;
}

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    res.status(401).json({ message: 'Access token is missing' });
    return; // Ensure this path returns
  }

  try {
    const secretKey = process.env.JWT_SECRET_KEY || 'default_secret';
    const decoded = jwt.verify(token, secretKey) as JwtPayload;
    req.user = { username: decoded.username };
    next(); // Ensure this path calls next()
  } catch (error) {
    res.status(403).json({ message: 'Invalid or expired token' });
    return; // Ensure this path returns
  }
};
