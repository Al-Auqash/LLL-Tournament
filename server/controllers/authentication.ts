import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import asyncHandler from 'express-async-handler';
import User from '../models/user';
import { Request, Response, NextFunction } from 'express';
import UserInterface from '../interfaces/user.interface';

// @desc    Register new user
// @route   POST /api/users
// @access  Public
export const registerUser = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { username, email, password, role } = req.body;

    if (!username || !email || !password) {
      res.status(400);
      throw new Error(
        'Please add all fields ' + username + email + password + role,
      );
    }

    // Check if user exists
    const userExists = await User.findOne({ email });

    if (userExists) {
      res.status(400);
      throw new Error('User already exists');
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    // @ts-ignore
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
      role,
    });

    if (user) {
      res.status(201).json({
        _id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
        // @ts-ignore
        token: generateToken(user._id),
      });
    } else {
      res.status(400);
      throw new Error('Invalid user data');
    }
  },
);

// @desc    Authenticate a user
// @route   POST /api/users/login
// @access  Public
export const loginUser = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;

    // Check for user email
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      res.json({
        _id: user.id,
        username: user.username,
        email: user.email,
        role: user.role,
        // @ts-ignore
        token: generateToken(user._id),
      });
    } else {
      res.status(404);
      throw new Error('Invalid credentials');
    }
  },
);

// @desc    Get user data
// @route   GET /api/users/me
// @access  Private
export const getMe = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    // @ts-ignore
    res.status(200).json(req.user);
  },
);

// Generate JWT
const generateToken = (id: number) => {
  // @ts-ignore
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};
