const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  role: {
    type: String,
    enum: ['user', 'admin'], // Define roles (you can add more roles as needed)
    default: 'user' // Set a default role for new users
  }
});

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
