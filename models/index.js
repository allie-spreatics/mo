'use strict';
const Sequelize = require('sequelize');

const config = require(__dirname + '/../config/config.js')['prod'];
console.log(config);
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.Comment = require('./Comment')(sequelize, Sequelize);

module.exports = db;
