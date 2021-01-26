// Requiring necessary npm packages
require("dotenv").config();
const Spotify = require("node-spotify-api");
// const axios = require("axios");
//const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");

// Requiring passport as we've configured it
const passport = require("./config/passport");

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 8080;
const db = require("./models");

//Setting up spotify api
var client_id = process.env.CLIENT_ID; // Your client id
var client_secret = process.env.CLIENT_SECRET; // Your secret
var redirect_uri = "REDIRECT_URI"; // Your redirect uri
// console.log(client_id, client_secret);

// app.get("/api/search/:app", function (req, res) {
// searchRequest = req.params.app;
// spotify
// var artistSongData = {
//   name: "",
//   image: "",
//   followers: "",
//   songName: "",
//   songPreview: "",
// };

// var searchRequest = "";

// search({ type: "artist", query: searchRequest })
//   .then(function(response) {
//     artistSongData.name = JSON.stringify(response.artists.items[0].name);

//     (artistSongData.image = response.artists.items[0].images[0].url),
//       (artistSongData.followers = JSON.stringify(
//         response.artists.items[0].followers.total
//       ));
//   })
//   .then(
//     spotify
//       .search({ type: "track", query: searchRequest })
//       .then(function(response) {
//         (artistSongData.songName = JSON.stringify(
//           response.tracks.items[0].name
//         )),
//           (artistSongData.songPreview = JSON.stringify(
//             response.tracks.items[0].preview_url
//           ));

//         console.log("This is the artistSongData");
//         console.log(artistSongData);

//         res.json(artistSongData);
//       })
//   );

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
