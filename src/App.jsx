import { Route, Routes } from "react-router-dom";
import "./App.css";
import SideBar from "./Components/SideBar/SideBar.jsx";
import NotFound from "./Pages/NotFound/NotFound.jsx";
import HomePage from "./Pages/HomePage/HomePage.jsx";
import AboutPage from "./Pages/AboutPage/AboutPage.jsx";
import LoginForm from "./Pages/LoginPage/LoginPage.jsx";
import TopBar from "./Components/TopBar/TopBar.jsx";

function App() {
  return (
    <div
      className="App flex p-2 lg:p-10  "
      style={{ height: "calc(100vh - 0px)" }}
    >
      <SideBar />

      <main className="w-full overflow-y-auto bg-white rounded-r-2xl ">
        <TopBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginForm />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
