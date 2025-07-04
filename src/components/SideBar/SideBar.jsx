import "./SideBar.css";
import NavigationMenu from "../NavigationMenu/NavigationMenu";

const SideBar = () => {
  return (
    <aside className="bg-dark py-5 px-10 rounded-l-3xl flex  ">
      <NavigationMenu />
    </aside>
  );
};

export default SideBar;
