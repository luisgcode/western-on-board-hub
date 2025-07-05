import NavigationMenu from "../src/Components/NavigationMenu/NavigationMenu";
import SideBar from "../src/Components/SideBar/SideBar";
import NotFound from "../src/Pages/NotFound/NotFound";
import HomePage from "../src/Pages/HomePage/HomePage";
import AboutPage from "../src/Pages/AboutPage/AboutPage";

import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App flex p-4 gap-4" style={{ height: "calc(100vh - 0px)" }}>
      <SideBar />

      {/* Contenedor para las rutas */}
      <main className="flex-1 bg-white rounded-lg p-6 overflow-y-auto">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
