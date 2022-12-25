import { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';

import championsModel from '../models/champions';

export const getChampions = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const champions = await championsModel.find();

    res.status(200).json(champions);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getChampion = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { id } = req.params;

  try {
    const champion = await championsModel.findById(id);

    res.status(200).json(champion);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createChampion = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { id_user, username, inGameName, series, gameName } = req.body;

  const newChampion = new championsModel({
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

export const updateChampion = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
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

  await championsModel.findByIdAndUpdate(id, updatedChampion, { new: true });

  res.json(updatedChampion);
};

export const deleteChampion = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No champion with id: ${id}`);

  await championsModel.findByIdAndRemove(id);

  res.json({ message: 'champion deleted successfully.' });
};
