let num = [0x7e, 0x30, 0x6d, 0x79, 0x33, 0x5b, 0x5f, 0x70, 0x7f, 0x7b];
let w = 20;
let size = 1;

function Segment(x, y, speed, first, alpha) {
  this.strokes = [];
  this.val = num[floor(random(0, 10))];
  this.x = x;
  this.y = y;
  this.speed = speed;
  this.changeRate = round(random(15, 30));
  this.first = first;
  this.alpha = alpha;
  this.generateNum = function() {
    if (frameCount % this.changeRate === 0) {
      this.val = num[floor(random(0, 10))];
      this.generateStrokes();
    }
  };

  this.generateStrokes = function() {
    this.strokes.length = 0;
    for (let i = 0; i < 7; i++) {
      this.strokes.push(this.strokeColor(i));
    }
  };

  this.strokeColor = function(shift) {
    let a = (this.val >> shift) & 1;
    if (a) {
      if (this.first) {
        return color(180, 255, 255, this.alpha);
      }
      return color(0, 255, 0, this.alpha);
    }
    return null;
  };

  this.rain = function() {
    if (this.y > height / zoom) this.y = -segH;
    this.y += this.speed;
    this.generateNum();
  };

  this.show = function() {
    //e
    if (this.strokes[2]) {
      stroke(this.strokes[2]);
      line(this.x, this.y + 40, this.x, this.y + 65);
    }

    //f
    if (this.strokes[1]) {
      stroke(this.strokes[1]);
      line(this.x, this.y + 5, this.x, this.y + 30);
    }

    //a
    if (this.strokes[6]) {
      stroke(this.strokes[6]);
      line(this.x + 10, this.y, this.x + 30, this.y);
    }

    //d
    if (this.strokes[3]) {
      stroke(this.strokes[3]);
      line(this.x + 10, this.y + 70, this.x + 30, this.y + 70);
    }

    //g
    if (this.strokes[0]) {
      stroke(this.strokes[0]);
      line(this.x + 10, this.y + 35, this.x + 30, this.y + 35);
    }

    //b
    if (this.strokes[5]) {
      stroke(this.strokes[5]);
      line(this.x + 40, this.y + 5, this.x + 40, this.y + 30);
    }

    //c
    if (this.strokes[4]) {
      stroke(this.strokes[4]);
      line(this.x + 40, this.y + 40, this.x + 40, this.y + 65);
    }
  };

  this.generateStrokes();
}
