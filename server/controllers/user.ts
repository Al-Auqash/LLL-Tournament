import { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import userModel from '../models/user';

export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const user = await userModel.find();
    res.status(200).json(user);
  } catch (error) {
    next(error);
    // res.status(404).json({ message: error.message });
  }
};

export const getUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { id } = req.params;

  try {
    const user = await userModel.findById(id);
    res.status(200).json(user);
  } catch (error) {
    next(error);
    // res.status(404).json({ message: error.message });
  }
};

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  //  const { role, username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  const newUser = new userModel({
    role: req.body.role,
    username: req.body.username,
    email: req.body.email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    next(error);
    // res.status(409).json({ message: error.message });
  }
};

export const updateUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { id } = req.params;
  const { role, username, email, password } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send(`No user with id: ${id}`);
  }
  const updatedUser = { role, username, email, password, _id: id };

  await userModel.findByIdAndUpdate(id, updatedUser, { new: true });

  res.json(updatedUser);
};

export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No user with id: ${id}`);

  await userModel.findByIdAndRemove(id);

  res.json({ message: 'user deleted successfully.' });
};
