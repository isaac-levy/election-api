module.exports = (req, res, next) => {
    const functionParams = {
        limit: 20
    };
    const acceptableOpts = ["limit", "offset"];

    if(req.query){
        for(let [key, value] of Object.entries(req.query)){
            if(acceptableOpts.includes(key) && !isNaN(parseInt(value))){
                functionParams[`${key}`] = parseInt(value);
            }
        }
    }

    req.functionParams = functionParams;
    next();
}