const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: Number, default: '', required: false },
  images: { type: String, default: false },
  address: { type: String, default: '', required: false },
  city: { type: String, default: '', required: false },
  state: { type: String, default: '', required: false },
  country: { type: String, default: '', required: false },
  zipCode: { type: String, default: '', required: false },
  description: { type: String, default: '', required: false },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
