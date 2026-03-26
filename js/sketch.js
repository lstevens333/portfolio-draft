
let canvas;
let xPos = 0;
let yPos = 0;
let easing = .03;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style("z-index", -2);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
function draw() {
    clear();

    xPos = xPos + ((mouseX - xPos) * easing);
    yPos = yPos + ((mouseY - yPos) * easing);

    drawHappy(xPos, yPos);

}


function drawHappy(_x, _y) {
    strokeWeight(0);

    //head
    fill(random(200, 255), random(200, 255), random(200, 255));
    ellipse(_x, _y, 80, 80);

    //eyes
    fill(0);
    ellipse(_x + 14, _y - 5, 20, 20);

    fill(0);
    ellipse(_x - 14, _y - 5, 20, 20);


    //pupils
    fill(random(200, 255), random(200, 255), random(200, 255));
    ellipse(_x + 14, _y - 5, 10, 10);

    fill(random(200, 255), random(200, 255), random(200, 255));
    ellipse(_x - 14, _y - 5, 10, 10);

    //smile
    fill(0);
    arc(_x + 12, _y + 12, 70, 35, HALF_PI, PI);

}


