import { Route, Routes } from "react-router-dom";
import "./App.css";
import SideBar from "./components/SideBar/SideBar";
import NotFound from "./Pages/NotFound/NotFound";
import HomePage from "./Pages/HomePage/HomePage";
import AboutPage from "./Pages/AboutPage/AboutPage";
import LoginForm from "./Pages/LoginPage/LoginPage";
import TopBar from "./components/TopBar/TopBar";
import Tasks from "./Pages/Tasks/Tasks";
import Instrucctions from "./Pages/Instrucctions/Instrucctions";
import Others from "./Pages/Others/Others";

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
          <Route path="/login" element={<LoginForm />} />
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
