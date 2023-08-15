const mongoose = require("mongoose");
require("dotenv").config();

// coonect to mongoose

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Mongo DataBase Up");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};


  module.exports = {
    dbConnect
  }

