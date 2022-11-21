'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    return queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      userName: {
        type: Sequelize.STRING(30),
      },
      createdAt: {
        type: Sequelize.STRING(30),
      },
      updatedAt: {
        type: Sequelize.STRING(30),
      }
    });

  },

  async down(queryInterface, Sequelize) {

    return queryInterface.dropTable('users');

  }
};
