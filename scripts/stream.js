function Stream(x, y) {
  this.segments = [];
  this.x = x;
  this.y = y;
  this.length = round(random(3, 10));
  this.speed = round(random(2, 10));

  this.generateSegments = function() {
    let first = round(random(4)) == 1;
    let alpha = 255;
    let delta = alpha / this.length;
    for (let i = 0; i < this.length; i++) {
      this.segments.push(new Segment(this.x, this.y, this.speed, first, alpha));
      this.y -= segH;
      first = false;
      alpha -= delta;
    }
  };

  this.show = function() {
    this.segments.forEach(segment => segment.show());
  };

  this.rain = function() {
    this.segments.forEach(segment => segment.rain());
  };
}
