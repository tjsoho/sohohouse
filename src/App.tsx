import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Style from "./components/StyleGuide/Style";
import Chevell from "./components/Pages/Chevell/Chevell";
import Home from "./components/Pages/Home/Home";
import About from "./components/Pages/About/About";
import Shadow from "./components/Pages/Shadow/Shadow";
import Pe from "./components/Pages/PE/Pe";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/style" element={<Style />} />
          <Route path="/chevell" element={<Chevell />} />
          <Route path="/shadow" element={<Shadow />} />
          <Route path="/pe" element={<Pe />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
