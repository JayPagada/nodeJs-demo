const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./config/db");

// lode env vars
dotenv.config({ path: "./config/config.env" });

// connect to dataBase
connectDB();

const logger = require("./middleware/logger");
// route file

const bootcamps = require("./routes/bootcamps");

const app = express();

// dev logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(logger);

// mount routers
app.use("/api/v1/bootcamps", bootcamps);

const PORT = process.env.PORT || 5000;

const index = app.listen(
  PORT,
  console.log(
    `server running in ${process.env.NODE_ENV} Mode on port is ${PORT} `
  )
);
// Handle UnHandle Promise Rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);
  // close serever & exit process
  index.close(() => {
    process.exit(1);
  });
});
