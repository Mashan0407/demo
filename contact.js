console.log("contact.js is loaded");
var yoff = 0.0;


function setup(){
    var myCanvas = createCanvas(window.innerWidth, window.innerHeight);
    myCanvas.parent('contact-page-anim');
        
}

function draw(){
    clear();
    
    fill(0);
    ellipse(200,200, 100,100);
    
    beginShape();
    var xoff=0;
    
    for (var x = 0; x <= window.innerWidthwidth + 10; x+=10){
         var y = map(noise(xoff, yoff), 0, 1, window.innerHeight-400, window.innerHeight);
        vertex(x, y);
        xoff += 0.05;
    }
    
    vertex(window.innerWidth,window.innerHeight);
    vertex(0, window.innerWidth);
    
    endShape();
    
    yoff += 0.01;
}


//var bugs = [] //object array


//function setup() {
//console.log("setup is loaded");
  //  var myCanvas = createCanvas(window.innerWidth, window.innerHeight);
//    myCanvas.parent('contact-page-anim');}

//function draw() {
    //transparent background
 //clear();

   // for (var i = 0; i < bugs.length; i++){
     //   bugs[i].move();
//        bugs[i].display();
  //  }
     
//}

// bug class starts here
//function Bug() {
  //  this.x = random(100, window.innerWidth);
//    this.y = random(100, window.innerHeight);
//    this.radius = random(10, 30);
//    this.speed = 1;

//    this.move = function () {
  //      this.x += random(-this.speed, this.speed);
//        this.y += random(-this.speed, this.speed);
  //  };

//    this.display = function () {
  //      fill("rgb(124, 252, 0)");
//        ellipse(this.x, this.y, this.radius, this.radius);
//    };
//};

//function mouseClicked() {
//    bugs.push(new Bug());
//}