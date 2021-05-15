var circle = document.querySelector(".circle");
var container = document.querySelector(".container");
var reset = document.querySelector(".reset");

var circleLeft = 0;
var circleTop = 0;

function resetFunction() {
  circleLeft = 0;
  circleTop = 0;
  circle.style.top = 0;
  circle.style.left = 0;
  document.querySelector(".circle").style.background = "blue";
}

function move(e) {
  //   alert(e.keyCode);
  const rect = circle.getBoundingClientRect();

  // const left = rect.left;
  // const right = rect.right;
  // const top = rect.top;
  // const bottom = rect.bottom;

  //   const containerWidth = document.querySelector(".container").style.width;
  const containerWidth = document.querySelector(".container");

  let widthLimit =
    parseInt(getComputedStyle(containerWidth).width, 10) / 2 - 40;
  let heightLimit =
    parseInt(getComputedStyle(containerWidth).height, 10) / 2 - 40;
  console.log({ widthLimit, heightLimit });

  //   console.log({ left, right, top, bottom });

  if (e.keyCode == 38) {
    //   alert(e.keyCode + " top");
    console.log({ circleTop });
    circleTop -= 2;
    circle.style.top = circleTop + "px";
    if (circleTop <= -heightLimit) {
      circleTop += 2;
      document.querySelector(".circle").style.background = "red";
      // alert("hit");
    } else document.querySelector(".circle").style.background = "blue";
  }

  if (e.keyCode == 40) {
    //   alert(e.keyCode + " down");
    console.log({ circleTop });
    circleTop += 2;
    circle.style.top = circleTop + "px";
    if (circleTop >= heightLimit) {
      circleTop -= 2;
      document.querySelector(".circle").style.background = "red";
      // alert("hit");
    } else document.querySelector(".circle").style.background = "blue";
  }

  if (e.keyCode == 39) {
    //   alert(e.keyCode + " right");
    circleLeft += 2;
    circle.style.left = circleLeft + "px";
    console.log({ circleLeft });
    if (circleLeft >= widthLimit) {
      circleLeft -= 2;
      document.querySelector(".circle").style.background = "red";
      // alert("hit");
    } else document.querySelector(".circle").style.background = "blue";
  }

  if (e.keyCode == 37) {
    //   alert(e.keyCode + " left");
    circleLeft -= 2;
    circle.style.left = circleLeft + "px";
    console.log({ circleLeft });
    if (circleLeft <= -widthLimit) {
      circleLeft += 2; //make it in boundary / cant out from borderline
      document.querySelector(".circle").style.background = "red";
      //   circleLeft = -265;
      // alert("hit");
      // setTimeout(()=>{ alert("hit"); }, 1000);
    } else document.querySelector(".circle").style.background = "blue";
  }
}

document.onkeydown = move;
