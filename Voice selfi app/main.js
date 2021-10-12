var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start() {
  document.getElementById("textbox").innerHTML = "";
  recognition.start();
}

recognition.onresult = function (event) {
  console.log(event);

  var Content = event.results[0][0].transcript;

  document.getElementById("textbox").innerHTML = Content;
  console.log(Content);
  if (Content == "take my selfie") {
    console.log("taking selfie --- ");
    speak();
  }
};

function speak() {
  var synthz = window.speechSynthesis;
  speak_data = "taking your selfi in 5 seconds";
  var utterthis = new SpeechSynthesisUtterance(speak_data);
  synthz.speak(utterthis);
  Webcam.attach(camera);
  setTimeout(function () {
    take_snapshot();
    save();
  }, 5000);
}

Webcam.set({
  width: 360,
  height: 250,
  image_format: "png",
  png_quality: 100,
});

camera = document.getElementById("camera");
function take_snapshot() {
  Webcam.snap(function (data_uri) {
    document.getElementById("result").innerHTML =
      '<img  id = "selfie_img"src= "' + data_uri + '">';
  });
}

function save() {
  link = document.getElementById("link");
  img = document.getElementById("selfie_img").src;
  link.href = img;
  link.click();
}
