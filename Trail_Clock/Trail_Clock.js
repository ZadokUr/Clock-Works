function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  textAlign(CENTER);
}

function draw() {
  background(0, 20);

  push();
  translate(width / 2, height / 2);
  rotate(-90);

  let hr = hour();
  let mn = minute();
  let sc = second();

  strokeWeight(4);
  strokeCap(PROJECT);
  noFill();

  //Seconds
  stroke(55, 237, 12);
  let secondAngle = map(sc, 0, 60, 0, 360);
  push();
  rotate(secondAngle);
  line(0, 0, 150, 0);
  pop();
  arc(0, 0, 400, 400, 0, secondAngle);

  //Minutes
  stroke(36, 198, 240);
  let minuteAngle = map(mn, 0, 60, 0, 360);
  push();
  rotate(minuteAngle);
  line(0, 0, 120, 0);
  pop();
  arc(0, 0, 390, 390, 0, minuteAngle);

  //Hours
  stroke(224, 11, 130);
  let hourAngle = map(hr % 12, 0, 12, 0, 360);
  push();
  rotate(hourAngle);
  line(0, 0, 90, 0);
  pop();
  arc(0, 0, 380, 380, 0, hourAngle);

  //center circle
  strokeWeight(20);
  stroke(255);
  point(0, 0);

  pop();

  push();
  // Draw the minute ticks
  strokeWeight(3);
  stroke(255);
  beginShape(POINTS);
  for (let a = 0; a < 360; a += 6) {
    let x = width / 2 + cos(a) * 150;
    let y = height / 2 + sin(a) * 150;
    vertex(x, y);
  }
  endShape();
  pop();

  push();
  translate(width / 2, height / 2);
  textSize(32);
  fill(255);

  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
