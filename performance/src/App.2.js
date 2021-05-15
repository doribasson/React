import React from "react";

const people = ["a", "b", "c", "d"];
const App = () => {
  function check() {
    people.forEach(p1 => {
      people.forEach(p2 => {
        if (p1.birthday == p2.birthday) {
          console.log(`{p1.name} and {p2.name} have the same birthday!`);
        }
      });
    });
  }

  // function check() {
  //   Array.prototype.people.forEach(p1 => {
  //     console.log(`{p1.name} and {p2.name} have the same birthday!`);
  //   });
  // }

  check();

  function tick() {
    document.body.innerHTML += `&#${(128560 + 26 * Math.random()) | 0};`;
    setTimeout(tick, 1000);
  }
  tick();

  return <div>lalala</div>;
};

export default App;
