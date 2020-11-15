const { Sequelize } = require('sequelize');

let databaseUrl;

if(process.env.NODE_ENV !== 'production'){
    databaseUrl = process.env.API_DATABASE_URL;
} else {
    databaseUrl = process.env.DATABASE_URL;
}

module.exports = new Sequelize(`${databaseUrl}`,{
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
});