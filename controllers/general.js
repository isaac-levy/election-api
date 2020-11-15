exports.allRoutes = (req, res, next) => {
    res.status(200).json({
        Members: "https://election-data-api.herokuapp.com/member",
        Parties: "https://election-data-api.herokuapp.com/party",
        Regions: "https://election-data-api.herokuapp.com/region",
        Seat: "https://election-data-api.herokuapp.com/seat",
        Election: "https://election-data-api.herokuapp.com/election",
        Result: "https://election-data-api.herokuapp.com/result"
    })
}