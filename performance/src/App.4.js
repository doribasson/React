import React from "react";
//hoisted how scope work

const App = () => {
  // console.log(a);
  // console.log(d);

  // var a = 0;
  // var b = 5;
  // let c;
  // let d = 8;
  // console.log(a);
  // console.log(d);

  // {
  //   console.log(a);
  //   console.log(d);
  // }

  function check() {
    var a = 11;
    // var a = 12;
    let b = 12;
    // let b = 111;
    let c = 13;
    let d = 14;
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
  }

  function check1() {
    var a = 99;
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
  }
  console.log(a);

  // check();
  // check1();

  var a;
  var b = 5;
  let c;
  let d = 8;
  console.log(a);

  check1();
  console.log(a);

  console.dir(check1);

  // console.log(a);
  // console.log(b);
  // console.log(c);
  // console.log(d);

  return <div></div>;
};

export default App;
