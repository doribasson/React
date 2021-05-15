import React, { createContext, useState } from "react";

const AppContext = createContext();
const AppContextProvider = ({ children }) => {
  let [state, setState] = useState({
    name: "Jane Doe",
    age: 20
  });

  // const incrementAge = () => {
  //   setState(age + 1);
  // };

  const incrementAge = () => {
    setState(prevState => ({
      ...prevState,
      age: state.age + 1
    }));
  };

  const decrementAge = () => {
    setState(prevState => ({
      ...prevState,
      age: state.age - 1
    }));
  };

  return (
    //go to AppContext.Provider and then
    <AppContext.Provider value={{ state, incrementAge, decrementAge }}>
      {children}
    </AppContext.Provider>
  );
};
export { AppContextProvider, AppContext };

//we can do this:
//export const AppContext = createContext(); ...in the start
//export default AppContextProvider; ...in the end
//in the App import  AppContextProvider from "./context/main";

//or
//const AppContext = createContext();  ...in the start
//export  {AppContextProvider, AppContext }; ...in the end
//in the App import { AppContextProvider } from "./context/main";
