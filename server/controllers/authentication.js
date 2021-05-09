import express from "express";
import mongoose from "mongoose";

import authentication from "../models/authentication.js";

const router = express.Router();

export const getUsers = async (req, res) => {
  try {
    const users = await authentication.find();

    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await authentication.findById(id);

    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createUser = async (req, res) => {
  const { id_user, username, password, selectedFile, role } = req.body;

  const newUser = new authentication({
    id_user,
    username,
    password,
    selectedFile,
    role,
  });

  try {
    await newUser.save();

    res.status(201).json(newUser);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { id_user, username, password, selectedFile, role } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No user with id: ${id}`);

  const updatedUser = { id_user, username, password, selectedFile, role, _id: id };

  await authentication.findByIdAndUpdate(id, updatedUser, { new: true });

  res.json(updatedUser);
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No user with id: ${id}`);

  await authentication.findByIdAndRemove(id);

  res.json({ message: "user deleted successfully." });
};


export default router;
