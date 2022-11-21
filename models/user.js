const Sequelize=require('sequelize');
const sequelize=require('../config/dbconfig.js');

const Users = sequelize.define('users', {
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
}
);

module.exports=Users;




