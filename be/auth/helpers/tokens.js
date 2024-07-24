const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config");

//returns signed JWT from username
function createUserToken(user) {
  let payload = {
    username: user.username,
  };

  return jwt.sign(payload, SECRET_KEY);
}

module.exports = { createUserToken };
