const Sequelize = require('sequelize');
const db = require('../config/database');
const Region = require('./region');

const Election = db.define('Election',{
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    date: {
        type: Sequelize.DATE,
        allowNull: false
    },
    voteType: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

Election.belongsTo(Region, {
    foreignKey: 'jurisdictionId'
});

module.exports = Election;