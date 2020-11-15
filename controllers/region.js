const Region = require("../models/region");

exports.regionGetAll = (req, res, next) => {
    Region.findAll(req.functionParams).then((results) => {
        if (results.length > 0){
            const response = {
                count: results.length,
                regions: results.map(result => {
                    return {
                        id: result.id,
                        name: result.name
                    }
                })
            }
            res.status(200).json(response);
        }
        else{
            res.status(200).json({
                message: "No regions found"
            })
        }
    })
    .catch(err => {
        res.status(500).json({
            error: err.toString()
        })
    })
}

exports.regionGetOne = (req, res, next) => {
    Region.findOne({
        where: {
            id: req.params.regionId
        }
    }).then(result => {
        if(result != null) {
            const response = {
                id: result.id,
                name: result.name
            }
            res.status(200).json(response);
        } else {
            res.status(200).json({
                message: "Region not found"
            })
        }
    }).catch(err => {
        res.status(500).json({
            error: err.toString()
        })
    })
}