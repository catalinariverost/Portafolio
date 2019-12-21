let angle = 5;
  let a = 1;

let spin = 0.1;
let grow = spin * 50;


function setup() {
  createCanvas(700, 700);
  background(250);
}

function draw() {
  angle += spin;
  a = a - grow;
  let x = cos(angle)*a;
  let y = sin(angle)*a;
  translate(350, 350);
  triangle(x, y, 0, 0, 6, 5);
 fill('#fae');
  
 
}