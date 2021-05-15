import { useState } from "react";
const withClasses = (WrappedComponent, classes) => {
  return props => (
    <div className={classes}>
      {console.log(classes)}
      <span>iam WrappedComponent </span>
      <WrappedComponent {...props} />
      <span>iam whiteClass</span>
    </div>
  );
};

function App() {
  const [name, setName] = useState("dori");
  return (
    <div className="App">
      <span>iam app</span>
    </div>
  );
}
export default withClasses(App);

//מה שבתוך הסוגריים שזה כל הקומפוננטה שלי הוא זה שיכנס לתוך הוויטקלס
