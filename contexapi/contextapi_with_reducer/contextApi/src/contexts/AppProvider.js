import React, { useState, createContext, useCallback, useReducer } from "react";
import { myReducer, initalState } from "../components/reducer/MyReducer";

export const AppContext = createContext();
export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(myReducer, initalState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
