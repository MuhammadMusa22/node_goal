const express = require('express');
// const { Sequelize } = require('sequelize');
// const sequelize = require('../config/dbconfig');
const Users = require('../models/user')
module.exports = {
    getUsers: async (req, res, next) => {
        try {
            var users = await Users.findOne({ where: { id: 1 } });
            res.status(200).send(users);
        } catch (error) {
            console.log(error);
            next(error);
        }
    }
}