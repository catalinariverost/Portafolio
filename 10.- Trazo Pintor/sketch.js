let foto;

function preload() {
  foto = loadImage("ilya.png");
}


function setup() {
  createCanvas(foto.width, foto.height);
  rectMode(CENTER);
  noLoop();
}

let sp = 3;

function draw() {
  background(random(+200));
  noStroke();
  for (let y = 0; y < height; y += sp) {
    for (let x = 0; x < width; x += sp) {
      let col = foto.get(x-1, y+6);
      miLindoTrazo(x, y, col);
    }
  }
}
function miLindoTrazo(x, y, col) {
  let a = brightness(col)
  let c = map(a, 20, 320, 5, 6);
  let c1 = map(a, 80, 200, 3, 7);
  fill(col)
  rect(x, y, c, c1)
}