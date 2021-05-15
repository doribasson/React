import { useState } from "react";
const Child = ({ children, name, lastName, setName }) => {
  return (
    <div>
      <p>
        iam Child {name} {lastName}
      </p>
      {console.log(name)}
      {children}
      <button type="button" onClick={() => setName("ordit")}>
        click change name
      </button>
    </div>
  );
};

function SomeComp() {
  return (
    <div className="App">
      <p>iam SomeComp</p>
    </div>
  );
}
//width children take all inside <Child>  </Child> to Child and pass the props too
function App() {
  const [firstName, setName] = useState("dori");
  const [lastName, setLastName] = useState("basson");
  return (
    <div className="App">
      <Child name={firstName} lastName={lastName} setName={setName}>
        <p>iam inside App</p>

        <SomeComp />
      </Child>
    </div>
  );
}

export default App;
