const Sequelize = require('sequelize');
const db = require('../config/database');

const Member =  db.define('Member', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    firstName: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    lastName: {
      type: Sequelize.STRING(50),
      allowNull: false
    }
});

module.exports = Member;