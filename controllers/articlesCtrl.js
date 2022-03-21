const { Article } = require("../models/articles");

exports.articles = (req, res) => {
  Article.findAll().then((articles) => {
    res.render("articles", { title: "Articles", articles });
  });
};
