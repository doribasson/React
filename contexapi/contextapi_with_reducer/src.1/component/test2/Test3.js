import React, { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

const Test2 = () => {
  const { name } = useContext(StudentContext);

  return <div>{name} 2</div>;
};

export default Test2;
