const db = require("../db/db");
const bcrypt = require("bcrypt");
const { BadRequestError, UnauthorizedError } = require("../expressError");
const { BCRYPT_WORK_FACTOR } = require("../config.js");

//methods on User class
class User {
  //authenticates user with username and password
  static async authenticate(username, password) {
    const user = await db("users").where({ username }).first();

    if (user) {
      //bcrypt compares string password with hashed password on user
      const isValid = await bcrypt.compare(password, user.password);
      if (isValid === true) {
        delete user.password;
        return user;
      }
    }
    throw new UnauthorizedError("Invalid username/password");
  }

  //registers new user
  static async register({ username, password, firstName, lastName, email }) {
    const duplicateCheck = await db("users").where({ username }).first();

    if (duplicateCheck) {
      throw new BadRequestError(`Duplicate username: ${username}`);
    }

    const hashedPassword = await bcrypt.hash(password, BCRYPT_WORK_FACTOR);

    const result = await db("users").insert({
      username: username,
      password: hashedPassword
    });

    const user = result.rows[0];

    return user;
  }
}

module.exports = User;
