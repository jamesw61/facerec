'use strict';
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
//     // this.href = bacon;
//     console.log(bacon);
//     // $('.camWindow').html()

//     var honey = bacon.toString();
//     console.log("vvv: " + honey);

//      $.post('/face', honey);
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
navigator.mediaDevices.getUserMedia({video: true})
  .then( gotMedia)
  .catch(error => console.error('getUserMedia() error:', error));

function gotMedia(mediaStream) {
  const mediaStreamTrack = mediaStream.getVideoTracks()[0];
  const imageCapture = new ImageCapture(mediaStreamTrack);
  console.log(imageCapture);


var snap = document.querySelector('.snap');

snap.onclick = function() {
const img = document.querySelector('img');
// ...
imageCapture.takePhoto()
  .then(blob => {
    img.src = URL.createObjectURL(blob);
    console.log('blob', blob);
    var z = {};
    console.log('img', img);
  
     

    img.onload = () => { URL.revokeObjectURL(this.src); }
  })
  .catch(error => console.error('takePhoto() error:', error));
}
  
}

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