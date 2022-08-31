const express = require("express");
const mongoose = require("mongoose");

const players = require("../models/player.js");

const router = express.Router();

const getPlayers = async (req, res) => {
  try {
    const players = await players.find();

    res.status(200).json(players);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getPlayer = async (req, res) => {
  const { id } = req.params;

  try {
    const player = await players.findById(id);

    res.status(200).json(player);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createPlayer = async (req, res) => {
  const { name, team, username, email, password } = req.body;

  const newPlayer = new players({
    name,
    team,
    username,
    email,
    password,
  });

  try {
    await newPlayer.save();

    res.status(201).json(newPlayer);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const updatePlayer = async (req, res) => {
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

const deletePlayer = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No player with id: ${id}`);

  await players.findByIdAndRemove(id);

  res.json({ message: "player deleted successfully." });
};

exports.getPlayers = getPlayers;
exports.getPlayer = getPlayer;
exports.createPlayer = createPlayer;
exports.updatePlayer = updatePlayer;
exports.deletePlayer = deletePlayer;
