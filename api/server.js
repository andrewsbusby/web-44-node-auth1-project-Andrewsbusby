const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const session = require('express-session');

const userRouter = require('./users/users-router');
const authRouter = require('./auth/auth-router');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use(session({
  name: 'chocolatechip',
  secret: 'let make this a long secret',
  cookie: {
    maxAge: 1000 * 60 * 60,
    secure: false,
    httpOnly: true
  },
  rolling: true,
  resave: false,
  saveUninitialized: false
}))

server.use('/api/users', userRouter)
server.use('/api/auth/', authRouter)

server.get("/", (req, res) => {
  res.json({ api: "up" });
});

server.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;
