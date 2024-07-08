const User = require("../models/user");
const express = require("express");
const router = new express.Router();
const { createUserToken } = require("../helpers/tokens");

//POST to /auth/token to create user token
router.post("/token", async function (req, res, next) {
  try {
    const { username, password } = req.body;
    const user = await User.authenticate(username, password);
    const token = createUserToken(user);
    return res.json({ token });
  } catch (err) {
    return next(err);
  }
});


//POST to /auth/register to create user token with new user
router.post("/register", async function (req, res, next) {
  try {
    const newUser = await User.register({ ...req.body });
    const token = createUserToken(newUser);
    return res.status(201).json({ token });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
