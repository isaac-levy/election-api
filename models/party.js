const Sequelize = require("sequelize");
const db = require('../config/database');

const Party = db.define('Party', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
    name: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true
    }
})

module.exports = Party;