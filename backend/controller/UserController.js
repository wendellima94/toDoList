const express = require("express");
const UserModel = require("../model/UserModel");

const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const newUser = await UserModel.create({
      name,
      email,
      password,
    });

    return res.status(201).json({
      name,
      email,
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      created: false,
      message: error,
    });
  }
};

async function toGet(req, res) {
  try {
    const findAll = await UserModel.find();

    res.status(200).json({
      findAll,
    });
  } catch (error) {
    console.error(error);
  }
}

module.exports =  toGet;
