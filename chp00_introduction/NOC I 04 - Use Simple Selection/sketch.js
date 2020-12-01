// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

let walker;

function setup() {
  createCanvas(640,360);
  walker = new Walker(0.5,height/2);
  walker2 = new Walker(0.75,height/2-15);
  background(127);
  // frameRate(10);
}

function draw() {
  walker.step();
  walker.render();
  walker2.step();
  walker2.render();
  fill(94, 94, 71);
  rect(5, 10, 100, 30);
  textSize(20);
  fill(226, 230, 21);
  text(frameCount, 10, 30);
}

class Walker {
  constructor(speed,y){
    this.x = width/2;
    this.y = y;
    this.speed = speed;
    this.saklar = true;
  }

  render() {
    stroke(0);
    // point(this.x,this.y);
    circle(this.x,this.y,10);
  }

  step() {
    var stepx = random(-1,1);
    var stepy = random(-1,1);
    // if (this.saklar == true){
    //   var stepx = 0;
    //   this.saklar = false;
    // }else{
    //   var stepx = 0.1;
    //   this.saklar = true;
    // }
    // var stepy = 0;
    // var stepx = this.speed;
    // console.log(this.x);
    this.x += stepx;
    this.y += stepy;

    this.x = constrain(this.x,0,width-1);
    this.y = constrain(this.y,0,height-1);
  }
}
