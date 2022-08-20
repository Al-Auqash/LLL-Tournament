const express = require("express");
const mongoose = require("mongoose");

const gameServerModel = require("../models/gameServer.js");

const router = express.Router();

const getServers = async (req, res) => {
  try {
    const gameServer = await gameServerModel.find();
    res.status(200).json(gameServer);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getServer = async (req, res) => {
  const { id } = req.params;

  try {
    const gameServer = await gameServerModel.findById(id);
    res.status(200).json(gameServer);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createServer = async (req, res) => {
  const { gameServer, gameServerAlias } = req.body;

  const newServer = new gameServerModel({
    gameServer,
    gameServerAlias,
  });

  try {
    await newServer.save();
    res.status(201).json(newServer);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const updateServer = async (req, res) => {
  const { id } = req.params;
  const { gameServer, gameServerAlias } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No server with id: ${id}`);

  const updatedServer = { gameServer, gameServerAlias, _id: id };

  await gameServerModel.findByIdAndUpdate(id, updatedServer, { new: true });

  res.json(updatedServer);
};

const deleteServer = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No server with id: ${id}`);

  await gameServerModel.findByIdAndRemove(id);

  res.json({ message: "server deleted successfully." });
};

exports.getServers = getServers;
exports.getServer = getServer;
exports.createServer = createServer;
exports.updateServer = updateServer;
exports.deleteServer = deleteServer;
