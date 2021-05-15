import React, { useContext } from "react";
import StudentContext from "../context/StudentContext";

const Test1 = () => {
  const { name } = useContext(StudentContext);

  return <div>{name}</div>;
};

export default Test1;
