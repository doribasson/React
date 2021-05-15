import { useEffect, useState } from "react";
import styled from "styled-components";

const Nav = styled.nav`
  width: 100%;
  position: fixed;
  background-color: indigo;
  height: 60px;
  top: ${props => (props.visible ? "0" : "-60px")};

  /* overflow-y: scroll; */
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
    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );
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
        <ul>
          <li>dori</li>
          <li>ran</li>
          <li>shahar</li>
        </ul>
      </Nav>
    </>
  );
};

export default Navbar;
