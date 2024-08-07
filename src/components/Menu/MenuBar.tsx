import { useState, useEffect, useRef } from "react";
import MenuIcon from "./MenuIcon";
import LogoO from "../Logo/LogoO";
import { Link } from "react-router-dom";

type MenuBarProps = {
  isMenuOpen: boolean;
  toggleMenu: () => void;
};

export default function MenuBar({ isMenuOpen, toggleMenu }: MenuBarProps) {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [mouseActive, setMouseActive] = useState(false);
  const mouseMoveTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  let lastScrollTop = 0;

  const handleScroll = () => {
    const offset = window.scrollY;
    setHasScrolled(offset > 50);

    if (offset > lastScrollTop) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
    lastScrollTop = offset;
  };

  const handleMouseMove = () => {
    setMouseActive(true);
    if (mouseMoveTimeoutRef.current) {
      clearTimeout(mouseMoveTimeoutRef.current);
    }
    mouseMoveTimeoutRef.current = setTimeout(() => setMouseActive(false), 2000);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      if (mouseMoveTimeoutRef.current) {
        clearTimeout(mouseMoveTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${
        hasScrolled && mouseActive ? "" : ""
      } ${isHidden && !mouseActive ? "lg:-translate-y-full" : "translate-y-0"} flex justify-between items-center px-[25px] py-0`}
    >
      <div className="flex items-center md:pl-4 mt-2">
        <Link to="/">
          <LogoO />
        </Link>
      </div>
      <div className="flex items-center">
        <div className="block lg:hidden">
          <MenuIcon isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>
        <div className="hidden lg:flex items-center">
          <MenuIcon isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>
      </div>
    </div>
  );
}
