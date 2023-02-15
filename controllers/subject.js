const express = require('express');
const { where } = require('sequelize');
const ApiError = require("../utils/api_error");
const { Subjects } = require("../models");


let subjects = ["English","Urdu","Maths"];


module.exports = {
    getUsers: async (req, res, next) => {
        try {
            var subjects = await Subjects.findAll();
            res.status(200).send(subjects);
        } catch (error) {
            next(error);
        }
    },
    createSubject: async (req, res, next) => {
        try {
            const { name } = req.body;
            const subject = await Subjects.create(
                {
                    name: name,
                    createdAt: Date.now(),
                }
            );
            res.status(200).send(subject);
        } catch (e) {
            next(e);
        }
    },
}
