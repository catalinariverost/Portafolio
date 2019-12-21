function preload() {
  img1 = loadImage('gato1.png');

  fondo = loadImage ('fondo.png');
}

function setup() {
  createCanvas(700,500);
  background (fondo);
  imageMode(CENTER);
}


function draw() {
  if (mouseIsPressed) {
  image(img1, mouseX, mouseY, 200, 200); 
  }
}