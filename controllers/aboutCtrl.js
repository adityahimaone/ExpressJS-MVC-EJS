exports.about = (req, res) => {
  res.render("about", {
    title: "About",
    description: "This is the about page",
  });
};
