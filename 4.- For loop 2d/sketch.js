
function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(155,90,80);
  let numY = 50;
  let numX = 10;
  let m = 10;
  let spx = (width - 4 * m) / (numX - 2);
  let spy = (height - 4 * m) / (numY - 2);

  for (let y = 0; y < numY; y++) {
    for (let x = 0; x < numX; x++) {


      let d = dist(mouseX * 2, mouseY * 2, m + x * spx, m + y * spy);

      let r = map(d, 0, width, 0, PI);


      push();
      loop();
      translate(m + x * spx, m + y * spy);
      rotate(r);
      fill(0);

      noStroke();
      ellipse(100, 100, 20, 10);
      pop();


    }
  }
}