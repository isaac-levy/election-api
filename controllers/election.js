const Election = require("../models/election");
const Region = require('../models/region');

exports.electionGetAll = (req, res, next) => {
    Election.findAll({
        ...req.functionParams,
        include: [
            {
                model: Region
            }
        ]
    }).then((results) => {
        if (results.length > 0){
            const response = {
                count: results.length,
                elections: results.map(result => {
                    return {
                        id: result.id,
                        region: result.region.name,
                        type: result.voteType,
                        date: result.date
                    }
                })
            }
            res.status(200).json(response);
        }
        else{
            res.status(200).json({
                message: "No elections found"
            })
        }
    })
    .catch(err => {
        res.status(500).json({
            error: err.toString()
        })
    })
}

exports.electionGetOne = (req, res, next) => {
    Election.findOne({
        where: {
            id: req.params.electionId
        },
        include: {
            model: Region
        }
    }).then(result => {
        if(result != null){
           const response = {
                id: result.id,
                region: result.region.name,
                type: result.voteType,
                date: result.date
            }
            res.status(200).json(response);
        } else {
            res.status(200).json({
                message: "Election not found"
            })
        }
    }).catch(err => {
        res.status(500).json({
            error: err.toString()
        })
    })
}