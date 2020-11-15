const Party = require("../models/party");

exports.partyGetAll = (req, res, next) => {
    Party.findAll(req.functionParams).then((results) => {
        if (results.length > 0){
            const response = {
                count: results.length,
                parties: results.map(result => {
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
                message: "No parties found"
            })
        }
    })
    .catch(err => {
        res.status(500).json({
            error: err.toString()
        })
    })
}

exports.partyGetOne = (req, res, next) => {
    Party.findOne({
        where: {
            id: req.params.partyId
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
                message: "Party not found"
            })
        }
        
    }).catch(err => {
        res.status(500).json({
            error: err.toString()
        })
    })
}