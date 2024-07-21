import { useState, useEffect } from "react";
import Landing1a from "./Landing1a";
import Landing2a from "./Landing2a";

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
    <div className="w-full h-screen flex flex-col items-center bg-brand-blue ">
      {showLanding ? <Landing1a /> : <Landing2a />}
      
    </div>
  );
}
