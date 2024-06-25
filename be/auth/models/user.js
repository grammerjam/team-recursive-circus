const db = require("../db/db");
const bcrypt = require("bcrypt");
const { BadRequestError, UnauthorizedError } = require("../expressError");

const { BCRYPT_WORK_FACTOR } = require("../config.js");

class User {
  static async authenticate(username, password) {
    const user = await db("users").where({ username }).first();

    if (user) {
      const isValid = await bcrypt.compare(password, user.password);
      if (isValid === true) {
        delete user.password;
        return user;
      }
    }
    throw new UnauthorizedError("Invalid username/password");
  }

  static async register({ username, password, firstName, lastName, email }) {
    const duplicateCheck = await db("users").where({ username }).first();

    if (duplicateCheck) {
      throw new BadRequestError(`Duplicate username: ${username}`);
    }

    const hashedPassword = await bcrypt.hash(password, BCRYPT_WORK_FACTOR);

    const result = await db("users").insert({
      username: username,
      password: hashedPassword,
      firstName: firstName,
      lastName: lastName,
      email: email,
    });

    const user = result.rows[0];

    return user;
  }
}

module.exports = User;
