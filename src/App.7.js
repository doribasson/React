import React, { useContext, useReducer } from "react";

const AppContext = React.createContext({
  value: 0,
  dispatch: () => {}
});

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return 0;
    default:
      throw new Error("Unexpected action");
  }
};

function ContextProvider(props) {
  const [count, dispatch] = useReducer(reducer, initialState);

  const contextValue = {
    count: count,
    dispatch: dispatch
  };

  return (
    <AppContext.Provider value={contextValue}>
      {props.children}
    </AppContext.Provider>
  );
}

function A(props) {
  const { count } = useContext(AppContext);

  return (
    <div>
      <p>A: {count}</p>
    </div>
  );
}

function Select() {
  const { dispatch } = useContext(AppContext);
  return {
    dispatch: dispatch
  };
}

let B = React.memo(({ dispatch, string }) => {
  console.log("this is the only render of B");
  return (
    <div>
      <p>B: {string}</p>
      <button onClick={() => dispatch("increment")}>+1</button>;
    </div>
  );
});

function connect(WrappedComponent, select) {
  return function(props) {
    const selectors = select();
    console.log(props);
    return <WrappedComponent {...selectors} {...props} />;
  };
}
B = connect(B, Select);

function App(props) {
  return (
    <ContextProvider>
      <A />
      <B string="Hello World" />
    </ContextProvider>
  );
}

export default App;
