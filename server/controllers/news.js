const express = require("express");
// const mongoose = require("mongoose");
// const tournament = require("../models/tournament.js");
const newsModel = require("../models/news.js");

const getNews = async (req, res) => {
   await newsModel
      .find()
      .then((news) => res.json(news))
      .catch((err) => res.status(400).json("error: " + err));
};

const getNewsById = async (req, res) => {
   // const { id } = req.params.id;

   try {
      const news = await newsModel.findById(req.params.id);
      res.status(200).json(news);
   } catch (error) {
      res.status(404).json({ message: error.message });
   }
   // newsModel
   //   .find()
   //   .then((tournaments) => res.json(tournaments))
   //   .catch((err) => res.status(400).json("Error: " + err));
};

const createNews = async (req, res) => {
   const { title, content } = req.body;

   const newNews = new newsModel({
      title,
      content,
   });

   try {
      await newNews.save();
      res.status(201).json(newNews);
   } catch (error) {
      res.status(409).json({ message: error.message });
   }
};

const updateNews = async (req, res) => {
   // const { id } = req.params.id;
   await newsModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      (err, post) => {
         if (err) return next(err);
         res.json(post);
      }
   );

   // newsModel
   //   .findByIdAndUpdate(id, req.body)
   //   .then((tournaments) => res.json(tournaments))
   //   .catch((error) => res.status(400).json("error: " + error));
};

const deleteNews = async (req, res) => {
   const { id } = req.params;
   await newsModel.findByIdAndRemove(id);
   res.json({ message: "tournament deleted successfully." });
};

exports.getNews = getNews;
exports.getNewsById = getNewsById;
exports.createNews = createNews;
exports.updateNews = updateNews;
exports.deleteNews = deleteNews;
