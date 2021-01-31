/* eslint-disable camelcase */
// Requiring necessary npm packages
require("dotenv").config();
const Spotify = require("node-spotify-api");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const client_id = process.env.CLIENT_ID; // Your client id
const client_secret = process.env.CLIENT_SECRET; // Your secret
const redirect_uri = "REDIRECT_URI"; // Your redirect uri

// Requiring passport as we've configured it
const passport = require("./config/passport");

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 8080;
const db = require("./models");

//Setting up spotify api
const spotify = new Spotify({
  id: client_id,
  secret: client_secret,
});

spotify.search(
  { type: "track", query: "All the Small Things" },
  (err, data) => {
    if (err) {
      console.log("Error occurred: " + err);
    } else {
      res.render("spotify", data.tracks);
    }
  }
);

// Creating express app and configuring middleware needed for authentication
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(express.static("views/assets"));

// Set Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// We need to use sessions to keep track of our user's login status
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

// Requiring our routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);
require("./routes/biopage-routes.js")(app);

// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
