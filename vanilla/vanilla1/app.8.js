var span1 = document.getElementById("mySpan");
var lineLeft = document.getElementById("line-left");
var buttonUp = document.getElementById("button-up");
var buttonDown = document.getElementById("button-down");
var buttonLeft = document.getElementById("button-left");
var buttonRight = document.getElementById("button-right");
var clickMe = document.getElementById("clickMe");
var circle = document.getElementById("circle");

function touches(el1, el2) {
  const r1 = el1.getBoundingClientRect();
  const r2 = el2.getBoundingClientRect();

  console.log(r1.right, r2.left);

  if (r2.left - r1.right < 1) {
    console.log("touching");
  } else {
    console.log("not touching");
  }
}

touches(lineLeft, circle);

buttonLeft.addEventListener("click", () => {
  circle.classList.toggle("circle");
  setTimeout(() => {
    touches(lineLeft, circle);
  }, 0);
});
