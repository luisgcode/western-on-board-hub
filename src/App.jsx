import NavigationMenu from "../src/Components/NavigationMenu/NavigationMenu";
import MobileMenu from "../src/Components/MobileMenu/MobileMenu";
import LoginForm from "../src/Components/LoginForm/LoginForm";
import Footer from "../src/Components/Footer/Footer";
import NotFound from "../src/Pages/NotFound/NotFound";
import HomePage from "../src/Pages/HomePage/HomePage";
import AboutPage from "../src/Pages/AboutPage/AboutPage";

import "./App.css";

function App() {
  return (
    <div className="App">
      <NavigationMenu />
      <MobileMenu />
      <NotFound />
      <HomePage />
      <AboutPage />
      <LoginForm />
      <Footer />
    </div>
  );
}

export default App;
