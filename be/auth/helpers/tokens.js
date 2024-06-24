const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config");

function createUserToken(user) {
  let payload = {
    username: user.username,
  };

  return jwt.sign(payload, SECRET_KEY);
}

module.exports = { createUserToken };
