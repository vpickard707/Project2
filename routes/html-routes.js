// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");
const db = require("../models");

module.exports = function(app) {
  app.get("/", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.render("signup");
  });

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.render("login");
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, (req, res) => {
    db.Biopage.findAll({
      where: {
        userId: req.user.id,
      },
    }).then((biopage) => {
      console.log(biopage);
      res.render("members", { user: req.user, biopage });
    });
  });

  app.get("/cms", isAuthenticated, (req, res) => {
    res.render("cms", req.user);
  });

  app.get("/blog", isAuthenticated, (req, res) => {
    res.render("blog", req.user);
  });

  app.get("/homepage", isAuthenticated, (req, res) => {
    res.render("homepage", req.user);
  });

  app.get("/biopage", isAuthenticated, (req, res) => {
    db.Biopage.findAll({
      where: {
        userId: req.user.id,
      },
    }).then((biopage) => {
      if (biopage.length > 0) {
        res.render("biopage", { user: req.user, hasBiopage: true });
      } else {
        res.render("biopage", { user: req.user, hasBiopage: false });
      }
    });
  });
};
