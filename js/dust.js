function dustObj() {
  this.x = [];
  this.y = [];
  this.amp = [];
  this.NO = [];
  this.angle;
}

dustObj.prototype.num = 30;

dustObj.prototype.init = function() {
  for (var i = 0; i < this.num; i++) {
    this.x[i] = Math.random() * canWidth;
    this.y[i] = Math.random() * canHeight;
    this.amp[i] = Math.random() * 15 + 20;
    this.NO[i] = Math.floor(Math.random() * 7);
  }
  this.angle = 0;
};

dustObj.prototype.draw = function() {
  ctx1.save();
  this.angle += deltaTime * 0.0008;
  var l = Math.sin(this.angle);
  for (var i = 0; i < this.num; i++) {
    var no = this.NO[i];
    ctx1.drawImage(dustPic[no], this.x[i] + this.amp[i] * l, this.y[i]);
  }
  ctx1.restore();
};
