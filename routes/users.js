var express = require("express");
var router = express.Router();
const usersController = require("../controllers/usersCtrl");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/info", function (req, res, next) {
  res.send("ini dari info");
});

router.get("/user-list", usersController.listUsers);

module.exports = router;
