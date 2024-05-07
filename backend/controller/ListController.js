const express = require("express");
const ListModel = require("../model/ListModel");

const createList = async (req, res) => {
    try {
        const {typeList, description } = req.body;

        const newList = await ListModel.create({
            typeList,
            description,
        });

        return res.status(201).json({
            typeList,
            description,
        });

    } catch(error){
        console.error(error);
        res.status(400).json({
            created: false,
            message: error,
        }); 
    }
}

module.exports = createList;