var img = '';
function preload(){
    img = loadImage('https://i.postimg.cc/tg9WXW6s/dog-cat.jpg');
}
function setup(){
    canvas = createCanvas(640, 420)
    canvas.center();
}
function draw(){
    image(img, 0, 0, 640, 420);
    fill('cyan');
    stroke('cyan');
    strokeWeight(1)
    textSize(25)
    text('Dog', 150, 45)
    noFill();
    rect(150, 50, 170, 280)
    fill('lime');
    stroke('lime');
    strokeWeight(1)
    textSize(25)
    text('Cat', 300, 90)
    noFill();
    rect(300, 95, 300, 230)
    fill('yellow');
    stroke('yellow');
    strokeWeight(1)
    textSize(25)
    text('Bowl', 280, 320)
    noFill();
    rect(280, 325, 115, 90)
}