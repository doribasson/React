import React, { useState, createContext, useCallback } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [count, setCount] = useState(5);
  const [str, setStr] = useState(null);
  const increment = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  const decrement = () => {
    setCount(prev => prev - 1);
  };

  return (
    <AppContext.Provider
      value={{ count, setCount, str, setStr, increment, decrement }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
