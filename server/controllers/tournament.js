const express = require("express");
const mongoose = require("mongoose");
const tournamentModel = require("../models/tournament.js");

const router = express.Router();

const getTournaments = async (req, res) => {
  try {
    const tournament = await tournamentModel.find();
    res.status(200).json(tournament);
    console.log("berhasil")
  } catch (error) {
    res.status(404).json({ message: error.message });
    console.log("gagal");
  }

  // tournamentModel.find(function (err, tournament) {
  //   if (err) return next(err);
  //   res.json(tournament);
  // });

  // const db = mongoose.db("LLL-Tournament");
  // const result = db.collection("tournaments").find();
  // res.send(200).json(result);
  // console.log("berhasil");
};

const getTournament = async (req, res) => {
  const { id } = req.params;

  try {
    const tournament = await tournamentModel.findById(id);

    res.status(200).json(tournament);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createTournament = async (req, res) => {
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

const updateTournament = async (req, res) => {
  const { id } = req.params;
  const { id_server, tournament } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No server with id: ${id}`);

  const updatedTournament = { id_server, tournament, _id: id };

  await tournament.findByIdAndUpdate(id, updatedServer, { new: true });

  res.json(updatedServer);
};

const deleteTournament = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No server with id: ${id}`);

  await tournament.findByIdAndRemove(id);

  res.json({ message: "server deleted successfully." });
};

exports.getTournaments = getTournaments;
exports.getTournament = getTournament;
exports.createTournament = createTournament;
exports.updateTournament = updateTournament;
exports.deleteTournament = deleteTournament;
