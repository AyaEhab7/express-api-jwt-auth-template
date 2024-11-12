const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/user');

const router = express.Router();

router.post('/signup', async (req, res) => {
  try {
    const userInDatabase = await User.findOne({ username: req.body.username });

    if (userInDatabase) throw new Error('Username already taken.');

    // if user doesnt exist, create a user
    const user = await User.create({
      username: req.body.username,
      hashedPassword: bcrypt.hashSync(req.body.password, parseInt(process.env.SALT_ROUNDS)),
    });
    console.log(user);
    res.status(201).json({ user });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: 'Something Went wrong!' });
  }
});

module.exports = router;