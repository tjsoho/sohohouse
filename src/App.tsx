import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Style from "./components/StyleGuide/Style";
import Chevell from "./components/Pages/Chevell/Chevell";
import Home from "./components/Pages/Home/Home";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/style" element={<Style />} />
          <Route path="/chevell" element={<Chevell />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
