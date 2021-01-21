// Add the following code to server.js:
// Import the node-spotify-api NPM package

//Import the API keys
// const keys = require("./keys.js");

//Import the Axios npm package

//Initialize the spotify API
// const spotify = new Spotify(keys.spotify);

// Add to Service.js dependencies
// const Spotify = require("node-spotify-api");
// const axios = require("axios");
// ======================================================
// console.log('display page');
//======================================================
// For api-routes:
// NOTE: If Web API returns status code 429, it means that you have sent too many requests. When this happens, check the Retry-After header, where you will see a number displayed. This is the number of seconds that you need to wait, before you try your request again.
// app.get("/api/search/:app", function (req, res) {
//     searchRequest = req.params.app

//     spotify
//         .search({ type: 'artist', query: searchRequest })
//         .then(function (response) {

//             artistSongData.name = JSON.stringify(response.artists.items[0].name)

//             artistSongData.image = response.artists.items[0].images[0].url,

//                 artistSongData.followers = JSON.stringify(response.artists.items[0].followers.total)

//         }).then(
//             spotify
//                 .search({ type: 'track', query: searchRequest })
//                 .then(function (response) {

//                     artistSongData.songName = JSON.stringify(response.tracks.items[0].name),

//                         artistSongData.songPreview = JSON.stringify(response.tracks.items[0].preview_url)

//                     console.log("This is the artistSongData")
//                     console.log(artistSongData)

//                     res.json(artistSongData)
//                 })
//         )

// });
// ============================================================================
// Spotify search api endpoint:
// GET https://api.spotify.com/v1/search
// need json response?
// add to readme: https://github.com/spotify/web-api-auth-examples
//Note: As app.js is not in the /public directory, its machinations cannot be seen from a web browser. This is important because we never want to expose our application Client Secret to a user. Make sure that you safeguard your application Client Secret at all times.
// Be aware, for example, that if you commit your code to a public repository like GitHub you will need to *remove the Client Secret from your code before doing so*.
// web api tutorial: https://developer.spotify.com/documentation/web-api/quick-start/
// ============================================================================
// Client ID is the unique identifier of your application.
// Client Secret is the key that you pass in secure calls to the Spotify Accounts and Web API services. Always store the client secret key securely; never reveal it publicly! If you suspect that the secret key has been compromised, regenerate it immediately by clicking the link on the edit settings view.
// Code Flow:
// 1. Have your application request authorization; the user logs in and authorizes access
// Your application sends a request to the Spotify Accounts service. The reason your application sends this request may vary:

// A step in the initialization of your application.
// A response to a user action, like a button click.
// The GET request is sent to the /authorize endpoint of the Accounts service:

// GET https://accounts.spotify.com/authorize
