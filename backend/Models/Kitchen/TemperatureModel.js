const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const temperatureSchema = new Schema({
    temperature: {
      type: Number,
      required: true
    },
    name: {
      type: String
    },
    date: {
      type: Date,
      default: Date.now
    }
  });

const Temperature  = mongoose.model('temperature', temperatureSchema);

module.exports = Temperature;
// module.exports = connectDB;