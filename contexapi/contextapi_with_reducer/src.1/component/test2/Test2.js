import React, { useContext, useEffect } from "react";
import { StudentContext } from "../context/StudentContext";

const Test2 = () => {
  const { name, setAge, age } = useContext(StudentContext);
  //   setAge(old => 65);
  //   useEffect(() => {}, [age]);

  return (
    <div>
      {name}
      {age}
    </div>
  );
};

export default Test2;
