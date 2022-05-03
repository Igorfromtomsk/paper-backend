const express = require('express');
const cors = require("cors");
const app = express();

const usersRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');

const PORT = 8000;

app.use(express.json());
app.use(cors());

app.use(usersRoutes);
app.use(authRoutes);

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.listen(process.env.PORT || PORT);

module.exports = app;