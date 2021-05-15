import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { useEffect } from "react";
import styled from "styled-components";

function App() {
  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <>
      <Navbar />
      <Home />
    </>
  );
}

export default App;
