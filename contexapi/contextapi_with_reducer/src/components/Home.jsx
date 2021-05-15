import React, { useContext, useState } from "react";
import { AppContext } from "../contexts/AppProvider";
function Home() {
  //we can do this shorter
  // const { dispatch, state:{count} } = useContext(AppContext);

  //or we can do this
  const { dispatch, state } = useContext(AppContext);
  const { count } = state;

  //   const toggleTheme = () => {
  //     const action = { type: "INCREMENT" };
  //     dispatch(action);
  //   };

  return (
    <div>
      {console.log("home")}
      <button onClick={() => dispatch({ type: "INCREMENT" })}>increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
      {/* <button onClick={toggleTheme}>increment</button> */}
      {count}
    </div>
  );
}

export default Home;
