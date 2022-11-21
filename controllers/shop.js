const express = require('express');
const User = require('../models/user.js');


module.exports = {
    getUserShops: async (req, res, next) => {
        try {
            res.status(200).send('User Shops');
        } catch (error) {
            next(error);
        }
    }
}