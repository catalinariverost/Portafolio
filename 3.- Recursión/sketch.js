function setup() {
  createCanvas(600, 600);
  strokeWeight(.50);
}

function draw() {
  background(10,50,80,90);
  let niveles = round(map(mouseY, 20, width, 0, 8));
  recursiveCircle(width/2, height/2, 400, niveles);
}

function recursiveCircle(x,y, diam, levels){
  ellipse(x, y, diam);
  if(levels >2){
    recursiveCircle(x-diam/4, y, diam/2, levels-1);
    fill(100,100);
    recursiveCircle(x+diam/4, y, diam/2, levels-1);
    fill (60,70);
   recursiveCircle(x - diam / 1, y, diam / 2, levels-1);
    fill(250);
    recursiveCircle(x + diam / 1, y, diam / 2, levels-1);
   
  }
}