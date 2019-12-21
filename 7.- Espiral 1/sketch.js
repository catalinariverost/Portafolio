let angle = 2;
  let a = 60;

let spin = 0.03;
let grow = spin * 5;


function setup() {
  createCanvas(700, 700);
  background(0);
}

function draw() {
  angle -= spin;
  a = a + grow;
  let x = cos(angle)*a;
  let y = sin(angle)*a;
  translate(350, 350);
  ellipse(x, y, 40, 40);
  fill(140,10,40,100);
  ellipse(x,y,100,10);
 
}