import "./SideBar.css";
import NavigationMenu from "../NavigationMenu/NavigationMenu";

const SideBar = () => {
  return (
    <aside className="bg-dark w-60 rounded-l-3xl p-8 flex justify-center">
      <NavigationMenu />
    </aside>
  );
};

export default SideBar;
