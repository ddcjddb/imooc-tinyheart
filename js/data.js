function dataObj() {
  this.fruitNum = 0;
  this.double = 1;
  this.score = 0;
  this.gameOver = false;
  this.alpha = 0;
}

dataObj.prototype.reset = function() {
  this.fruitNum = 0;
  this.double = 1;
};

dataObj.prototype.draw = function() {
  ctx1.save();
  ctx1.fillStyle = "white";
  ctx1.shadowBlur = 20;
  ctx1.shadowColor = "white";
  ctx1.fillText("Num: " + this.fruitNum, canWidth * 0.5, canHeight - 50);
  ctx1.fillText("Double: " + this.double, canWidth * 0.5, canHeight - 80);
  ctx1.fillText("Score: " + this.score, canWidth * 0.5, 50);

  if (this.gameOver) {
    this.alpha += deltaTime * 0.0005;
    if (this.alpah > 1) {
      this.alpha = 1;
    }
    ctx1.fillStyle = "rgba(255,255,255," + this.alpha + ")";
    ctx1.fillText("GAME OVER.", canWidth * 0.5, canHeight * 0.5);
    // ctx1.addEventListener("click", game());
  }
  ctx1.restore();
};

dataObj.prototype.addScore = function() {
  this.score += this.fruitNum * 100 * this.double;
  this.fruitNum = 0;
  this.double = 1;
};
