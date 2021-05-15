import { useEffect } from "react";

const Child = ({ name, lName }) => {
  useEffect(() => {
    // setName("changeName");
  }, []);

  return (
    <div>
      <p>{name}</p>
      <p>{lName}</p>
    </div>
  );
};

function Render(Wrapped) {
  return function New(props) {
    console.log(props);
    return <Wrapped {...props} />;
  };
}

// function Render(Wrapped) {
//   return props => {
//     return <Wrapped {...props} />;
//   };
// }

const WithHoc = () => {
  const C = Render(Child);
  return (
    <div
      style={{ backgroundColor: "#cccc", width: "100%", textAlign: "center" }}
    >
      <h1>WithHoc</h1>
      <C name="dori" lName="basson" />
    </div>
  );
};

export default WithHoc;
