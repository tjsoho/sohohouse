import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import your page components
import Style from "./components/StyleGuide/Style";
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
          <Route path="/style" element={<Style />} />
          <Route path="/chevell" element={<Chevell />} />
          <Route path="/shadow" element={<Shadow />} />
          <Route path="/pe" element={<Pe />} />
          <Route path="/breath" element={<Breath />} />
          <Route path="/luxe" element={<Luxe />} />
          <Route path="/businesscompanion" element={<Ai />} />
          <Route path="/contactform" element={<ContactForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
