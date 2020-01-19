// Based on this video : https://www.youtube.com/watch?v=-jysK0nlz7A
// Jadi intinya CLOSURE adalah function di dalam function
var timer1;
var timer2;

function setup(){
  // noCanvas();
  createCanvas(200,200);
  timer1 = createP('timer 1');
  timer2 = createP('timer 2');
  timer3 = createButton('timer3');

  makeTimer(timer1,500);
  makeTimer(timer2,350);
  makeTimer(timer3,1000);
}

function draw(){
}

function makeTimer(ent,wait){
  var counter = 0;
  setInterval(timeIt,wait);
  function timeIt(){
    counter++;
    ent.html(counter);
  }
}

