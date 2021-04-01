require("dotenv").config();
const mongoose = require('mongoose');
require("../config/dbConnection");
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

const User = require("../models/User");

let userDocs = [
    new User({
      firstName: "alice",
      email: "alice@gmail.com",
      password: bcrypt.hashSync("alice", bcrypt.genSaltSync(bcryptSalt)),
    }),
    new User({
      firstName: "bob",
      email: "bob@gmail.com",
      password: bcrypt.hashSync("bob", bcrypt.genSaltSync(bcryptSalt)),
    }),
  ];

  User.insertMany(userDocs)
  .then(insertUser => console.log(insertUser))
  .catch(err => console.log(err))