var aneObj = function() {
  //start point ,control, end(sin)
  this.x = [];
  this.endx = [];
  this.endy = [];
  this.alpha = 0;
  this.amp = [];
};
aneObj.prototype.num = 50;

aneObj.prototype.init = function() {
  for (var i = 0; i < this.num; i++) {
    this.x[i] = i * canWidth / 50 + Math.floor(Math.random() * canWidth / 50);
    this.endx[i] = this.x[i];
    this.endy[i] = canHeight - 150 - Math.floor(Math.random() * 50);
    this.amp[i] = Math.random() * 40 + 40;
  }
};

aneObj.prototype.draw = function() {
  //draw
  this.alpha += deltaTime * 0.0008;
  var l = Math.sin(this.alpha);
  ctx2.save();
  ctx2.strokeStyle = "#3b154e";
  ctx2.globalAlpha = 0.6;
  ctx2.lineWidth = 18;
  ctx2.lineCap = "round";
  for (var i = 0; i < this.num; i++) {
    //beginPath, moveTo, lineTo, stroke, strokeStyle, lineWidth, lineCap, globalAlpha
    ctx2.beginPath();
    ctx2.moveTo(this.x[i], canHeight);
    this.endx[i] = this.x[i] + l * this.amp[i];
    ctx2.quadraticCurveTo(
      this.x[i],
      canHeight - 50,
      this.endx[i],
      this.endy[i]
    );

    ctx2.stroke();
  }
  ctx2.restore();
};
