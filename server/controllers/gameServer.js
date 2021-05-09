import express from "express";
import mongoose from "mongoose";

import gameServer from "../models/gameServer.js";

const router = express.Router();

export const getServers = async (req, res) => {
  try {
    const gameServer = await gameServer.find();

    res.status(200).json(gameServer);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getServer = async (req, res) => {
  const { id } = req.params;

  try {
    const gameServer = await gameServer.findById(id);

    res.status(200).json(gameServer);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createServer = async (req, res) => {
  const { id_server, gameServer } = req.body;

  const newServer = new gameServer({
    id_server,
    gameServer,
  });

  try {
    await newServer.save();

    res.status(201).json(newServer);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateServer = async (req, res) => {
  const { id } = req.params;
  const { id_server, gameServer } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No server with id: ${id}`);

  const updatedServer = { id_server, gameServer, _id: id };

  await gameServer.findByIdAndUpdate(id, updatedServer, { new: true });

  res.json(updatedServer);
};

export const deleteServer = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No server with id: ${id}`);

  await gameServer.findByIdAndRemove(id);

  res.json({ message: "server deleted successfully." });
};

export default router;
