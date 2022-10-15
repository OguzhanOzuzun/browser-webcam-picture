
// Const structures
const video = document.getElementById("video");
const canvas = document.getElementById("canvas");
const takepicbutton = document.querySelector("a");
const startwebcam =  document.querySelector('.startwebcam');
const webcam = new Webcam(video, "user", canvas);

// adding event: when he login to site this event will be activated! Its shows your webcam!
startwebcam.addEventListener("click", () => {
    webcam.start();
})

// added event: when click to "Take Picture" its take picture with this event!
takepicbutton.addEventListener("click", () => {
    let picture = webcam.snap();
    takepicbutton.href = picture;
})
