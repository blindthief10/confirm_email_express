const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: {type: String, required: true, lowercase: true},
  lastName: {type: String, required: true, lowercase: true},
  userName: {type: String, required: true, minLength:[4, 'Username must be longer than 8 characters'], maxLength: [20, 'Username cannot be longer than 20 characters']},
  email: {type: String, required: true, lowercase: true, match: [/^[0-9A-Za-z\.]{3,30}\@[0-9A-Za-z]{2, 20}\.[a-zA-Z]{2,10}$/i, 'The email you provided its not valid']},
  password: {type: String, mingLength: [8, 'Password must be at least 8 characters long'], maxLength: [20, 'Password must not exceed 20 characters']},
  isConfirmed: {type: Boolean, default: false},
  temporaryToken: String
})

const userModel = mongoose.model('users', userSchema);

module.exports = userModel;
