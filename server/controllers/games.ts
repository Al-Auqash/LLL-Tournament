import { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';

import gamesModel from '../models/games.js';

export const getGames = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const games = await gamesModel.find();
    res.status(200).json(games);
  } catch (error) {
    next(error);
    // res.status(404).json({ message: error.message });
  }
};

export const getGame = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { id } = req.params;

  try {
    const game = await gamesModel.findById(id);

    res.status(200).json(game);
  } catch (error) {
    next(error);
    // res.status(404).json({ message: error.message });
  }
};

export const createGame = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
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
    next(error);
    // res.status(409).json({ message: error.message });
  }
};

export const updateGame = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { id } = req.params;
  const { gameName, genre, developer, publisher } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No game with id: ${id}`);

  const updatedGame = { gameName, genre, developer, publisher, _id: id };

  await gamesModel.findByIdAndUpdate(id, updatedGame, { new: true });

  res.json(updatedGame);
};

export const deleteGame = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No game with id: ${id}`);

  await gamesModel.findByIdAndRemove(id);

  res.json({ message: 'game deleted successfully.' });
};
