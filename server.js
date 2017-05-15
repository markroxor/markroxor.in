var http = require("http");
var express = require("express");
var app = express();
var finalhandler = require('finalhandler');
var serveStatic = require('serve-static');
// Authentication module. 
var auth = require('http-auth');
var basic = auth.basic({
        realm: "Simon Area."
    }, (username, password, callback) => { 
        // Custom authentication 
        // Use callback(error) if you want to throw async error. 
        callback(username === "mark" && password === "spongebob");
    }
);
var serve = serveStatic("./");

// Creating new HTTP server. 
var server = http.createServer((req, res) => {
  var done = finalhandler(req, res);
  serve(req, res, done);
//    res.end(`Welcome to private area - ${req.user}!`);
//port = process.env.PORT || 80;

//app.use(express.static(__dirname + '/public'));
//app.listen(port);
//    app.use(express.static('public'))
}).listen(80);

