// require("dotenv").config();

// var Twitter = require("twitter");

// // Import the API keys
// var keys = require("./keys");

// // Import the request npm package.
// var request = require("request");

// // Import the FS package for read/write.
// var fs = require("fs");
var db = require("../models");

// Function for running a Twitter Search
module.exports = function(app) {
var getMyTweets = function() {
  var client = new Twitter(keys.twitter);

  var params = {
    screen_name: "cnn"
  };
  client.get("statuses/user_timeline", params, function(error, tweets, response) {
    if (!error) {
      for (var i = 0; i < tweets.length; i++) {
        console.log(tweets[i].created_at);
        console.log("");
        console.log(tweets[i].text);
      }
    }
  });
};
}
