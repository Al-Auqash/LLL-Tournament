import express from "express";
import mongoose from "mongoose";

import champions from "../models/champions.js";

const router = express.Router();

export const getChampions = async (req, res) => {
  try {
    const champions = await champions.find();

    res.status(200).json(champions);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getChampion = async (req, res) => {
  const { id } = req.params;

  try {
    const champion = await champions.findById(id);

    res.status(200).json(champion);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createChampion = async (req, res) => {
  const { id_user, username, inGameName, series, gameName } = req.body;

  const newChampion = new champions({
    id_user,
    username,
    inGameName,
    series,
    gameName,
  });

  try {
    await newChampion.save();

    res.status(201).json(newChampion);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateChampion = async (req, res) => {
  const { id } = req.params;
  const { id_user, username, inGameName, series, gameName } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No champion with id: ${id}`);

  const updatedChampion = {
    id_user,
    username,
    inGameName,
    series,
    gameName,
    _id: id,
  };

  await champions.findByIdAndUpdate(id, updatedChampion, { new: true });

  res.json(updatedChampion);
};

export const deleteChampion = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No champion with id: ${id}`);

  await champions.findByIdAndRemove(id);

  res.json({ message: "champion deleted successfully." });
};

export default router;
