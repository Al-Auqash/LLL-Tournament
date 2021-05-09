import express from "express";
import mongoose from "mongoose";

import games from "../models/games.js";

const router = express.Router();

export const getGames = async (req, res) => {
  try {
    const games = await games.find();

    res.status(200).json(games);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getGame = async (req, res) => {
  const { id } = req.params;

  try {
    const game = await games.findById(id);

    res.status(200).json(game);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createGame = async (req, res) => {
  const { id_game, gameName } = req.body;

  const newGame = new games({
    id_game,
    gameName,
  });

  try {
    await newGame.save();

    res.status(201).json(newGame);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateGame = async (req, res) => {
  const { id } = req.params;
  const { id_game, gameName } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No game with id: ${id}`);

  const updatedGame = { id_game, gameName, _id: id };

  await games.findByIdAndUpdate(id, updatedGame, { new: true });

  res.json(updatedGame);
};

export const deleteGame = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No game with id: ${id}`);

  await games.findByIdAndRemove(id);

  res.json({ message: "game deleted successfully." });
};

export default router;
