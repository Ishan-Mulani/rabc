const User = require("../model/user.model");

async function createUser(userInfo) {
  const newUser = await new User(userInfo);
  await newUser.save();
  return newUser;
}

async function findUser(email) {
  return await User.findOne(email);
}

module.exports = {
  createUser,
  findUser,
};
