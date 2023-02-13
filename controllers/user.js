const express = require('express');
const { where } = require('sequelize');
const ApiError = require("../utils/api_error");
const { Users } = require("../models");


let users = [];


module.exports = {
    getUsers: async (req, res, next) => {
        try {
            var users = await Users.findAll();
            res.status(200).send(users);
        } catch (error) {
            next(error);
        }
    },
    createUser: async (req, res, next) => {
        try {
            const { name } = req.body;
            const musa = await Users.create(
                {
                    userName: name,
                    createdAt: Date.now(),
                }
            );

            res.status(200).send(musa);
        } catch (e) {
            next(e);
        }
    },
    updateUser: async (req, res, next) => {
        try {
            const { userId } = req.params;
            const { name } = req.body;
            const findedUser = await Users.findByPk(userId);
            if (!findedUser) {
                throw  ApiError(404, "User not found");
            }
            const updateUser = await Users.update(
                {
                    userName: name

                }, {
                where: {
                    id: userId
                }
            }
            );
            if (!updateUser) {
                res.send({
                    code: 401,
                    success: false,
                    message: "User data",
                    data: "Some error occur while updating user",
                });
            }
            res.send({
                code: 200,
                success: true,
                message: "User data",
                data: "User updated successfully",
            });
        } catch (e) {
            next(e);
        }
    },
    getSingleUserDetails: async (req, res, next) => {
        try {
            const { userId } = req.params;
            const findedUser = await Users.findByPk(userId);
            if (!findedUser) {
                throw new ApiError(404, "User not found");
            }
            res.send({
                code: 200,
                success: true,
                message: "User Data",
                data: { findedUser },
            });

        } catch (e) {
            next(e);
        }
    }
}
