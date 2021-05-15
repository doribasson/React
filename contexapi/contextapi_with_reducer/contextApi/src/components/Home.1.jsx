import React, { useContext } from "react";
import { AppContext } from "../contexts/AppProvider";
function Home() {
  const { count, str, increment, decrement, setCount } = useContext(AppContext);

  return (
    <div>
      {console.log("home")}
      <span> iam home {count} </span>
      <span> iam home {str} </span>
      <button onClick={increment}> increment</button>
      <button onClick={decrement}> decremet</button>
      <button onClick={() => setCount(0)}> initalize</button>
    </div>
  );
}

export default Home;
