Webcam.set({
    width: 350,
    heigth: 300,
    image_format: 'png',
    png_quaity: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    });

}

console.log('ml5 version:', ml5.version);


classifier = ml5.imageClassifer('https://teachablemachine.withgoogle.com/models/M6woU3C4T/', modelLoaded);