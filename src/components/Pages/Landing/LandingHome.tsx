import { useState, useEffect } from "react";
import Landing from "./Landing";
import Landing2 from "./Landing2";

export default function LandingHome() {
  const [showLanding, setShowLanding] = useState(true);

  useEffect(() => {
    // Set a timeout to switch from Landing to Landing2 after 5 seconds
    const timeoutId = setTimeout(() => {
      setShowLanding(false);
    }, 5000);

    // Clean up the timeout when the component is unmounted
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="w-full h-screen flex flex-col items-center bg-brand-blue">
      {showLanding ? <Landing /> : <Landing2 />}
    </div>
  );
}
