let streams = [];

let segW = 60;
let segH = 110;
let zoom = 0.5;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  strokeWeight(10);
  let cols = width / segW / zoom;
  let x = 0;
  for (let i = 0; i < cols; i++) {
    let stream = new Stream(x, round(random(-2000, 0)));
    x += segW;
    stream.generateSegments();
    streams.push(stream);
  }
}

function draw() {
  background(31, 130);
  scale(zoom);
  streams.forEach(stream => {
    stream.show();
    stream.rain();
  });
}
