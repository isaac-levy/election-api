const Sequelize = require('sequelize');
const db = require('../config/database');

const Region = db.define('Region', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
    name: {
        type: Sequelize.STRING(25),
        allowNull: false,
        unique: true
    }
});

module.exports = Region;