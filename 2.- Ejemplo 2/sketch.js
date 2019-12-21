function setup() {
  createCanvas(720, 400);
}

function draw() {
  background(100,30,90);
  push();
  translate(width * 0.1, height * 0.3);
  rotate(frameCount / 50.0);
  star(10, 0, 900, 50, 40);
  pop();
}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 3.0;
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