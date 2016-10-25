var e1, e2;

function setup() {
  createCanvas(720, 400);
  e1 = new Eye(250, 160, 120);
  e2 = new Eye(164, 185, 80);
}

function draw() {
  background(0);
  fill(230,150,200)
  ellipse(205,140,300,300)
  line(200,250,306,250)
  fill(255,0,0)
  ellipse(mouseX,mouseY,20,20)
  e1.update(mouseX, mouseY);
  e2.update(mouseX, mouseY);
  e1.display();
  e2.display();
}

function Eye(tx, ty, ts) {
  this.x = tx;
  this.y = ty;
  this.size = ts;
  this.angle = 0;

  this.update = function (mx, my) {
    this.angle = atan2(my - this.y, mx - this.x);
  };

  this.display = function () {
    push();
    translate(this.x, this.y);
    fill(255);
    ellipse(0, 0, this.size, this.size);
    rotate(this.angle);
    fill(0);
    ellipse(this.size / 4, 0, this.size / 2, this.size / 2);
    pop();
  };
}