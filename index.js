const express = require("express");
const dotenv = require("dotenv");

// route file

const bootcamps = require("./routes/bootcamps")

// lode env vars

dotenv.config({path: "./config/config.env"});

const app = express();

// mount routers 
app.use( "/api/v1/bootcamps", bootcamps);

const PORT  = process.env.PORT || 5000;

app.listen(PORT,console.log(`server running in ${process.env.NODE_ENV} Mode on port is ${PORT} ` ));