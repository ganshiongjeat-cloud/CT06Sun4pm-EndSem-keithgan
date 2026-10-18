let posX, xspeed;

function setup(){
    createCanvas(600,400)
    posX = width/2;
    xspeed = 5;
    fill('limegreen');
}

function draw(){
    background("lightblue");
    fill("green");
    circle(posX, height/2,50);
    posX += xspeed;

    if (posX >= width-25 || posX <= 25){
        xspeed = -xspeed;
    }
}
