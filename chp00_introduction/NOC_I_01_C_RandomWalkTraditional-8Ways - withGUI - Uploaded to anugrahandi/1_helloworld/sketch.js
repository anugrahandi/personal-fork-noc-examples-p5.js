// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

let walker;

// This is additional var for GUI
var myColor = '#befc03';
var gui;
var Size = 12;

var arrWalker = [];

function setup() {
  var canvas = createCanvas(640,480);
  canvas.parent('holder');
  for(let i = 0; i <= 100; i++) {
    arrWalker.push(new Walker());
    // arrWalker[i] = new Walker();
  };
  // walker = new Walker();
  // walker_2 = new Walker();
  // walker_3 = new Walker();
  // background(127);
  // background(myColor);

  //GUI create
  // add comment here using winSCP direct edit.
  sliderRange(0,90,1);
  gui = createGui('try GUI');
  gui.addGlobals('myColor','Size');
  gui.setPosition(10,490);
  frameRate(30);
}

function draw() {
  background(myColor);
  for(let i = 0; i <= 100; i++) {
    arrWalker[i].step();
    arrWalker[i].render();
  };
  // walker.step();
  // walker.render();
  // walker_2.step();
  // walker_2.render();
  // walker_3.step();
  // walker_3.render();
}

class Walker {
  constructor(){
    this.x = width/2;
    this.y = height/2;
    this.move_arr = [0,0,0,0,0,0,0,0];
    this.move_str = '';
  }
  
  render() {
    stroke(0);
    // point(this.x,this.y);
    fill(255);
    ellipseMode(CENTER);
    circle(this.x,this.y,Size);

    this.print_array();

    fill(0);
    textSize(10);
    textAlign(CENTER);
    // text(this.choice,this.x,this.y+20);
    text(this.move_str,this.x,this.y+25);
  }
  
  print_array() {
    this.move_arr[this.choice] = this.move_arr[this.choice] + 1;
    this.move_str = this.move_arr.join(",");
  }

  step() {
    var choice = floor(random(8));
    this.choice = choice;
    if (choice === 0) {
      this.x++;
    } else if (choice === 1) {
      this.x--;
    } else if (choice === 2) {
      this.y++;
    } else if (choice === 3) {
      this.y--;
    } else if (choice === 4) {
      this.x++;
      this.y++;
    } else if (choice === 5) {
      this.x++;
      this.y--;
    } else if (choice === 6) {
      this.x--;
      this.y++;
    } else {
      this.x--;
      this.y--;
    }
    this.x = constrain(this.x,0,width-1);
    this.y = constrain(this.y,0,height-1);
  }
}
