import { useContext, useState } from "react";
import { AppContext } from "../contexts/AppContextProvider";
function Home() {
  //we can do this shorter
  // const { dispatch, state:{count} } = useContext(AppContext);

  //or we can do this
  const {
    dispatch,
    state,
    actions: { add }
  } = useContext(AppContext);

  const { count, arrRandom, random } = state;
  // const { add } = actions;

  //   const toggleTheme = () => {
  //     const action = { type: "INCREMENT" };
  //     dispatch(action);
  //   };

  // const listItems = arrRandom.map((item, i) => {
  //   <li key={i}>{item}</li>;
  // });

  // const listItems = arrRandom.map((item, i) => {
  //   if (item % 2 === 0) {
  //     return <li key={i}>{item}</li>;
  //   } else return <span>no</span>;
  // });

  const listItems = arrRandom.map((item, i) => {
    // if (item % 2 === 0) {
    if (!(item & 1)) {
      return (
        // <li key={i} className="item green" style={{ color: "green" }}>
        <li key={i} className="item green">
          {item}
        </li>
      );
    } else
      return (
        // <li key={i} className="item blue " style={{ color: "blue" }}>
        <li key={i} className="item blue">
          {item}
        </li>
      );
  });

  return (
    <div>
      {console.log("home")}
      {console.log(arrRandom)}
      {/* <button onClick={() => dispatch({ type: "INCREMENT" })}>increment</button> */}
      <button onClick={add}>increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>decrement</button>
      {/* <button onClick={toggleTheme}>increment</button> */}
      {count}

      {arrRandom.length > 0 ? <ul>{listItems}</ul> : <div>empty array </div>}

      {/* {arrRandom.length > 0 ? (
        <ul>
          {arrRandom.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      ) : (
        <div>empty array </div>
      )} */}
    </div>
  );
}

export default Home;
