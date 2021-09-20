const express = require("express");
const mongoose = require("mongoose");

const gamesModel = require("../models/games.js");

const router = express.Router();

const getGames = async (req, res) => {
  try {
    const games = await gamesModel.find();
    res.status(200).json(games);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getGame = async (req, res) => {
  const { id } = req.params;

  try {
    const game = await gamesModel.findById(id);

    res.status(200).json(game);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createGame = async (req, res) => {
  const { gameName, genre, developer, publisher } = req.body;

  const newGame = new gamesModel({
    gameName,
    genre,
    developer,
    publisher,
  });

  try {
    await newGame.save();

    res.status(201).json(newGame);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const updateGame = async (req, res) => {
  const { id } = req.params;
  const { gameName, genre, developer, publisher } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No game with id: ${id}`);

  const updatedGame = { gameName, genre, developer, publisher, _id: id };

  await gamesModel.findByIdAndUpdate(id, updatedGame, { new: true });

  res.json(updatedGame);
};

const deleteGame = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No game with id: ${id}`);

  await gamesModel.findByIdAndRemove(id);

  res.json({ message: "game deleted successfully." });
};

exports.getGame = getGame;
exports.getGames = getGames;
exports.createGame = createGame;
exports.updateGame = updateGame;
exports.deleteGame = deleteGame;
