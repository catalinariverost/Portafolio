function setup() {
  createCanvas(520, 300);
  background (200,0,0);
}
function draw() 
{
  fill(50,0,300);
  rotate(frameCount / 1000.0);
  rect(0, 0, 240, 160);
  
 fill(250);

  rect(200, 0, 340, 160);
push();
  translate(width * 0.2, height * 0.3);
  rotate(frameCount / 10.0);
  star(0, 0, 30, 70, 5);
  pop();
}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
 
}

