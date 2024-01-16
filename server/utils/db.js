const mongoose = require("mongoose");

const URI = process.env.MONGO_URI;

const connectDb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("connection is succesfull...");
  } catch (error) {
    console.log("connection failed...");
    process.exit(0);
  }
};

module.exports = connectDb;
