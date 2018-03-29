//判断大鱼和果实的距离
function momFruitCollision() {
  if (!data.gameOver) {
    for (var i = 0; i < fruit.num; i++) {
      if (fruit.alive[i]) {
        //calculate distance
        var l = calLength2(fruit.x[i], fruit.y[i], mom.x, mom.y);
        if (l < 900) {
          //fruit eaten
          // fruit.alive[i] = false;
          fruit.dead(i);
          data.fruitNum++;
          wave.born(fruit.x[i], fruit.y[i]);
          mom.momBodyCount++;
          if (mom.momBodyCount > 7) {
            mom.momBodyCount = 7;
          }
          //blue
          if (fruit.fruitType[i] == "blue") {
            data.double = 2;
          }
        }
      }
    }
  }
}

//mom baby collision
function momBabyCollision() {
  if (data.fruitNum && !data.gameOver) {
    var l = calLength2(mom.x, mom.y, baby.x, baby.y);
    if (l < 900) {
      //baby recover
      halo.born(baby.x, baby.y);
      baby.babyBodyCount = 0;

      //data => 0

      mom.momBodyCount = 0;
      //score update
      data.addScore();
      data.reset();
    }
  }
}
