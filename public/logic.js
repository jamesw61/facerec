'use strict';
// window.onload = function() {
//       var video = document.getElementById('video');
//       var canvas = document.getElementById('canvas');
//       var context = canvas.getContext('2d');
//       var tracker = new tracking.ObjectTracker('face');
//       tracker.setInitialScale(4);
//       tracker.setStepSize(2);
//       tracker.setEdgesDensity(0.1);
//       tracking.track('#video', tracker, { camera: true });
//       let count = 0;
//       tracker.on('track', function(event) {
//         context.clearRect(0, 0, canvas.width, canvas.height);
//         // console.log('a', event.data);
        
//         event.data.some(function(rect) {
//           count++;
//           console.log(count);
//            if(count === 5){
//           console.log('take snapshot');
//         };




//           context.strokeStyle = '#a64ceb';
//           context.strokeRect(rect.x, rect.y, rect.width, rect.height);
//           context.font = '11px Helvetica';
//           context.fillStyle = "#fff";
//           context.fillText('x: ' + rect.x + 'px', rect.x + rect.width + 5, rect.y + 11,);
//           context.fillText('y: ' + rect.y + 'px', rect.x + rect.width + 5, rect.y + 22);
          
//         });
       
//       });

//     };
// $('.title').html('kdflsfj');
// //Put variables in global scope to make them available to the browser console.
// var video = document.querySelector('video');

// var canvas = window.canvas = document.querySelector('canvas');
// canvas.width = 480;
// canvas.height = 360;


// var width = 480;
// var height = 360;
// video.setAttribute('width', width);
// video.setAttribute('height', height);

// var button = document.querySelector('button');
// button.onclick = function() {


//     // canvas.width = video.videoWidth;
//     // canvas.height = video.videoHeight;


//     canvas.getContext('2d').
//     drawImage(video, 0, 0, canvas.width, canvas.height);
//     var bacon = canvas.toDataURL('image/jpeg', .3);
//     console.log('bacon', bacon);

//     $(function() {
//         var params = {
//             // Request parameters
//             "returnFaceId": "true",
//             "returnFaceLandmarks": "false"
            
//         };
      
//         $.ajax({
//             url: "https://westus.api.cognitive.microsoft.com/face/v1.0/detect?" + $.param(params),
//             beforeSend: function(xhrObj){
//                 // Request headers
//                 xhrObj.setRequestHeader("Content-Type","application/json");
//                 xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key",'apiKey');
//             },
//             type: "POST",
//             // Request body
//             data: { 'imgBase64' : bacon },
        
//         })
//         .done(function(data) {
//             alert("success " + data);

//         })
//         .fail(function() {
//             alert("error");
//         });
//     });
//     // this.href = bacon;
//     // console.log(bacon);
//     // $('.camWindow').html()

//     // var honey = bacon.toString();
//     // console.log("vvv: " + honey);

//     //  $.post('/face', honey);

// };

// var constraints = {
//     audio: false,
//     video: true
// };

// function handleSuccess(stream) {
//     window.stream = stream; // make stream available to browser console
//     video.srcObject = stream;
//     // console.log(video.srcObject);
   
// }

// function handleError(error) {
//     console.log('navigator.getUserMedia error: ', error);
// }

// navigator.mediaDevices.getUserMedia(constraints).
// then(handleSuccess).catch(handleError);

//*****************************************************************************************
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
navigator.mediaDevices.getUserMedia({video: true})
  .then( gotMedia)
  .catch(error => console.error('getUserMedia() error:', error));

