import React, { useState } from "react";
import CounterContext from "../Context/counterContext";
const CounterProvider = ({ children }) => {
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
    <CounterContext.Provider
      value={{
        countVal: count,
        incrementVal: increment,
        decrementVal: decrement
      }}
    >
      {children}
    </CounterContext.Provider>
  );
};

export default CounterProvider;
