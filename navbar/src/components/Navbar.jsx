import { useEffect, useState } from "react";
import styled from "styled-components";

const Nav = styled.nav`
  /* width: 100%; */
  width: 99%;
  right: 50%;
  transform: translate(50%);

  position: fixed;
  background-color: rgb(0, 0, 128, 0.6);
  /* background: blue; */
  top: ${props => (props.visible ? "0" : "-60px")};
  transition-timing-function: ease-in;
  transition: 1.5s;
  /* opacity: 0.7; */
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
  line-height: 4rem;
  /* .overlay {
    background-color: blue;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 11111;
  } */

  ul {
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style-type: none;
    font-size: 2rem;
    color: white;
  }
`;

const Navbar = () => {
  const handleScroll = () => {
    console.log("hello");
    console.log(window.pageYOffset);
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos);
    setPrevScrollPos(currentScrollPos);
  };

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <>
      <Nav visible={visible}>
        <div className="overlay">
          <ul>
            <li>dori</li>
            <li>ran</li>
            <li>shahar</li>
          </ul>
        </div>
      </Nav>
    </>
  );
};

export default Navbar;
