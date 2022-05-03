const express = require("express");
const router = express.Router();
const User = require('../controllers/User');

router.post('/auth/google', async (req,res) => {
  const { token }  = req.body;
  let user = await new User().upsertUser(token);
  
  res.status(201);
  res.json(user);
});

module.exports = router;