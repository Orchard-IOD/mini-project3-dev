const express = require("express");
const cors = require("cors");
const colors = require("colors");
const dotenv = require("dotenv").config();

// database connection logic
const connectDB = require("./config/dbConnect");

// create express application instance
const app = express();

// middleware
// allow frontend to talk to backend
app.use(cors());
// auto parse JSON requests into JS objects - store them in req.body.
app.use(express.json());
// parse form data into req.body - true allows parsing arrays
app.use(express.urlencoded({ extended: true }));

// connect to mongodb
connectDB();

// import external routes
const userRoutes = require("./routes/userRoutes");
const recipeRoutes = require("./routes/recipeRoutes");

// use imported routes
app.use("/api/users", userRoutes);
app.use("/api/recipes", recipeRoutes);

app.get("/", (req, res) => {
  res.send(`Mini project 3 group exercise<br>Express Backend`);
});

// set port
const port = process.env.PORT || 8080;

// start server
app.listen(port, () => console.log(`Server running on port:${port}`));
