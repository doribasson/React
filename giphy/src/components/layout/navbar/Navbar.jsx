import { useEffect, useState, useCallback } from "react";
// import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(false);

  const handleScroll = useCallback(() => {
    console.log(window.pageYOffset);
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos < currentScrollPos);
    setPrevScrollPos(currentScrollPos);
  }, [prevScrollPos]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, handleScroll, visible]);

  return (
    <nav className={`nav ${visible ? " visible" : ""}`}>
      <div className="header">
        <a href="/#">welcome</a>
        <ul>
          {/* <li>
            <NavLink
              className=""
              exact={true}
              to="#temp1"
              activeClassName="active"
            >
              Link1
            </NavLink>
          </li>
          <li>
            <NavLink
              className=""
              exact={true}
              to="#temp2"
              activeClassName="active"
            >
              Link2
            </NavLink>
          </li>
          <li>
            <NavLink
              className=""
              exact={true}
              to="#temp3"
              activeClassName="active"
            >
              Link3
            </NavLink>
          </li> */}
          <li>Link1</li>
          <li>Link2</li>
          <li>Link3</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
