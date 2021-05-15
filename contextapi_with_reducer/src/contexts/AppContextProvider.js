import React, { useState, createContext, useCallback, useReducer } from "react";
import { myReducer, initalState } from "../components/reducer/MyReducer";

export const AppContext = createContext();
export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(myReducer, initalState);

  const actions = {
    add() {
      dispatch({ type: "INCREMENT" });
    }
    // mark(taskId, done) {
    //   dispatch(markAction(taskId, done));
    // },
    // remove(taskId) {
    //   dispatch(deleteAction(taskId));
    // }
  };

  return (
    <AppContext.Provider value={{ state, dispatch, actions }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
