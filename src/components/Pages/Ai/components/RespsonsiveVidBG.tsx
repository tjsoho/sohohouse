import { useState, useEffect, ReactNode } from 'react';

type ResponsiveVidBGProps = {
  children: ReactNode;
};

function ResponsiveVidBG({ children }: ResponsiveVidBGProps) {
  // Define two video sources
  const desktopVideo = "/images/multi.mp4";
  const mobileVideo = "/images/mob.mp4";

  const [videoSource, setVideoSource] = useState(desktopVideo);

  useEffect(() => {
    const handleResize = () => {
      // Check if the screen width is less than or equal to 768 pixels (common breakpoint for mobile devices)
      if (window.innerWidth <= 768) {
        setVideoSource(mobileVideo); // Use the mobile-optimized video
      } else {
        setVideoSource(desktopVideo); // Use the desktop video
      }
    };

    window.addEventListener('resize', handleResize);

    // Set the initial video source based on the current screen width
    handleResize();

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, [desktopVideo, mobileVideo]); // Add desktopVideo and mobileVideo as dependencies if they could change

  return (
    <div className="h-full w-full relative overflow-hidden">
      <video autoPlay muted playsInline style={{ width: "100%", height: "100%", objectFit: "cover" }}>
        <source src={videoSource} type="video/mp4" />
      </video>
      <div className="absolute top-0 left-0 right-0 bottom-0">
        {children}
      </div>
    </div>
  );
}

export default ResponsiveVidBG;
