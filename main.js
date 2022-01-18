screen_width = 0
screen_height = 0
draw_apple = "";
speak_data = "";
to_number = "";

function preload() {
    apple = loadImage("https://th.bing.com/th/id/R.f5d7e7d2286215a34fc1b3cf1fda5716?rik=%2fxhxNMoOO2sMNA&riu=http%3a%2f%2fcliparts.co%2fcliparts%2f8ix%2fK9R%2f8ixK9RebT.png&ehk=FDjX0ltcPWOuS7DQHm7FjSdW9i38c2JD2wsAFIqLLJ0%3d&risl=&pid=ImgRaw&r=0");
}

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() {
    document.getElementById("status").innerHTML = "System is listening, please speak";
    recognition.start();


recognition.onresult = function (event){
    console.log(event);
    content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "The speech has been recognized:" + content;
}

to_number = Number(content);

if (Number.isInteger(to_number)) {
    document.getElementById("status").innerHTML = "Started drawing apple";
    draw_apple = "set"
} else {
    document.getElementById("status").innerHTML = "The speech has not been recognized as a number";
}

}

function setup() {
    screen_width = window.innerWidth;
    screen_height = window.innerHeight;

    canvas = createCanvas(screen_width, screen_height - 150);
    canvas.position(0, 150); 
} 

function draw() {
    if (draw_apple == "set") {
        for (var i = 1; i<=to_number; i++) {
            x = Math.floor(Math.random() * 700);
            y = Math.floor(Math.random() * 400);
            Image(apple, x, y, 50, 50);
        }
        document.getElementById("status").innerHTML = to_number + "Apples drawn";
        speak_data = to_number - "apples drawn";
        speak();
        draw_apple = "";
    }
}