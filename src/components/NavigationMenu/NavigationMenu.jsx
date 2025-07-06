import logo from "../../assets/images/western-logo.svg";
import { IconInfoSquareRounded } from "@tabler/icons-react";
import { IconHome2 } from "@tabler/icons-react";
import { IconLogin } from "@tabler/icons-react";
import { Link } from "react-router-dom";

import "./NavigationMenu.css";

const NavigationMenu = () => {
  return (
    <div className="navigation-menu flex flex-col gap-10 ">
      {/* Logo */}
      <div className="logo-box bg-white rounded-2xl p-4">
        <img className="logo w-[120px] " src={logo} alt="Western Logo" />
      </div>
      <ul className="links flex flex-col gap-1 ">
        <Link to="/">
          <li className="nav-link text-textLight">
            <IconHome2 stroke={1} className="nav-icons" /> Home
          </li>
        </Link>
        <Link to="/login">
          <li className="nav-link">
            <IconLogin stroke={1} className="nav-icons" />
            Login
          </li>
        </Link>
        <Link to="/about">
          <li className="nav-link">
            <IconInfoSquareRounded stroke={1} className="nav-icons" />
            About
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default NavigationMenu;
