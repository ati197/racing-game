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