import { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import tournament from '../models/tournament';
import newsModel from '../models/news';

export const getNews = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  await newsModel
    .find()
    .then((news) => res.json(news))
    .catch((err) => res.status(400).json('error: ' + err));
};

export const getNewsById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  // const { id } = req.params.id;

  try {
    const news = await newsModel.findById(req.params.id);
    res.status(200).json(news);
  } catch (error) {
    next(error);
    // res.status(404).json({ message: error.message });
  }
  // newsModel
  //   .find()
  //   .then((tournaments) => res.json(tournaments))
  //   .catch((err) => res.status(400).json("Error: " + err));
};

export const createNews = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { title, content } = req.body;

  const newNews = new newsModel({
    title,
    content,
  });

  try {
    await newNews.save();
    res.status(201).json(newNews);
  } catch (error) {
    next(error);
    // res.status(409).json({ message: error.message });
  }
};

export const updateNews = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  // const { id } = req.params.id;
  await newsModel
    .findByIdAndUpdate(req.params.id, req.body)
    .then((news) => res.json(news))
    .catch((error) => res.status(400).json('error: ' + error));

  // newsModel
  //   .findByIdAndUpdate(id, req.body)
  //   .then((tournaments) => res.json(tournaments))
  //   .catch((error) => res.status(400).json("error: " + error));
};

export const deleteNews = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { id } = req.params;
  await newsModel.findByIdAndRemove(id);
  res.json({ message: 'tournament deleted successfully.' });
};
