import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MenuItem } from "./MenuItem"; // Ensure this import is correct

interface MenuPageProps {
  toggleMenu: () => void;
}

const MenuPage: React.FC<MenuPageProps> = ({ toggleMenu }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { text: "Home", route: "/", i: 1 },
    { text: "About Me", route: "/about", i: 2 },
    { text: "Ai HUB", route: "/aihub", i: 3 },
    { text: "Websites", route: "/websites", i: 4 },
    { text: "Portfolio", route: "/creations", i: 5 },
    { text: "Member Login", route: "https://polite-rock-0e27c2600.5.azurestaticapps.net/", isExternal: true, i: 6 },
    { text: "Let's Chat", route: "/contactme", i: 7 },
  ];

  const handleItemClick = (route: string, isExternal: boolean = false) => {
    toggleMenu();
    if (isExternal) {
      window.open(route, "_blank");
    } else {
      navigate(route);
    }
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-screen h-screen p-16 lg:p-32 bg-brand-blue flex flex-col justify-center items-center font-Black z-40">
      <ul style={{ listStyle: "none", padding: 0 }}>
        {menuItems.map((item) => (
          <MenuItem 
            key={item.i}
            text={item.text}
            i={item.i}
            onClick={() => handleItemClick(item.route, item.isExternal)}
            isCurrentPage={location.pathname === item.route}
          />
        ))}
      </ul>
    </div>
  );
};

export default MenuPage;
