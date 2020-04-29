const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const curtainsSchema = new Schema({
    curtains: {
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

const Curtains  = mongoose.model('curtain', curtainsSchema);

module.exports = Curtains;
// module.exports = connectDB;