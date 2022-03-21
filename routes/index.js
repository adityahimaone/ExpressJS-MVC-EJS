var express = require("express");
var router = express.Router();
const indexCtrl = require("../controllers/indexCtrl");

/* GET home page. */
router.get("/", indexCtrl.index);

// router.get("/", function (req, res, next) {
//   res.render("index", { title: "Express" });
// });

module.exports = router;
