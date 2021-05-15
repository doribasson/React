import React, { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

const Test1 = () => {
  const { name, age } = useContext(StudentContext);

  return <div>{name}111</div>;
};

export default Test1;
