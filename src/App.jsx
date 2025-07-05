import NavigationMenu from "../src/Components/NavigationMenu/NavigationMenu";
import MobileMenu from "../src/Components/MobileMenu/MobileMenu";
import Footer from "../src/Components/Footer/Footer";
import NotFound from "../src/Pages/NotFound/NotFound";
import HomePage from "../src/Pages/HomePage/HomePage";
import AboutPage from "../src/Pages/AboutPage/AboutPage";

import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <MobileMenu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />

        {/* Not found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
