var express = require("express");
var router = express.Router();
var oxford = require('project-oxford');
// var keys = require('../config/keys');
var configVar = process.env.apiKey;

router.post("/face", function(req, res) {
    // burger.insertOne(["burger_name", "devoured"], [req.body.name, false], function() {
    // burger.insertOne(["burger_name"], [req.body.name,], function() {
    // res.redirect("/");
    // });
    let y = req.body;
    // console.log(y.source);
    let z = {        
        apiKey: configVar
    }
    res.send(z);
   
                    // var client = new oxford.Client(keys.azureKey);
                    // client.face.detect({
                    //     // data: y,
                    //     url: y.bacon,
                    //     analyzesAge: true,
                    //     analyzesGender: true,
                    //     returnFaceId: true
                    // }).then(function(response) {
                    //     var idOne = response[0].faceId;
                    //     console.log('The 1st age estimate: ' + response[0].faceAttributes.age);
                    //     console.log('The gender is: ' + response[0].faceAttributes.gender);
                    //     console.log('The faceId is: ' + idOne);

                    //     client.face.detect({
                    //         path: 'public/assets/images/profile3.jpg',
                    //         analyzesEmotion: true,
                    //         analyzesAge: true,
                    //         analyzesGender: true,
                    //         returnFaceId: true
                    //     }).then(function(resp) {
                    //         // console.log(response[0]);
                    //         var idTwo = resp[0].faceId;
                    //         console.log('The 2nd age estimate: ' + resp[0].faceAttributes.age);
                    //         console.log('The gender is: ' + resp[0].faceAttributes.gender);
                    //         console.log('The faceId is: ' + idTwo);

                    //         client.face.verify([idOne, idTwo]).then(function(data) {
                    //             console.log(data);
                    //             // res.json(data);
                    //         });
                    //     });
                    // });
});





module.exports = router;