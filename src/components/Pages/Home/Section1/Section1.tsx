import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Landing1 from "./Landing1";
import Landing2 from "./Landing2";

export default function LandingHome() {
  const [showLanding, setShowLanding] = useState(true);

  useEffect(() => {
    // Set a timeout to start fading out Landing and fade in Landing2 after 2 seconds
    const timeoutId = setTimeout(() => {
      setShowLanding(false);
    }, 2000);

    // Clean up the timeout when the component is unmounted
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="w-full h-screen flex flex-col items-center bg-brand-blue relative">
      {/* Landing components */}
      <div className="w-full h-full">
        {showLanding ? <Landing1 /> : <Landing2 />}
      </div>

      {/* Blog button - positioned absolutely */}
      {/* <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute bottom-32 md:bottom-40 z-10" // Adjust bottom value as needed
      >
        <Link
          to="/5-reasons-your-business-needs-a-blog"
          className="inline-block px-8 py-4 bg-brand-orange text-brand-blue rounded-full font-Black text-lg hover:bg-brand-orange-light transition-colors duration-300"
        >
          Read Latest: Why Your Business Needs a Blog
        </Link>
      </motion.div> */}
    </div>
  );
}
