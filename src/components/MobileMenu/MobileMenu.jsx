import { Link } from "react-router-dom";
import "./MobileMenu.css";

import logo from "../../assets/images/western-logo.svg";
import { IconInfoSquareRounded } from "@tabler/icons-react";
import { IconHome2 } from "@tabler/icons-react";
import { IconLogin } from "@tabler/icons-react";

const MobileMenu = () => {
  return (
    <>
      <nav className="mobile-menu flex flex-col  justify-center items-center py-8 gap-5 border ">
        <img className="logo w-[150px]" src={logo} alt="Western Logo" />
        <ul className="links flex gap-8">
          <Link to="/">
            <li className="mobile-nav-link">
              <IconHome2 stroke={2} /> Home
            </li>
          </Link>
          <Link to="/login">
            <li className="mobile-nav-link">
              <IconLogin stroke={2} />
              Login
            </li>
          </Link>
          <Link to="/about">
            <li className="mobile-nav-link">
              <IconInfoSquareRounded stroke={2} />
              About
            </li>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default MobileMenu;
