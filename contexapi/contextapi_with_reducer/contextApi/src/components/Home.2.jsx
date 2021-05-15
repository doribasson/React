import React, { useContext, useState } from "react";
import { AppContext } from "../contexts/AppProvider";
function Home() {
  // const { dispatch, state:{count} } = useContext(AppContext);
  const { dispatch, state } = useContext(AppContext);
  const { count } = state;

  return (
    <div>
      {console.log("home")}
      <button onClick={() => dispatch({ type: "increment" })}>increment</button>
      <button
        onClick={() =>
          //   dispatch({ type: "decrement", payload: setCount(prv => prv - 1) })
          dispatch({ type: "decrement" })
        }
      >
        decrement
      </button>
      {count}
    </div>
  );
}

export default Home;
