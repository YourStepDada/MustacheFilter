noseX = 0;
noseY = 0;
    
function preload(){
        mustache = loadImage('https://i.postimg.cc/nc0V1rMv/1-16499-transparent-background-mustache-png-removebg-preview.png')
    }


function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('Posenet is initialised');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x - 29;
        noseY = results[0].pose.nose.y + 5;
        console.log("noseX = " + noseX);
        console.log("noseY = " + noseY);
    }
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(mustache, noseX, noseY, 60, 35);
}

function take_snapshot(){
    save('myFilterImage.png');
}