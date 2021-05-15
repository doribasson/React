import { useState } from "react";

const RenderCounter = ({ children }) => {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(c => c + 1);
  }

  function decrement() {
    if (count > 0) {
      setCount(c => c - 1);
    }
  }

  return children({ count, increment, decrement });
};

export default RenderCounter;
