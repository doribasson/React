import React, { useState } from "react";
import { useSample } from "./provider";

const Sends = props => {
  const [input, setInput] = useState("");

  const handleChange = e => {
    setInput(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    props.setValue(input);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input name="input" value={input} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default useSample(Sends);
