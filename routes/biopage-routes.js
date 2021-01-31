// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");
const db = require("../models");

module.exports = (app) => {
  app.post("/biopage", isAuthenticated, (req, res) => {
    const { favorite, genres, concert, about } = req.body;
    db.Biopage.create({
      favorite,
      genres,
      concert,
      about,
      UserId: req.user.id,
    }).then(() => {
      res.redirect("/members");
    });
  });
};
