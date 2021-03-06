// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

let walker;

function setup() {
  createCanvas(640,360);
  walker = new Walker();
  background(127);
  frameRate(15);
}

function draw() {
  walker.step();
  walker.render();
  noStroke();
  rect(10, 10, 50, 20)
  text(frameCount,10,20);
  text(round(walker.r,3),10,30);
}

class Walker{
  constructor(){
    this.x = width/2;
    this.y = height/2;
  };

 render() {
    stroke(0);
    point(this.x,this.y);
  };

  step(){
    var r = random(1);
    this.r = r;
      // A 40% of moving to the right!
    if (r < 0.4) { // 40 % ke kanan
      this.x++;
    } else if (r < 0.6) { // 20 % ke kiri
      this.x--;
    } else if (r < 0.8) { // 20 % ke kanan
      this.y++;
    } else { // 20 % ke bawah
      this.y--;
    }
    this.x = constrain(this.x,0,width-1);
    this.y = constrain(this.y,0,height-1);
  };
}
