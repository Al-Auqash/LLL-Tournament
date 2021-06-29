import express from "express";
import mongoose from "mongoose";

import tournamentModel from "../models/tournament.js";

const router = express.Router();

export const getTournaments = async (req, res) => {
  try {
    const tournament = await tournamentModel.find();

    res.status(200).json(tournament);
  } catch (error) {
    res.status(404).json({ message: error.message });
    console.log("gagal")
  }
};

export const getTournament = async (req, res) => {
  const { id } = req.params;

  try {
    const tournament = await tournamentModel.findById(id);

    res.status(200).json(tournament);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createTournament = async (req, res) => {
  const { id_server, tournament } = req.body;

  const newTournament = new tournament({
    id_server,
    tournament,
  });

  try {
    await newTournament.save();

    res.status(201).json(newTournament);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateTournament = async (req, res) => {
  const { id } = req.params;
  const { id_server, tournament } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No server with id: ${id}`);

  const updatedTournament = { id_server, tournament, _id: id };

  await tournament.findByIdAndUpdate(id, updatedServer, { new: true });

  res.json(updatedServer);
};

export const deleteTournament = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No server with id: ${id}`);

  await tournament.findByIdAndRemove(id);

  res.json({ message: "server deleted successfully." });
};

export default router;
