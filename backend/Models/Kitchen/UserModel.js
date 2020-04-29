const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
      type: String,
      required: true,
      trim : true,
      minlength : 3,
      unique: true
    },
    password: {
      type: String,
      required: true
    }
  });

const User  = mongoose.model('User', userSchema);

module.exports = User;
// module.exports = connectDB;