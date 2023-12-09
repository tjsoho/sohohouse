import React from "react";
import MenuIcon from "./MenuIcon";
import LogoO from "../Logo/LogoO";
import LogoB from "../Logo/LogoB";

type MenuBarProps = {
  isMenuOpen: boolean;
  toggleMenu: () => void;
};

export default function MenuBar({ isMenuOpen, toggleMenu }: MenuBarProps) {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-transparent flex justify-between items-center px-[25px] py-2">
      <div className="flex items-center md:pl-4 pt-2">
        <LogoO />
      </div>
      <div className="flex items-center">
        <MenuIcon isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </div>
    </div>
  );
}
