const express = require("express");
const mongoose = require("mongoose");
// const tournament = require("../models/tournament.js");
const tournamentModel = require("../models/tournament.js");

const getTournaments = async (req, res) => {
  tournamentModel
    .find()
    .then((tournaments) => res.json(tournaments))
    .catch((err) => res.status(400).json("error: " + err));
};

const getActiveTournaments = async (req, res) => {
  // try {
  //   const tournament = await tournamentModel.find();
  //   res.status(200).json(tournament);
  //   console.log("berhasil")
  // } catch (error) {
  //   res.status(404).json({ message: error.message });
  //   console.log("gagal");
  // }

  tournamentModel
    .find()
    .where({ status: "On Going" })
    .then((tournaments) => res.json(tournaments))
    .catch((err) => res.status(400).json("Error: " + err));
};

const getFinishedTournaments = async (req, res) => {
  // try {
  //   const tournament = await tournamentModel.find();
  //   res.status(200).json(tournament);
  //   console.log("berhasil")
  // } catch (error) {
  //   res.status(404).json({ message: error.message });
  //   console.log("gagal");
  // }

  tournamentModel
    .find()
    .where({ status: "Finished" })
    .then((tournaments) => res.json(tournaments))
    .catch((err) => res.status(400).json("Error: " + err));
};

const getTournament = async (req, res) => {
  // const { id } = req.params.id;

  try {
    const tournament = await tournamentModel.findById(req.params.id);
    res.status(200).json(tournament);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
  // tournamentModel
  //   .find()
  //   .then((tournaments) => res.json(tournaments))
  //   .catch((err) => res.status(400).json("Error: " + err));
};

const createTournament = async (req, res) => {
  const { name, status, prize, game, region } = req.body;

  const newTournament = new tournamentModel({
    name,
    status,
    prize,
    game,
    region,
  });

  try {
    await newTournament.save();
    res.status(201).json(newTournament);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const updateTournament = async (req, res) => {
  // const { id } = req.params.id;
  await tournamentModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    (err, post) => {
      if (err) return next(err);
      res.json(post);
    }
  );

  // tournamentModel
  //   .findByIdAndUpdate(id, req.body)
  //   .then((tournaments) => res.json(tournaments))
  //   .catch((error) => res.status(400).json("error: " + error));
};

const deleteTournament = async (req, res) => {
  const { id } = req.params;
  await tournamentModel.findByIdAndRemove(id);
  res.json({ message: "tournament deleted successfully." });
};

exports.getActiveTournaments = getActiveTournaments;
exports.getFinishedTournaments = getFinishedTournaments;
exports.getTournament = getTournament;
exports.getTournaments = getTournaments;
exports.createTournament = createTournament;
exports.updateTournament = updateTournament;
exports.deleteTournament = deleteTournament;
