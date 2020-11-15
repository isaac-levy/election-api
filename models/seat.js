const Sequelize = require("sequelize");
const db = require('../config/database');
const Region = require('./region');

const Seat = db.define('Seat', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
    name: {
        type: Sequelize.STRING(200),
        allowNull: false
    }
});

Seat.belongsTo(Region, {
    foreignKey: 'provinceId'
})

module.exports = Seat;