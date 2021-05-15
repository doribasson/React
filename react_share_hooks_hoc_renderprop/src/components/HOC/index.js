import React, { useState } from "react";

export default function withCounter(WrappedComponent) {
  return function(props) {
    const [count, setCount] = useState(0);

    function increment() {
      setCount(c => c + 1);
    }

    function decrement() {
      if (count > 0) {
        setCount(c => c - 1);
      }
    }
    return (
      <WrappedComponent
        count={count}
        increment={increment}
        decrement={decrement}
        {...props}
      />
    );
  };
}
