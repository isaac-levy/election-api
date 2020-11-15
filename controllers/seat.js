const Seat = require("../models/seat");
const Region = require("../models/region");

exports.seatGetAll = (req, res, next) => {
    Seat.findAll({
        ...req.functionParams,
        include: [
            {
                model: Region
            }
        ]
    })
    .then((results) => { 
        if(results.length > 0){
            const response = {
                count: results.length,
                seats: results.map(result => {
                    return {
                        id: result.id,
                        name: result.name,
                        province: result.region.name
                    }
                })
            }
            res.status(200).json(response);
        } else {
            res.status(200).json({
                message: "No seats found"
            })
        }
    })
    .catch(err => {
        res.status(500).json({
            error: err.toString()
        })
    })
}

exports.seatGetOne = (req, res, next) => {
    Seat.findOne({
        where: {
            id: req.params.seatId
        },
        include: [
            {
                model: Region
            }
        ]
    })
    .then((result) => { 
        if(result != null){
            const response = {
                id: result.id,
                name: result.name,
                province: result.region.name
            }
            res.status(200).json(response);
        } else {
            res.status(200).json({
                message: "Seat not found"
            })
        }
    })
    .catch(err => {
        res.status(500).json({
            error: err.toString()
        })
    })
}