function gotMedia(mediaStream) {
  const mediaStreamTrack = mediaStream.getVideoTracks()[0];
  const imageCapture = new ImageCapture(mediaStreamTrack);
  console.log(imageCapture);


var snap = document.querySelector('.snap');
const test = document.querySelector('#test');
snap.onclick = function() {
    const image = document.querySelector('#image');

// ...
    imageCapture.takePhoto()
      .then(blob => {
        
        image.src = URL.createObjectURL(blob);
        var y = '"' + image.src + '"';
        var z = image.src.slice(5);
        var t = '"' + z + '"';
        // console.log('is:', z);
        // console.log(y);
        // console.log('blob', blob);
        // test.src = image.src;
        $.post('/face', {'source': y, 'bacon': image.src}, function(data){
          let apiKey = JSON.stringify(data);
          let xyz = JSON.parse(apiKey);
          console.log('xyz', xyz.apiKey);

          // console.log('xyz', xyz);
          // console.log(apiKey);
          // test.src = data.source;
          $(function() {
            var params = {
                // Request parameters
                "returnFaceId": "true",
                "returnFaceLandmarks": "false",
                "returnFaceAttributes": "age,gender",
            };
            var g = $.param(params);
            // console.log('g', g);
          
            $.ajax({
                url: "https://westus.api.cognitive.microsoft.com/face/v1.0/detect?" + $.param(params),
                // url: "https://api.projectoxford.ai/face/v1.0/detect",

                beforeSend: function(xhrObj){
                    // Request headers
                    xhrObj.setRequestHeader("Content-Type","application/octet-stream");
                    xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", data.apiKey);

                },
                type: "POST",         
             
                // Request body
                data: blob,
                processData: false
                
            
            })
            .done(function(data) {
                console.log("success ");
                var jsonData = JSON.stringify(data);
                var parsedData = JSON.parse(jsonData);
                var faceID1 = parsedData[0].faceId;            
                console.log('faceID1', parsedData[0].faceId);
                var newFace = '"' + parsedData[0].faceId + '"';
                console.log('faceID2', newFace);
                    // verifyverifyverifyverifyverifyverifyverifyverifyverifyverifyverifyverifyverifyverifyverifyverifyverifyverify 
                        $(function() {
                            var params = {
                                // Request parameters
                            };

                            var dataObj = {
                                        "faceId" : faceID1,
                                        "personId": "60e003a7-5d98-477e-b686-c55ebceba0ba",
                                        "personGroupId": "uaboot"
                                      };
                            $.ajax({
                                url: "https://westus.api.cognitive.microsoft.com/face/v1.0/verify?" + $.param(params),
                                beforeSend: function(xhrObj){
                                    // Request headers
                                    xhrObj.setRequestHeader("Content-Type","application/json");
                                    xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", data.apiKey);
                                },
                                type: "POST",
                                // Request body
                                data : JSON.stringify(dataObj)
                            })
                            .done(function(data2) {
                                console.log("success2", data2);
                                if(data2.isIdentical){
                                  let percentMatch = data2.confidence * 100;
                                     $('.verdict').text("Yes - " + percentMatch.toFixed(1) + " % match");

                                   }
                                  else {
                                      $('.verdict').text("No");
                                  }
                            })
                            .fail(function(error2) {
                                console.log("error2", error2);
                            });
                        });

                // verifyverifyverifyverifyverifyverifyverifyverifyverifyverifyverifyverifyverifyverifyverifyverifyverifyverify 


            })
            .fail(function(error) {
                alert("error");
                console.log(error.responseText);
                // console.log(error.error());
            });
        });

        });
// detectdetectdetectdetectdetectdetectdetectdetectdetectdetectdetectdetectdetectdetectdetectdetectdetectdetectdetect
         
//detectdetectdetectdetectdetectdetectdetectdetectdetectdetectdetectdetectdetectdetectdetectdetectdetectdetectdetect
 //FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF    
    // $(function() {
    //     var params = {
    //         // Request parameters
    //         // "userData": "{string}",
    //         // "targetFace": "{string}",
    //     };
      
    //     $.ajax({
    //         url: "https://westus.api.cognitive.microsoft.com/face/v1.0/persongroups/uaboot/persons/60e003a7-5d98-477e-b686-c55ebceba0ba/persistedFaces?" + $.param(params),
    //         beforeSend: function(xhrObj){
    //             // Request headers
    //             xhrObj.setRequestHeader("Content-Type","application/octet-stream");
    //             xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","xyz.apiKey");
    //         },
    //         type: "POST",
    //         // Request body
    //         // data: "{body}",
    //         data: blob,
    //         processData: false
    //     })
    //     .done(function(data) {
    //         console.log(data);
    //     })
    //     .fail(function() {
    //         alert("error");
    //     });
    // });
    
//FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF


      
// //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


    // image.onload = () => { URL.revokeObjectURL(this.src); }
//     //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
      })
      .catch(error => console.error('takePhoto() error:', error));
}
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const canvas = document.querySelector('canvas');

// imageCapture.grabFrame()
//   .then(imageBitmap => {
//     canvas.width = imageBitmap.width;
//     canvas.height = imageBitmap.height;
//     canvas.getContext('2d').drawImage(imageBitmap, 0, 0);
//     console.log('i', imageBitmap);

//   })
//   .catch(error => console.error('grabFrame() error:', error));
  
// }
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++
var check = document.querySelector('.check');

check.onclick = function() {
  $.post('/face', {}, function (data){
        console.log(data);
        if(data.isIdentical){
            let percentMatch = data.confidence * 100;
        $('.verdict').text("Yes, a " + percentMatch.toFixed(1) + " % match");

        }
        else {
            $('.verdict').text("No");
        }
     });  
}
}
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

