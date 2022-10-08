let url;
let fontRegular, fontItalic;

function preload() {
  fontRegular = loadFont("assets/FragmentMono-Regular.otf");
  fontItalic = loadFont("assets/FragmentMono-Italic.otf");
}

function setup() {
  url = getURL();
  createCanvas(windowWidth, windowHeight);
  print("Computational World Aesthetic @", url);
  noCursor();
}

function draw() {
  background(14, 14, 14);
  noStroke();
  let r = random(255);
  let g = random(72);
  let b = random(245);
  ellipseMode(CENTER);
  date();
  welcomeOnScreen("Computational World Aesthetic");
  circleCursor();
}

function date(){
  let offset = 32;
  let d = day();
  let h = hour();
  let min = minute();
  let m = month();
  let s = second();
  let y = year();
  let date = "Date & Time: " + d + " " + m + " " + y + "—" + h + ":" + min + ":" + s;
  textFont(fontItalic);
  fill(255).textSize(16);
  text(date, offset, offset);
}

function welcomeOnScreen(String) {
  let msg = String;
  textFont(fontRegular);
  fill(255).textSize((pmouseX/2) * 0.75);
  let offset = 32;
  text(msg, offset, windowHeight - offset, displayWidth-offset);
}
function windowResized() {
  print("The Window Is Being Resized", windowWidth, windowHeight);
  resizeCanvas(windowWidth, windowHeight);
}

function circleCursor() {
  let x = 20;
  let y = x;
  let w = x;
  let h = x;
  ellipse(pmouseX, pmouseY, w, h);
}
