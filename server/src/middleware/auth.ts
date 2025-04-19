import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface JwtPayload {
  username: string;
}

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    res.status(401).json({ message: 'Access token is missing' });
    return;
  }

  try {
    const secretKey = process.env.JWT_SECRET_KEY || 'default_secret';
    const decoded = jwt.verify(token, secretKey) as JwtPayload;
    req.user = { username: decoded.username }; // Attach username to the request
    next();
  } catch (error) {
    res.status(403).json({ message: 'Invalid or expired token' });
    return;
  }
};
