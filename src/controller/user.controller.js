const User = require("../model/user.model");
const { validatePassword, hashPassword } = require("../utils/auth");
const { createUser, findUser } = require("../services/user.servies");

async function signup(req, res) {
  const { email, password, role } = req.body;
  const encryptedPassword = hashPassword(password);
  await createUser({ email, password: encryptedPassword, role });
}

async function login(req, res) {
  const { email, password } = req.body;
  const user = findUser(email);
  if (!user) return res.send("User does not exist");

  const validPassword = validatePassword(password, user.password);
  if (!validPassword) return res.send("Incorrect Password");

  res.send(user);
}

module.exports = {
  signup,
  login,
};
