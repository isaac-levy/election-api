const Sequelize = require('sequelize');
const db = require('../config/database');
const Seat = require('./seat');
const Member = require('./member');
const Party = require('./party');

const Result = db.define('Result', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
    electionId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: "Election",
            key: 'id'
        }
    },
    voteAbs: {
        type: Sequelize.NUMBER,
        allowNull: false
    },
    votePct: {
        type: Sequelize.NUMBER,
        allowNull: false
    },
    wonSeat: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
});

Result.belongsTo(Seat, {
    foreignKey: 'seatId'
});

Result.belongsTo(Member, {
    foreignKey: 'memberId'
});

Result.belongsTo(Party, {
    foreignKey: 'partyId'
})


module.exports = Result;