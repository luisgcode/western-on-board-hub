import { Link } from "react-router-dom";

const MobileMenu = () => {
  return (
    <div>
      <ul className="border border-b-amber-800">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </ul>
    </div>
  );
};

export default MobileMenu;
