let moving_size = 50;
let static_size = 20;

class Emoji {
  constructor(moving_size, static_size) {
    this.moving_size = moving_size;
    this.static_size = static_size;
  }

  /*
  getStaticSize(){}
   setStaticSize(){}
   updateStaticSize(){}
   getMovingSize(){}
   setMovingSize(){}
   updateMovingSize(){}
   */

  bg(valA, valB) {
    background(random(valA, valB));
  }
  leftElement (r, g, b, x, y, w, h) {
    noStroke();
    fill(r, g, b);
    rect(x, y, w, h);
  }
  rightElement(r, g, b, x, y, w, h) {
    fill(r, g, b);
    rect(x, y, w, h);
  }
  bottomElement(strokeVal, strokeWght, x, y, static_size) {
    noFill();
    stroke(strokeVal);
    strokeWeight(strokeWght);
    ellipse(x, y, this.static_size, this.static_size);
  }

  __cursor() {
    stroke(180);
    ellipse(mouseX, mouseY, this.moving_size, this.moving_size);
    if (mouseIsPressed) {
      static_size = floor(random(20, 80));
    }
  }

  elementOutline(x, y, w, h) {
    let randomColor = random(10, 20);
    let randomWeight = random(10, 50);
    noFill();
    stroke(randomColor);
    strokeWeight(randomWeight);
    rectMode(CENTER);
    rect(x, y, w, h);
  }
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(15);
}

function draw() {
  emoji = new Emoji(moving_size, static_size);
  emoji.bg(230, 240);
  emoji.leftElement(0, 0, 0, 97, 169, 79, 12);
  emoji.rightElement(0, 0, 0, 365, 184, 20, 15);
  beginShape();
  vertex(365, 199);
  vertex(385, 199);
  vertex(372, 216);
  vertex(358, 216);
  endShape(CLOSE);
  emoji.bottomElement(130, 2, 255, 350, static_size, static_size);
  emoji.__cursor();
}
