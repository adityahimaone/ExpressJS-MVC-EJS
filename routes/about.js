var express = require("express");
var router = express.Router();
const aboutCtrl = require("../controllers/aboutCtrl");

router.get("/", aboutCtrl.about);
module.exports = router;
