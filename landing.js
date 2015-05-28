console.log("my js is loaded");
function setup() {
    var myCanvas = createCanvas(window.innerHeight, window.innerWidth);
    myCanvas.parent('landing');
    stroke(224,35,0);
    strokeWeight(1);
    noFill();
}

function draw() {
}

function mouseClicked() {
    ellipse(mouseX, mouseY, 80, 80);
}