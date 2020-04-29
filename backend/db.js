const mongoose = require('mongoose');
const MONGO_URL = "mongodb+srv://simas2275:smarthome@smarthome-p5rsu.mongodb.net/test?retryWrites=true&w=majority";
const express = require("express");

const app = express();
const connectDB = async () => {
  console.log('Connecting to: ', MONGO_URL);
  await mongoose.connect(MONGO_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true
  });
  console.log('db connected..!');
};



module.exports = connectDB;
