import { useState } from "react";

export const useCounter = () => {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(c => c + 1);
  }

  function decrement() {
    if (count > 0) {
      setCount(c => c - 1);
    }
  }

  return [count, increment, decrement];
};
