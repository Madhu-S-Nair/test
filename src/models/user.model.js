const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    role: {
      type: String,
      default: 'user',
    }
  },
  {
    timestamps: true,
  }
);


/**
 * @typedef User
 */
const User = mongoose.model('User', userSchema);

module.exports = User;
