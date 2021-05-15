var circle = document.querySelector(".circle");
var container = document.querySelector(".container");
var reset = document.querySelector(".reset");

var circleLeft = 0;
var circleTop = 0;

var containerWidth = document.querySelector(".container");
var widthLimit = parseInt(getComputedStyle(containerWidth).width, 10) / 2 - 40;
var heightLimit =
  parseInt(getComputedStyle(containerWidth).height, 10) / 2 - 40;

function resetFunction() {
  circleLeft = 0;
  circleTop = 0;
  circle.style.top = 0;
  circle.style.left = 0;
  document.querySelector(".circle").style.background = "blue";
}

function clickMoveUp() {
  circleTop -= 2;
  console.log({ circleTop });

  circle.style.top = circleTop + "px";
  if (circleTop <= -heightLimit) {
    circleTop += 2;
    document.querySelector(".circle").style.background = "red";
    // alert("hit");
  } else document.querySelector(".circle").style.background = "blue";
}

function clickMoveDown() {
  console.log({ circleTop });
  circleTop += 2;
  circle.style.top = circleTop + "px";
  if (circleTop >= heightLimit) {
    circleTop -= 2;
    document.querySelector(".circle").style.background = "red";
    // alert("hit");
  } else document.querySelector(".circle").style.background = "blue";
}

function clickMoveLeft() {
  circleLeft -= 2;
  circle.style.left = circleLeft + "px";
  console.log({ circleLeft });
  if (circleLeft <= -widthLimit) {
    circleLeft += 2; //make it in boundary / cant out from borderline
    document.querySelector(".circle").style.background = "red";
  } else document.querySelector(".circle").style.background = "blue";
}

function clickMoveRight() {
  console.log({ circleTop });
  circleLeft += 2;
  circle.style.left = circleLeft + "px";
  console.log({ circleLeft });
  if (circleLeft >= widthLimit) {
    circleLeft -= 2;
    document.querySelector(".circle").style.background = "red";
    // alert("hit");
  } else document.querySelector(".circle").style.background = "blue";
}

function move(e) {
  //   console.log({ left, right, top, bottom });

  if (e.keyCode == 38) {
    clickMoveUp();
  }

  if (e.keyCode == 40) {
    clickMoveDown();
  }

  if (e.keyCode == 39) {
    clickMoveRight();
  }

  if (e.keyCode == 37) {
    clickMoveLeft();
  }
}

document.onkeydown = move;
