
// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// An array to keep track of how often random numbers are picked

let randomCounts = [];
let total = 20;

function setup() {
  createCanvas(640,360);
  for (let i = 0; i < total; i++) {
    randomCounts[i] = 0;
  }
  frameRate(30);
}

function draw() {
  background(127);
  let index = floor(random(total));
  randomCounts[index]++;

  // Draw a rectangle to graph results
  stroke(0);
  strokeWeight(1);
  fill(255);

  // let w = width/randomCounts.length;
  let w = width/total; // sama saja ternyata dengan di atas...

  for (let x = 0; x < randomCounts.length; x++) {
    rect(x*w,height-randomCounts[x],w-1,randomCounts[x]);
  }

  text(frameCount,10,20);
  text(index,10,30);
}
