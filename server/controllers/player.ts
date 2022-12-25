import { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';

import playersModel from '../models/player';

export const getPlayers = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const players = await playersModel.find();

    res.status(200).json(players);
  } catch (error) {
    next(error);
    // res.status(404).json({ message: error.message });
  }
};

export const getPlayer = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { id } = req.params;

  try {
    const player = await playersModel.findById(id);

    res.status(200).json(player);
  } catch (error) {
    next(error);
    // res.status(404).json({ message: error.message });
  }
};

export const createPlayer = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { name, team, username, email, password } = req.body;

  const newPlayer = new playersModel({
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
    next(error);
    // res.status(409).json({ message: error.message });
  }
};

export const updatePlayer = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
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

  await playersModel.findByIdAndUpdate(id, updatedPlayer, { new: true });

  res.json(updatedPlayer);
};

export const deletePlayer = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No player with id: ${id}`);

  await playersModel.findByIdAndRemove(id);

  res.json({ message: 'player deleted successfully.' });
};
