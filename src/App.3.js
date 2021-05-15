//pass SomeComp from app to child its inherite

import { useState } from "react";
const Child = ({ compToPass, name }) => {
  return (
    <div>
      {console.log(name)}
      {compToPass}
    </div>
  );
};

function SomeComp() {
  const [name, setName] = useState("dori");

  return (
    <div className="App">
      <span>iam SomeComp</span>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <span>iam app</span>
      <Child compToPass={<SomeComp />} />
    </div>
  );
}

export default App;
