const Result = require("../models/result");
const Party = require("../models/party");
const Member = require("../models/member");
const Seat = require("../models/seat");
const Region = require("../models/region");

exports.resultGetAll = (req, res, next) => {
    Result.findAll({
        ...req.functionParams,
        include: [
            {
                model: Seat,
                include: [
                    {
                        model: Region
                    }
                ]
            },
            {
                model: Member
            },
            {
                model: Party,
                attributes: ["name"]
            }
        ]
    })
    .then((results) => {
        if (results.length > 0){
            const response = {
                count: results.length,
                results: results.map(result => {
                    return {
                        id: result.id,
                        seat: result.seat.name,
                        province: result.seat.region.name,
                        member: `${result.member.firstName} ${result.member.lastName}`,
                        party: result.party.name,
                        voteAbs: result.voteAbs,
                        votePct: result.votePct
                    }
                })
            }
            res.status(200).json(response);
        }
        else{
            res.status(200).json({
                message: "No results found"
            })
        }
    })
    .catch(err => {
        res.status(500).json({
            error: err.toString()
        })
    })
}


exports.resultGetOne = (req, res, next) => {
    Result.findOne({
        where: {
            id: req.params.resultId
        },
        include: [
            {
                model: Seat,
                include: [
                    {
                        model: Region
                    }
                ]
            },
            {
                model: Member
            },
            {
                model: Party,
                attributes: ["name"]
            }
        ]
    })
    .then((result) => {
        if (result != null){
            const response = {
                id: result.id,
                seat: result.seat.name,
                province: result.seat.region.name,
                member: `${result.member.firstName} ${result.member.lastName}`,
                party: result.party.name,
                voteAbs: result.voteAbs,
                votePct: result.votePct
            }
            res.status(200).json(response);
        }
        else{
            res.status(200).json({
                message: "Result not found"
            })
        }
    })
    .catch(err => {
        res.status(500).json({
            error: err.toString()
        })
    })
}

