import React, { useState, createContext, useCallback, useReducer } from "react";
import { myReducer } from "../components/reducer/MyReducer";

export const AppContext = createContext();
export const AppContextProvider = ({ children }) => {
  const initalstate = {
    count: 0
  };

  //we can do with call to myReducer
  // const [state, dispatch] = useReducer(myReducer, 0);

  //we can do this directlly like this in this component
  const [state, dispatch] = useReducer((state = 0, action) => {
    console.log(state);
    switch (action.type) {
      case "increment":
        console.log("increment");
        console.log(state);
        // const incrementState = state.count + 1;
        const incrementState = state + 1;
        return incrementState;
      case "decrement":
        console.log("decrement");
        const decrementState = state - 1;
        return decrementState;
      default:
        return state;
    }
  });

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
