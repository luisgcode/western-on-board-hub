import "./SideBar.css";
import NavigationMenu from "../NavigationMenu/NavigationMenu.jsx";

const SideBar = () => {
  return (
    <aside className="bg-dark py-5 px-5 md:px-10 rounded-l-3xl flex  ">
      <NavigationMenu />
    </aside>
  );
};

export default SideBar;
