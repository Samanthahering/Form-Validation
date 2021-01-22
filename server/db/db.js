const Sequelize = require('sequelize');

//create an instance of sequelize to create a connection to your database
const db = new Sequelize('postgres://localhost:5432/Canoe-Assignment', {
  logging: false 
});

module.exports = db;