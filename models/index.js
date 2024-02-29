'use strict';
const Sequelize = require('sequelize');
// console.log(process.env.DB_MODE);
console.log(process.env.NODE_ENV);
const config = require(__dirname + '/../config/config.js')[process.env.NODE_ENV];
console.log(config);
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.Comment = require('./Comment')(sequelize, Sequelize);

module.exports = db;
