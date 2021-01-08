let yoff = 0.0;
let yoff2 = 0.0;
let yoff3 = 0.0;
let yincrement = 0.0001;
let yincrement2 = 0.001;
let yincrement3 = 0.01;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  textAlign(CENTER);
}

function draw() {
  background(45, 45);
  let bannerWidth = width * 0.2;
  textSize(bannerWidth * 0.4);

  push();
  //Banner 1 - Hours

  fill("#f06eaa");
  let banner1_start = width * 0.1;
  let hours = height / 24;

  let banner1_height = hours * hour();
  rect(banner1_start, 0, bannerWidth, banner1_height);

  //NoiseLines
  //Get a noise value based on yoff and scale it according to window's height
  let n = noise(yoff) * height;

  //with each cycle, increment yoff
  yoff += yincrement;

  //draw ellipse at value produced by perlin noise
  ellipse(banner1_start, n, 5, 5);
  ellipse(banner1_start + bannerWidth, n, 5, 5);

  //Minutes
  fill("#39b54a");
  let banner2_start = width * 0.4;
  let minutes = height / 60;

  let banner2_height = minutes * minute();
  rect(banner2_start, 0, bannerWidth, banner2_height);

  //NoiseLines
  //Get a noise value based on yoff and scale it according to window's height
  let n2 = noise(yoff2) * height;

  //with each cycle, increment yoff
  yoff2 += yincrement2;

  //draw ellipse at value produced by perlin noise
  ellipse(banner2_start, n2, 5, 5);
  ellipse(banner2_start + bannerWidth, n2, 5, 5);

  //Seconds
  fill("#00bff3");
  let banner3_start = width * 0.7;
  let seconds = height / 60;

  let banner3_height = seconds * second();
  rect(banner3_start, 0, bannerWidth, banner3_height);

  //NoiseLines
  //Get a noise value based on yoff and scale it according to window's height
  let n3 = noise(yoff3) * height;

  //with each cycle, increment yoff
  yoff3 += yincrement3;

  //draw ellipse at value produced by perlin noise
  ellipse(banner3_start, n3, 5, 5);
  ellipse(banner3_start + bannerWidth, n3, 5, 5);

  pop();

  //HourText
  push();
  stroke("#f06eaa");
  fill(45);
  text(hour() + "", banner1_start + bannerWidth / 2, height / 2);
  pop();

  //MinutesText
  push();
  stroke("#39b54a");
  fill(45);
  text(
    (minute() < 10 ? "0" + minute() : minute()) + "",
    banner2_start + bannerWidth / 2,
    height / 2
  );
  pop();

  //SecondsText
  push();
  stroke("#00bff3");
  fill(45);
  text(
    (second() < 10 ? "0" + second() : second()) + "",
    banner3_start + bannerWidth / 2,
    height / 2
  );
  pop();
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
