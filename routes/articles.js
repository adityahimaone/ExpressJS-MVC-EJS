var express = require("express");
var router = express.Router();
const articlesCtrl = require("../controllers/articlesCtrl");

router.get("/", articlesCtrl.articles);
module.exports = router;
