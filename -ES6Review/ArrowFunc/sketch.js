// JavaScript Arrow Functions
// Based on this video : https://www.youtube.com/watch?v=mrYMzpbFz18&list=PLRqwX-V7Uu6YgpA3Oht-7B4NBQwFVe3pr&index=3

function setup(){
  noCanvas();
  console.log(this);
  counter1 = new Counter(100,500);
  counter2 = new Counter(100,200);
  counter3 = new Counter(100,1000);
  counter1.start();
  counter2.start();
  counter3.start();
}

function draw(){
}

class Counter {
  constructor(start, wait){
    this.count = start;
    this.wait = wait;
    this.p = createP('');
  }

  start(){
    setInterval(() => {
      // console.log(this); // Jika menggunakan function(){} maka console.log(this) akan merefer ke Window (parent Window), bukan class ini. Aneh kan?
      this.countIt();
    },this.wait)
  }

  countIt(){
    this.count++;
    this.p.html(this.count);
  }
}