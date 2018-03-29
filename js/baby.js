function babyObj() {
  this.x;
  this.y;
  this.angle;

  this.babyTailTimer = 0;
  this.babyTailCount = 0;

  this.babyEyeTimer = 0;
  this.babyEyeCount = 0;
  this.babyEyeInterval = 2000;

  this.babyBodyTimer = 0;
  this.babyBodyCount = 0;
}

babyObj.prototype.init = function() {
  this.x = canWidth * 0.5 - 50;
  this.y = canHeight * 0.5 + 50;
  this.angle = 0;
};

babyObj.prototype.draw = function() {
  //lerp
  this.x = lerpDistance(mom.x, this.x, 0.98);
  this.y = lerpDistance(mom.y, this.y, 0.98);

  //delta angle
  //Math.atan2(y,x)
  var deltaY = mom.y - this.y;
  var deltaX = mom.x - this.x;
  var beta = Math.atan2(deltaY, deltaX) + Math.PI;

  //lerp angle
  this.angle = lerpAngle(beta, this.angle, 0.5);

  //babyTailCount
  this.babyTailTimer += deltaTime;
  if (this.babyTailTimer > 50) {
    this.babyTailCount = (this.babyTailCount + 1) % 8;
    this.babyTailTimer %= 50;
  }

  //baby eye
  this.babyEyeTimer += deltaTime;
  if (this.babyEyeTimer > this.babyEyeInterval) {
    this.babyEyeCount = (this.babyEyeCount + 1) % 2;
    this.babyEyeTimer %= this.babyEyeInterval;

    if (this.babyEyeCount === 0) {
      this.babyEyeInterval = Math.floor(Math.random() * 1000 + 1500);
    } else {
      this.babyEyeInterval = 200;
    }
  }

  //baby body
  this.babyBodyTimer += deltaTime;
  if (this.babyBodyTimer > 300) {
    this.babyBodyCount = this.babyBodyCount + 1;
    this.babyBodyTimer %= 300;
    if (this.babyBodyCount > 19) {
      this.babyBodyCount = 19;
      //game over
      data.gameOver = true;
    }
  }

  //ctx1 save
  ctx1.save();
  //translate
  ctx1.translate(this.x, this.y);
  ctx1.rotate(this.angle);
  var babyTailCount = this.babyTailCount;
  ctx1.drawImage(
    babyTail[babyTailCount],
    -babyTail[babyTailCount].width * 0.5 + 25,
    -babyTail[babyTailCount].height * 0.5
  );
  ctx1.drawImage(
    babyBody[this.babyBodyCount],
    -babyBody[this.babyBodyCount].width * 0.5 + 3,
    -babyBody[this.babyBodyCount].height * 0.5
  );
  ctx1.drawImage(
    babyEye[this.babyEyeCount],
    -babyEye[this.babyEyeCount].width * 0.5,
    -babyEye[this.babyEyeCount].height * 0.5
  );

  ctx1.restore();
};
