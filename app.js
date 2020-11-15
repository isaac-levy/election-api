const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const sequelize = require("./config/database");

const generalRoute = require("./routes/general");
const electionRoutes = require("./routes/election");
const memberRoutes = require("./routes/member");
const partyRoutes = require("./routes/party");
const regionRoutes = require("./routes/region");
const resultRoutes = require("./routes/result");
const seatRoutes = require("./routes/seat");

try {
    sequelize.authenticate();
   console.log('Connection has been established successfully.');
 } catch (error) {
   console.error('Unable to connect to the database:', error);
 }

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods",  "GET");
    return res.status(200).json({});
  }
  next();
});

app.use("/", generalRoute);
app.use("/election", electionRoutes);
app.use("/member", memberRoutes);
app.use("/party", partyRoutes);
app.use("/region", regionRoutes);
app.use("/result", resultRoutes);
app.use("/seat", seatRoutes);

app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
  });
  
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
      error: {
        message: error.message,
      },
    });
});

module.exports = app;