import React, { useState, useContext, useEffect, createContext } from "react";
import Test1 from "../test1/Test1";
import Test2 from "../test2/Test2";

export const StudentContext = createContext();

const ContexAPI = () => {
  const [age, setAge] = useState(5);
  return (
    <StudentContext.Provider value={{ name: "dori", setAge, age }}>
      <Test1 />
      <Test2 />
    </StudentContext.Provider>
  );
};

export default ContexAPI;
