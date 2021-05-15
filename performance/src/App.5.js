import React from "react";

const App = () => {
  //closure 1
  function foo() {
    console.log("foo");
  }

  function bar() {
    console.log("bar");
  }

  //without arrow function with annymous inner function(no name vane for inner function
  // function runOnce(fn) {
  //   var didRun = false;
  //   return function() {
  //     if (!didRun) {
  //       didRun = true;
  //       fn();
  //     }
  //   };
  // }

  //the same like above with inner annymous function(no name vane for inner function ()=>)
  function runOnce(fn) {
    var didRun = false;
    return () => {
      if (!didRun) {
        didRun = true;
        fn();
      }
    };
  }

  //the same like above just with no annymous function (we have the inner name function)
  function runOnce(fn) {
    var didRun = false;
    function runIt() {
      if (!didRun) {
        didRun = true;
        fn();
      }
    }
    return runIt;
  }

  //will print once because he remember the var
  const fooOnce = runOnce(foo);
  fooOnce();
  fooOnce();
  fooOnce();

  //will print twice because he  not remember the var
  // runOnce(foo());
  // runOnce(foo());

  // foo();
  // foo();
  // foo();
  // bar();
  // bar();
  // bar();

  return (
    <div>
      <span>lala</span>
    </div>
  );
};
export default App;
