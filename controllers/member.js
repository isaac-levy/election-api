const Member = require("../models/member");

exports.memberGetAll = (req, res, next) => {
    Member.findAll(req.functionParams).then((results) => {
        if (results.length > 0){
            const response = {
                count: results.length,
                members: results.map(result => {
                    return {
                        id: result.id,
                        firstName: result.firstName,
                        lastName: result.lastName
                    }
                })
            }
            res.status(200).json(response);
        }
        else{
            res.status(200).json({
                message: "No Members found"
            })
        }
    })
    .catch(err => {
        res.status(500).json({
            error: err.toString()
        })
    })
}

exports.memberGetOne = (req, res, next) => {
    Member.findOne({
        where: {
            id: req.params.memberId
        }
    }).then(result => {
        if(result != null){
            const response = {
                id: result.id,
                firstName: result.firstName,
                lastName: result.lastName
            }
            res.status(200).json(response);
        } else {
            res.status(200).json({
                message: "No member found"
            });
        }
    }).catch(err => {
        res.status(500).json({
            error: err.toString()
        })
    })
}