import { BreathColours } from "../constants/BreathColours";
import BreathText from "./core/BreathText";
import retreats from "../assets/images/retreatsLG.png";
import bookings from "../assets/images/bookingLG.png";
import { useEffect, useState } from "react";

function Section5() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Update the image source based on window width

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  // Define image styles for different screen sizes
  const imageStyles = {
    width: windowWidth < 768 ? "65%" : windowWidth < 1024 ? "50%" : "85%",
    height: "auto",
  };

  return (
    <div
      className="w-full h-screen flex flex-col lg:flex-row justify-center items-center"
      style={{ backgroundColor: BreathColours.SOFT_DARK }}
    >
      <div className="w-full lg:w-2/5 my-8 px-4">
        <BreathText
          type="h1"
          color={BreathColours.SOFT_CREAM}
          className="text-center"
        >
          A Seamless <br /> Booking System
        </BreathText>
      </div>
      <div className= "flex lg:w-3/5 flex-col lg:flex-row lg:pr-16">
        <div className="w-full flex justify-center ">
          <img
            src={bookings}
            alt="SoHo Creative House Client Mockup"
            style={imageStyles}
            
          />
        </div>
        <div className="w-full flex justify-center">
          <img
            src={retreats}
            alt="SoHo Creative House Client Mockup"
            style={imageStyles}
          />
        </div>
      </div>
    </div>
  );
}

export default Section5;
