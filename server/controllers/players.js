import express from "express";
import mongoose from "mongoose";

import players from "../models/players.js";

const router = express.Router();

export const getPlayers = async (req, res) => {
  try {
    const players = await players.find();

    res.status(200).json(players);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getPlayer = async (req, res) => {
  const { id } = req.params;

  try {
    const player = await players.findById(id);

    res.status(200).json(player);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPlayer = async (req, res) => {
  const { id_user, username, inGameName, series, gameName } = req.body;

  const newPlayer = new players({
    id_user,
    username,
    inGameName,
    series,
    gameName,
  });

  try {
    await newPlayer.save();

    res.status(201).json(newPlayer);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updatePlayer = async (req, res) => {
  const { id } = req.params;
  const { id_user, username, inGameName, series, gameName } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No player with id: ${id}`);

  const updatedPlayer = {
    id_user,
    username,
    inGameName,
    series,
    gameName,
    _id: id,
  };

  await players.findByIdAndUpdate(id, updatedPlayer, { new: true });

  res.json(updatedPlayer);
};

export const deletePlayer = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No player with id: ${id}`);

  await players.findByIdAndRemove(id);

  res.json({ message: "player deleted successfully." });
};

export default router;
