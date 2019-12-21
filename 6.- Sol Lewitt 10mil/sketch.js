let c = 9;
function setup() {
  createCanvas(600, 500);
  strokeWeight (.2);
  stroke(5,90);
  noLoop ();
}

function draw() {
  
  background('#fae')
  lightness('#fae');
  
  for(i = 0; i < 10000; i++) {
    
    push();
    let X = random (c, width -c)
    let Y = random (c, height- c);
     
    translate (X,Y);
    rotate (random (PI));
    line (-4,0,20,0);
    fill(40,40,40,50)
    pop();
  }
}