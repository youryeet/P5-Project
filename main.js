function preload(){
    
}
function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(200,200);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}
function draw(){
    image = (video, 0,0,640,480);
    tint(tint_color);
}
function applyfilter(){
    tint_color = document.getElementById("input").value;
}
function take_snapshot(){
    save('image.png');
}