let car = document.getElementById("car");
let position = 130;

// Move car left/right
document.addEventListener("keydown", function(event) {
  if (event.key === "ArrowLeft" && position > 0) {
    position -= 10;
  }
  if (event.key === "ArrowRight" && position < 260) {
    position += 10;
  }
  car.style.left = position + "px";
});
let enemy = document.getElementById("enemy");
let enemyTop = 0;
let enemyLeft = Math.floor(Math.random() * 260);

enemy.style.left = enemyLeft + "px";

function moveEnemy() {
  enemyTop += 5; // speed

  // Reset when it goes down
  if (enemyTop > 500) {
    enemyTop = 0;
    enemyLeft = Math.floor(Math.random() * 260);
    enemy.style.left = enemyLeft + "px";
  }

  enemy.style.top = enemyTop + "px";

  checkCollision();
  requestAnimationFrame(moveEnemy);
}

moveEnemy();
