var express = require("express");
var bodyParser = require("body-parser");
// var methodOverride = require("method-override");

var port = process.env.PORT || 3000;

var app = express();

app.use(express.static("public"));

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(bodyParser.json({limit: '200mb'}));
app.use(bodyParser.urlencoded({
    limit: '200mb',
    extended: true
  }));

// app.use(methodOverride("_method"));

// Import routes and give the server access to them.
var face = require("./controllers/face_controller.js");

app.use("/", face);

// var oxford = require('project-oxford')
// var client = new oxford.Client('c6a56dbc2117468ba20aed22858b8454');

// // var port = process.env.PORT || 9999;
// var idOne = "";
// var idTwo = "";


// client.face.detect({
//     path: 'public/assets/images/young2.jpg',
//     analyzesEmotion: true,
//     analyzesAge: true,
//     analyzesGender: true,
//     returnFaceId: true
// }).then(function(response) {
//     idOne = response[0].faceId;
//     console.log('The age is: ' + response[0].faceAttributes.age);
//     console.log('The gender is: ' + response[0].faceAttributes.gender);
//     console.log('The faceId is: ' + idOne);

//     client.face.detect({
//         path: 'public/assets/images/young.jpg',
//         analyzesEmotion: true,
//         analyzesAge: true,
//         analyzesGender: true,
//         returnFaceId: true
//     }).then(function(res) {
//         // console.log(response[0]);
//         idTwo = res[0].faceId;
//         console.log('The age is: ' + res[0].faceAttributes.age);
//         console.log('The gender is: ' + res[0].faceAttributes.gender);
//         console.log('The faceId is: ' + idTwo);

//         client.face.verify([idOne, idTwo]).then(function(data) {
//             console.log(data);
//         });
//     });
// });







// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });

app.listen(port, () => {
    console.log("listening " + port);
});