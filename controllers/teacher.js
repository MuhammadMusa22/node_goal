const express = require('express');
const { where } = require('sequelize');
const ApiError = require("../utils/api_error");
const { Teachers } = require("../models");


module.exports = {
    getTeachers: async (req, res, next) => {
        try {
            var teachers = await Teachers.findAll();
            res.status(200).send(teachers);
        } catch (error) {
            next(error);
        }
    },
    createTeacher: async (req, res, next) => {
        try {
            const { name } = req.body;
            const musa = await Teachers.create(
                {
                    teacherName: name,
                    createdAt: Date.now(),
                }
            );

            res.status(200).send(musa);
        } catch (e) {
            next(e);
        }
    },
    getSingleTeacherDetails: async (req, res, next) => {
        try {
            const { teacherId } = req.params;
            const findedTeacher = await Teachers.findByPk(teacherId);
            if (!findedTeacher) {
                throw new ApiError(404, "User not found");
            }
            res.send({
                code: 200,
                success: true,
                message: "Teacher Data",
                data: { findedTeacher },
            });

        } catch (e) {
            next(e);
        }
    }
}
