leftWristX=0;
leftWristY=0;
RightWristX=0;
RightWristY=0;
song="";
function setup(){
canvas=createCanvas(600,500);
canvas.center();
video=createCapture(VIDEO);
video.hide();
posenet=ml5.poseNet(video,modelloaded);
posenet.on("pose",gotPoses);

}
function preload(){
song = loadSound("song.mp3");
}
function draw() {
image(video,0,0,600,500);
}
function Play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}
function Stop(){
    song.stop();
}
function  modelloaded(){
    console.log("posenet is loaded")
}
function gotPoses(results){
    if(results.length >0){
        console.log(results);
        leftWristX =results[0].pose.leftWrist.x;
        leftWristY =results[0].pose.leftWrist.y;
        console.log("leftWristX" + leftWristX,"leftWristY" + leftWristY);
        rightWristX =results[0].pose.rightWrist.x;
        rightWristY =results[0].pose.rightWrist.y;
        console.log("rightWristX" + rightWristX,"rightWristY" + rightWristY);
    }
}