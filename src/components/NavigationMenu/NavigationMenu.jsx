import logo from "../../assets/images/western-logo.svg";
import { IconInfoSquareRounded } from "@tabler/icons-react";
import { IconHome2 } from "@tabler/icons-react";
import { IconLogin } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const NavigationMenu = () => {
  return (
    <div className="navigation-menu">
      <div className="logo-box bg-white rounded-2xl p-4">
        <img className="logo w-[120px] " src={logo} alt="Western Logo" />
      </div>
      <ul className="links flex flex-col items-start ">
        <Link to="/">
          <li className="mobile-nav-link">
            <IconHome2 stroke={1} className="nav-icons" /> Home
          </li>
        </Link>
        <Link to="/login">
          <li className="mobile-nav-link">
            <IconLogin stroke={1} className="nav-icons" />
            Login
          </li>
        </Link>
        <Link to="/about">
          <li className="mobile-nav-link">
            <IconInfoSquareRounded stroke={1} className="nav-icons" />
            About
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default NavigationMenu;
