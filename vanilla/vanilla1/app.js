var span1 = document.getElementById("mySpan");
var button = document.getElementById("myButton");
var clickMe = document.getElementById("clickMe");
var outer = document.getElementById("outer");

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

touches(span1, button);

clickMe.addEventListener("click", () => {
  outer.classList.toggle("touch");
  setTimeout(() => {
    touches(span1, button);
  }, 0);
});
