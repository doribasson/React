import { useState, useEffect } from "react";
const Child = ({ render, setName }) => {
  useEffect(() => {
    // setName("changeName");
  }, []);

  return (
    <div>
      {/* {console.log(props.render} } */}
      {render("basson")}
      {/* {render()} */}
      {/* {props.render()} */}
    </div>
  );
};

const WithRenderProps = () => {
  // const name = "dori";
  const [fName, setName] = useState("dori");
  return (
    <div
      style={{ backgroundColor: "#cccc", width: "100%", textAlign: "center" }}
    >
      <h1>WithRenderProps</h1>
      {/* <p>{fName}</p> */}
      {/* <Child>WithRenderProps</Child> */}
      <Child
        setName={setName}
        render={thisPropsFromChild => (
          <p>{`iam ${fName} ${thisPropsFromChild}`}</p>
        )}
      />
      {/* <Child render={thisPropsFromChild => <h1>iam {fName}</h1>} /> */}
    </div>
  );
};

export default WithRenderProps;

//העברנו לילד את הרנדר שבתוכו יש גם פרמטר ואז בתוך הילד הצגנו את הרנדר
//  זה בא מ  basson
//thisPropsFromChild
// dori ו
//בא מ
//fName
