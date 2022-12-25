import { Request, Response, NextFunction } from 'express';
// const mongoose = require("mongoose");
import tournamentModel from '../models/tournament';

export const getTournaments = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  tournamentModel
    .find()
    .then((tournaments) => res.json(tournaments))
    .catch((err) => res.status(400).json('error: ' + err));
};

export const getActiveTournaments = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  tournamentModel
    .find()
    .where({ status: 'On Going' })
    .then((tournaments) => res.json(tournaments))
    .catch((err) => res.status(400).json('Error: ' + err));

  // res.json(tournament);
};

export const getFinishedTournaments = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
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
    .where({ status: 'Finished' })
    .then((tournaments) => res.json(tournaments))
    .catch((err) => res.status(400).json('Error: ' + err));
};

export const getTournament = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  // const { id } = req.params.id;

  try {
    const tournament = await tournamentModel.findById(req.params.id);
    res.status(200).json(tournament);
  } catch (error) {
    next(error);
    //  res.status(404).json({ message: error.message });
  }
  // tournamentModel
  //   .find()
  //   .then((tournaments) => res.json(tournaments))
  //   .catch((err) => res.status(400).json("Error: " + err));
};

export const createTournament = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
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
    next(error);
    //  res.status(409).json({ message: error.message });
  }
};

export const updateTournament = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  // const { id } = req.params.id;
  await tournamentModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    // @ts-ignore
    (err, post) => {
      if (err) return next(err);
      res.json(post);
    },
  );

  // tournamentModel
  //   .findByIdAndUpdate(id, req.body)
  //   .then((tournaments) => res.json(tournaments))
  //   .catch((error) => res.status(400).json("error: " + error));
};

export const deleteTournament = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { id } = req.params;
  await tournamentModel.findByIdAndRemove(id);
  res.json({ message: 'tournament deleted successfully.' });
};
