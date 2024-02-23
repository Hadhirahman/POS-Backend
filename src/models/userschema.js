
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  restaurantName: { type: String, required: true },
  userName: { type: String, required: true },
  contact: { type: String, required: true,},
  password: { type: String, required: true },
});

module.exports = new mongoose.model('User', userSchema);
