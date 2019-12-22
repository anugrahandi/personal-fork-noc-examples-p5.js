// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

let walker;

function setup() {
  createCanvas(640,360);
  walker = new Walker();
  background(127);
}

function draw() {
  walker.step();
  walker.render();
  fill(94, 94, 71);
  rect(5, 10, 100, 30);
  textSize(20);
  fill(226, 230, 21);
  text(walker.step_number, 10, 30);
}

class Walker {
  constructor(){
    this.x = width/2;
    this.y = height/2;
    this.step_number = 0;
  }

  render() {
    stroke(0);
    // point(this.x,this.y);
    circle(this.x,this.y,5);
    this.step_number++;
  }

  step() {
    var choice = floor(random(4));
    if (choice === 0) {
      this.x++;
    } else if (choice == 1) {
      this.x--;
    } else if (choice == 2) {
      this.y++;
    } else {
      this.y--;
    }
    this.x = constrain(this.x,0,width-1);
    this.y = constrain(this.y,0,height-1);
  }
}
