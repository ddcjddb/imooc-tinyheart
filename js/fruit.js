var fruitObj = function() {
  this.alive = []; //boolean
  this.x = [];
  this.y = [];
  this.aneNo = [];
  this.l = [];
  this.spd = [];
  this.fruitType = [];
  this.orange = new Image();
  this.blue = new Image();
};
fruitObj.prototype.num = 30;

fruitObj.prototype.init = function() {
  for (var i = 0; i < this.num; i++) {
    this.alive[i] = false;
    this.x[i] = 0;
    this.y[i] = 0;
    this.aneNo[i] = 0;
    this.spd[i] = Math.random() * 0.017 + 0.003;
    this.fruitType[i] = Math.random() < 0.8 ? "orange" : "blue";
  }
  this.orange.src = "../src/fruit.png";
  this.blue.src = "../src/blue.png";
};

fruitObj.prototype.draw = function() {
  for (var i = 0; i < this.num; i++) {
    //draw      find an ane, grow, fly up
    if (this.alive[i]) {
      if (this.fruitType[i] === "blue") {
        var pic = this.blue;
      } else {
        var pic = this.orange;
      }
      if (this.l[i] <= 15) {
        var No = this.aneNo[i];
        this.x[i] = ane.endx[No];
        this.y[i] = ane.endy[No];
        this.l[i] += deltaTime * this.spd[i];
        ctx2.drawImage(
          pic,
          this.x[i] - this.l[i] / 2,
          this.y[i] - this.l[i] / 2,
          this.l[i],
          this.l[i]
        );
      } else {
        this.y[i] -= this.spd[i] * 3 * deltaTime;
      }
      ctx2.drawImage(
        pic,
        this.x[i] - this.l[i] / 2,
        this.y[i] - this.l[i] / 2,
        this.l[i],
        this.l[i]
      );
      if (this.y[i] < 10) {
        this.alive[i] = false;
      }
    }
  }
};

fruitObj.prototype.update = function() {
  var num = 0;
  for (var i = 0; i < this.num; i++) {
    if (this.alive[i]) {
      num++;
    }
  }
};

fruitObj.prototype.born = function(i) {
  this.aneNo[i] = Math.floor(Math.random() * ane.num);

  this.l[i] = 0;
  this.alive[i] = true;
};

fruitObj.prototype.dead = function(i) {
  this.alive[i] = false;
};

function fruitMonitor() {
  var num = 0;
  for (var i = 0; i < fruit.num; i++) {
    if (fruit.alive[i]) {
      num++;
    }
  }
  if (num <= 15) {
    sendFruit();
    // return;
  }
}

function sendFruit() {
  for (var i = 0; i < fruit.num; i++) {
    if (!fruit.alive[i]) {
      fruit.born(i);
      return;
    }
  }
}
