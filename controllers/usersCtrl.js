const UsersModels = require("../models/users");

exports.listUsers = (req, res) => {
  UsersModels.findAll().then((users) => {
    res.json(users);
  });
};
