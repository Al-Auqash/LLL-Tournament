const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userModel = require("../models/user.js");

const router = express.Router();

const getUsers = async (req, res) => {
    try {
        const user = await userModel.find();
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
};

const getUser = async (req, res) => {
    const {id} = req.params;

    try {
        const user = await userModel.findById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
};

const createUser = async (req, res) => {
    //  const { role, username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const newUser = new userModel({
        role: req.body.role,
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
    });

    try {
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
};

const updateUser = async (req, res) => {
    const {id} = req.params;
    const {role, username, email, password} = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`No user with id: ${id}`);
    }
    const updatedUser = {role, username, email, password, _id: id};

    await userModel.findByIdAndUpdate(id, updatedUser, {new: true});

    res.json(updatedUser);
};

const deleteUser = async (req, res) => {
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send(`No user with id: ${id}`);

    await userModel.findByIdAndRemove(id);

    res.json({message: "user deleted successfully."});
};

exports.getUsers = getUsers;
exports.getUser = getUser;
exports.createUser = createUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
