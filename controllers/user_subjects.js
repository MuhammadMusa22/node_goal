const express = require('express');
const { where } = require('sequelize');
const ApiError = require("../utils/api_error");
const { UserSubjects } = require("../models");



module.exports = {
    // getUsers: async (req, res, next) => {
    //     try {
    //         var subjects = await Subjects.findAll();
    //         res.status(200).send(subjects);
    //     } catch (error) {
    //         next(error);
    //     }
    // },
    assignSubjectToUser: async (req, res, next) => {
        try {
            console.log(UserSubjects);
            const { user_id } = req.body;
            const { subject_id } = req.body;
            const assignedSubject = await UserSubjects.create(
                {
                    fk_user_id: user_id,
                    fk_subject_id: subject_id,
                    createdAt: Date.now(),
                }
            );
            res.status(200).send(assignedSubject);
        } catch (e) {
            next(e);
        }
    },
}
