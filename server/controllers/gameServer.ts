import { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';

import gameServerModel from '../models/gameServer';

export const getServers = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const gameServer = await gameServerModel.find();
    res.status(200).json(gameServer);
  } catch (error) {
    next(error);
    // res.status(404).json({ message: error.message });
  }
};

export const getServer = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { id } = req.params;

  try {
    const gameServer = await gameServerModel.findById(id);
    res.status(200).json(gameServer);
  } catch (error) {
    next(error);
    // res.status(404).json({ message: error.message });
  }
};

export const createServer = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { gameServer, gameServerAlias } = req.body;

  const newServer = new gameServerModel({
    gameServer,
    gameServerAlias,
  });

  try {
    await newServer.save();
    res.status(201).json(newServer);
  } catch (error) {
    next(error);
    // res.status(409).json({ message: error.message });
  }
};

export const updateServer = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { gameServer, gameServerAlias } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No server with id: ${id}`);

  const updatedServer = { gameServer, gameServerAlias, _id: id };

  await gameServerModel.findByIdAndUpdate(id, updatedServer, { new: true });

  res.json(updatedServer);
};

export const deleteServer = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No server with id: ${id}`);

  await gameServerModel.findByIdAndRemove(id);

  res.json({ message: 'server deleted successfully.' });
};
