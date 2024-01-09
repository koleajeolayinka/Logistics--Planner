// User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  customerName: String,
  pickupLocation: String,
  dropOffLocation: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;
