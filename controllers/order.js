const express=require('express');
const User = require('../models/user.js');

module.exports={
    getUserOrders: async (req, res, next) => {
        try {
            res.status(200).send('User Orders');
        } catch (error) {
            next(error);
        }
    },
}