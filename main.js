function setup(){
    canvas=createCanvas(350,300);
    canvas.position(650,300)
    video=createCapture(VIDEO);
    video.size(300,350);
    video.hide();
    song.play();
    PoseNet=ml5.poseNet(video,modelLoaded);
    PoseNet.on("pose", gotPoses);
    }

    function modelLoaded(){
        console.log("Model Initialized");
    }

    function gotPoses(results){
        console.log(results);
    }

    function draw(){
        image(video, 0, 0, 350, 300);
    }

    var song="";
function preload(){
    song=loadSound("https://durva123.github.io/Ai-DJ-Music/music.mp3?raw=true");
    
}

function playmusic(){
    song.play();
    song.setVolume(0.5);
    song.rate(1);
}