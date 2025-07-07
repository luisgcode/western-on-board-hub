import logo from "../../assets/images/western-logo.svg";
import { IconInfoSquareRounded } from "@tabler/icons-react";
import { IconFiles } from "@tabler/icons-react";
import { IconLogin } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { logOut } from "../../firebase";

import "./NavigationMenu.css";

const NavigationMenu = () => {
  const { user } = useAuth();

  const handleLogout = async () => {
    try {
      await logOut();
    } catch (error) {
      console.error("Error session", error);
    }
  };

  return (
    <div className="navigation-menu flex flex-col gap-10 ">
      {/* Logo */}
      <div className="logo-box bg-white rounded-2xl p-4">
        <img className="logo w-[120px] " src={logo} alt="Western Logo" />
      </div>
      <ul className="links flex flex-col gap-1 ">
        <Link to="/">
          <li className="nav-link text-textLight">
            <IconFiles stroke={1} className="nav-icons" /> Docs
          </li>
        </Link>
        {user ? (
          <li className="nav-link" onClick={handleLogout}>
            <IconLogin stroke={1} className="nav-icons" /> Logout
          </li>
        ) : (
          <Link to="/login">
            <li className="nav-link">
              <IconLogin stroke={1} className="nav-icons" />
              Login
            </li>
          </Link>
        )}
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
