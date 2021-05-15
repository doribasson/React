import { useState } from "react";
import Button from "./Button";

const WithHooks = () => {
  const [count, inc, dec] = useCount(5);
  return (
    <div
      style={{ backgroundColor: "#cccc", width: "100%", textAlign: "center" }}
    >
      <h1>WithHooks</h1>
      <p>{count}</p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button onClick={inc} text="increment" />
        &nbsp;&nbsp;
        <Button onClick={dec} text="decrement" />
      </div>
      {/* s{" "}
      <button onClick={dec}>decrement</button> */}
      {/* </Button> */}
    </div>
  );
};

export default WithHooks;

export const useCount = (intiaValue = 0) => {
  const [count, setCount] = useState(intiaValue);

  const inc = () => {
    setCount(prev => prev + 1);
  };

  const dec = () => {
    setCount(prev => prev - 1);
  };

  return [count, inc, dec];
};
