import React, { useState, createContext, useCallback, useReducer } from "react";
import { myReducer } from "../components/reducer/MyReducer";

export const AppContext = createContext();
export const AppContextProvider = ({ children }) => {
  const initalState = {
    count: 0
  };

  const reducer = (state, action) => {
    console.log(state);
    switch (action.type) {
      case "INCREMENT":
        console.log("increment");
        console.log(state);
        return { ...state, count: state.count + 1 };
      case "decrement":
        console.log("decrement");
        return { ...state, count: state.count - 1 };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initalState);

  // const toggleTheme = () => {
  //   const action = { type: "TOGGLE_THEME" };
  //   dispatch(action);
  // };
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
