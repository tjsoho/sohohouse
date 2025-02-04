import { useEffect, useState } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import About from "./components/Pages/About/About";
import Chevell from "./components/Pages/Chevell/Chevell";
import Shadow from "./components/Pages/Shadow/Shadow";
import Pe from "./components/Pages/PE/Pe";
import Breath from "./components/Pages/Breath/Breath";
import Luxe from "./components/Pages/Luxe/Luxe";
import Ai from "./components/Pages/Ai/Ai";
import ContactForm from "./components/Pages/ContactForm/ContactForm";
import Sites from "./components/Pages/Websites/Sites";
import MenuBar from "./components/Menu/MenuBar";
import MenuPage from "./components/Menu/MenuPage";
import ScrollToTop from "./components/ScrollToTop";
import Creations from "./components/Pages/Creations/Creations";
import Calendar from "./components/Pages/Contact/Calendar";
import ComingSoon from "./components/Pages/ComingSoon";
import PrivacyPolicy from "./components/Pages/Contact/PrivacyPolicy";
import JournalOne from "./components/Pages/Blog/JournalOne";
import BlogPageHero from "./components/Pages/Blog/BlogPageHero";
import JournalTwo from "./components/Pages/Blog/JournalTwo";
import JournalThree from "./components/Pages/Blog/JournalThree";
import WebsitePage from "./components/Pages/WebsiteLanding/WebsitePage";
import BlogPost from "./components/Pages/Blog/BlogPost";
import BlogComposer from "./components/Pages/Blog/BlogComposer";
import BlogManager from "./components/Pages/Blog/BlogManager";
import JournalFour from "./components/Pages/Blog/JournalFour";
import JournalFive from "./components/Pages/Blog/JournalFive";
import JournalSix from "./components/Pages/Blog/JournalSix";
import JournalSeven from "./components/Pages/Blog/JournalSeven";
import JournalEight from "./components/Pages/Blog/JournalEight";

const AppContent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Hide MenuBar on specific routes
  const hideMenuBarPaths = ["/website-page"];
  const shouldHideMenuBar = hideMenuBarPaths.includes(location.pathname);

  useEffect(() => {
    if (typeof window.gtag !== "undefined") {
      window.gtag("event", "page_view", {
        page_path: location.pathname,
        page_title: document.title,
      });
    }
  }, [location]);

  return (
    <div>
      {!shouldHideMenuBar && (
        <MenuBar toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      )}
      {isMenuOpen && !shouldHideMenuBar && <MenuPage toggleMenu={toggleMenu} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/chevell" element={<Chevell />} />
        <Route path="/shadow" element={<Shadow />} />
        <Route path="/pe" element={<Pe />} />
        <Route path="/breath" element={<Breath />} />
        <Route path="/luxe" element={<Luxe />} />
        <Route path="/ai-solutions" element={<Ai />} />
        <Route path="/contactme" element={<ContactForm />} />
        <Route path="/creations" element={<Creations />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/comingsoon" element={<ComingSoon />} />
        <Route path="/websites" element={<Sites />} />
        <Route path="/journal" element={<BlogPageHero />} />
        <Route path="/power-of-an-engaging-website" element={<JournalOne />} />
        <Route path="/power-of-an-engaging-website" element={<JournalTwo />} />
        <Route path="/streamlined-brand-messaging" element={<JournalThree />} />
        <Route
          path="/the-instagram-website-synergy"
          element={<JournalFour />}
        />
        <Route path="/the-high-converting-homepage" element={<JournalFive />} />
        <Route
          path="/5-reasons-your-business-needs-a-blog"
          element={<JournalSix />}
        />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/website-page" element={<WebsitePage />} />
        <Route path="/blog-composer" element={<BlogComposer />} />
        <Route path="/blog-manager" element={<BlogManager />} />
        <Route path="/blog-editor/:id" element={<BlogComposer />} />
        <Route path="/journal/:slug" element={<BlogPost />} />
        <Route
          path="/content-waterfall-marketing"
          element={<JournalSeven />}
        />
        <Route 
          path="/values-in-business" 
          element={<JournalEight />} 
        />
      </Routes>
    </div>
  );
};

export default AppContent;
