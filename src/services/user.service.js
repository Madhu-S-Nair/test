const httpStatus = require('http-status');
const { User } = require('../models');
const ApiError = require('../utils/ApiError');


const createUser = async (userBody) => {
  return User.create(userBody);
};


const queryUsers = async () => {
  const users = await User.find();
  return users;
};


const getUserById = async (id) => {
  return User.findById(id);
};


const getUserByEmail = async (email) => {
  return User.findOne({ email });
};


const updateUserById = async (userId, updateBody) => {
  const user = await getUserById(userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  Object.assign(user, updateBody);
  await user.save();
  return user;
};


const deleteUserById = async (userId) => {
  const user = await getUserById(userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  await user.remove();
  return user;
};

module.exports = {
  createUser,
  queryUsers,
  getUserById,
  getUserByEmail,
  updateUserById,
  deleteUserById,
};
