const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.databasename,
  process.env.userdb,
  process.env.password,
  {
    host: process.env.host,
    port: process.env.port,
    dialect: 'mysql',
  }
);

module.exports = { sequelize };
