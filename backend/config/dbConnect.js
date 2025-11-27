const mongoose = require("mongoose");

// Async fn - connect to MongoDB database
const connectDB = async () => {
  try {
    // attempt to connect using .env var
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    // if conn fails log error
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;