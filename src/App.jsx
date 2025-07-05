import { Route, Routes } from "react-router-dom";
import "./App.css";
import SideBar from "../src/Components/SideBar/SideBar";
import NotFound from "../src/Pages/NotFound/NotFound";
import HomePage from "../src/Pages/HomePage/HomePage";
import AboutPage from "../src/Pages/AboutPage/AboutPage";
import TopBar from "../src/Components/TopBar/TopBar";
import Tasks from "../src/Pages/Tasks/Tasks";
import Instrucctions from "../src/Pages/Instrucctions/Instrucctions";
import Others from "../src/Pages/Instrucctions/Instrucctions";

function App() {
  return (
    <div
      className="App flex p-2 lg:p-10  "
      style={{ height: "calc(100vh - 0px)" }}
    >
      <SideBar />

      {/* Contenedor para las rutas */}
      <main className="w-full overflow-y-auto bg-white rounded-r-2xl ">
        <TopBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/instrucctions" element={<Instrucctions />} />
          <Route path="/others" element={<Others />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
