const express = require("express");
const router = express.Router();
const User = require('../controllers/User');

router.get('/users', async (req,res) => {
  let users = await new User().getUsers();
  res.send(users);
});

module.exports = router;