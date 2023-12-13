import  { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import your page components

import Chevell from "./components/Pages/Chevell/Chevell";
import Home from "./components/Pages/Home/Home";
import About from "./components/Pages/About/About";
import Shadow from "./components/Pages/Shadow/Shadow";
import Pe from "./components/Pages/PE/Pe";
import Breath from "./components/Pages/Breath/Breath";
import Luxe from "./components/Pages/Luxe/Luxe";
import Ai from "./components/Pages/Ai/Ai";
import ContactForm from "./components/Pages/ContactForm/ContactForm";

// Import MenuBar and MenuPage
import MenuBar from "./components/Menu/MenuBar";
import MenuPage from "./components/Menu/MenuPage";
import ScrollToTop from './components/ScrollToTop'
import Creations from "./components/Pages/Creations/Creations";
import Calendar from "./components/Pages/Contact/Calendar";
import ComingSoon from "./components/Pages/ComingSoon";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Router>
       <ScrollToTop />
      <div>
      <MenuBar toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
        {isMenuOpen && <MenuPage toggleMenu={toggleMenu} />}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/chevell" element={<Chevell />} />
          <Route path="/shadow" element={<Shadow />} />
          <Route path="/pe" element={<Pe />} />
          <Route path="/breath" element={<Breath />} />
          <Route path="/luxe" element={<Luxe />} />
          <Route path="/businesscompanion" element={<Ai />} />
          <Route path="/contactform" element={<ContactForm />} />
          <Route path="/creations" element={<Creations />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/comingsoon" element={<ComingSoon />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
