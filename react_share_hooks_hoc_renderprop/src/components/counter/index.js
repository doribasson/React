import React from "react";

export default function Counter({ title, count, increment, decrement }) {
  return (
    <div>
      <h2>Counter Component - {title}</h2>
      <h3>Count: {count}</h3>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}
