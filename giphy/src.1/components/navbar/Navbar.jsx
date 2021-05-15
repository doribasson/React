import { useEffect, useState } from "react";
import "./navbar.scss";

const Navbar = () => {
  const handleScroll = () => {
    console.log("hello");
    console.log(window.pageYOffset);
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos < currentScrollPos);
    setPrevScrollPos(currentScrollPos);
  };

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <nav className={`nav ${visible ? " visible" : ""}`}>
      <ul>
        <li>dori</li>
        <li>ran</li>
        <li>shahar</li>
      </ul>
    </nav>
  );
};

export default Navbar;
