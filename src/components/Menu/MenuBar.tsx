import React, { useState, useEffect } from "react";
import MenuIcon from "./MenuIcon";
import LogoO from "../Logo/LogoO";
import LogoB from "../Logo/LogoB"; // Import LogoB if you haven't already

type MenuBarProps = {
  isMenuOpen: boolean;
  toggleMenu: () => void;
};

export default function MenuBar({ isMenuOpen, toggleMenu }: MenuBarProps) {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  let lastScrollTop = 0; // Declare lastScrollTop as a variable

  const handleScroll = () => {
    const offset = window.scrollY;
    setHasScrolled(offset > 50);

    // Check the scroll direction
    if (offset > lastScrollTop) {
      setIsHidden(true); // Scrolling down, hide the menu bar
    } else {
      setIsHidden(false); // Scrolling up or at the top, show the menu bar
    }
    lastScrollTop = offset;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${
        hasScrolled ? "bg-brand-blue" : ""
      } ${isHidden ? "-translate-y-full" : "translate-y-0"} flex justify-between items-center px-[25px] py-2`}
    >
      <div className="flex items-center md:pl-4">
        {hasScrolled ? <LogoO /> : <LogoO />}
      </div>
      <div className="flex items-center">
        <MenuIcon isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </div>
    </div>
  );
}
