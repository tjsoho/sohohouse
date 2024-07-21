type MenuIconProps = {
  isMenuOpen: boolean;
  toggleMenu: () => void;
};

export default function MenuIcon({ isMenuOpen, toggleMenu }: MenuIconProps) {
  return (
    <div className="relative flex mr-4 mt-2">
      <div className="relative z-20 ">
        <nav>
          <button
            className="text-brand-orange w-10 h-10 relative focus:outline-none "
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <div className="flex justify-center items-center">
              {/* <span
                aria-hidden="true"
                className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                  isMenuOpen ? "rotate-45" : "-translate-y-1.5"
                }`}
              ></span>
              <span
                aria-hidden="true"
                className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                aria-hidden="true"
                className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                  isMenuOpen ? "-rotate-45" : "translate-y-1.5"
                }`}
              ></span> */}
              <div className="px-4 bg-brand-blue-light flex h-full items-center pt-2 pb-1 rounded-full">
                <p className="font-Black flex items-center h-full text-center">
                  {isMenuOpen ? "CLOSE" : "MENU"}
                </p>
              </div>
            </div>
          </button>
        </nav>
      </div>
    </div>
  );
}
