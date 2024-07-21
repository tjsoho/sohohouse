import { HashRouter as Router } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import AppContent from "./AppContent"; // Import the AppContent component

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}

export default App;
