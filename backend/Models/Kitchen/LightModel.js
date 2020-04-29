const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const lightSchema = new Schema({
    light: {
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

const Light  = mongoose.model('light', lightSchema);

module.exports = Light;
// module.exports = connectDB;