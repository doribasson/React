import React from "react";
import logo from "./logo.svg";
import icon from "./data/icon.png";
// import './App.css';

const App = () => {
  return (
    <div>
      <div className="container">
        <h1 className="fade-in"> Fade Me In </h1>
        <h1 className="fade-in"> Fade Me In </h1>
        <h1 className="fade-in"> Fade Me In </h1>
        <h1 className="fade-out"> Fade Me Out </h1>
      </div>
      <React.Fragment>
        <img className="img" src={icon} />
      </React.Fragment>

      <div className="title-fade-in">hey my name is dori fade-in</div>
      <br />
      <div className="title-fade-out">hey my name is dori fade-out</div>
      <br />
      <p>Hi folks, this is typing animation using CSS</p>
      <br />
    </div>
  );
};

export default App;
