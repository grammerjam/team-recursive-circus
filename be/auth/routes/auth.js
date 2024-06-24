const User = require("../models/user");
const express = require("express");
const router = new express.Router();
const { createUserToken } = require("../helpers/tokens");

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
