'use strict';
const tableName = "user_subjects";
const constraintName = "custom_unique_constraint_name"
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    
    await queryInterface.createTable(tableName, {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      fk_user_id: {
        type: Sequelize.INTEGER,
      },
      fk_subject_id: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      }
    });
    await queryInterface.addConstraint(tableName, {
      fields: ['fk_user_id', 'fk_subject_id'],
      type: 'unique',
      name: constraintName
    });
    
  },

  async down(queryInterface) {
    // await queryInterface.removeConstraint(tableName, constraintName)
    await queryInterface.dropTable(tableName);

  }
};
