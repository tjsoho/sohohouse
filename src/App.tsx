import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Style from "./components/StyleGuide/Style";
import Chevell from "./components/Pages/Chevell/Chevell";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Style />} />
          <Route path="/chevell" element={<Chevell />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
