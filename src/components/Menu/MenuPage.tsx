import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // Import useLocation
import { MenuItem } from "./MenuItem";

interface MenuPageProps {
  toggleMenu: () => void;
}

const MenuPage: React.FC<MenuPageProps> = ({ toggleMenu }) => {
  const navigate = useNavigate();
  const location = useLocation(); // Use the useLocation hook

  const menuItems = [
    { text: "Home", route: "/", i: 1 },
    { text: "Our Story", route: "/about", i: 2 }, // Corrected the route
    { text: "Our Creations", route: "/creations", i: 3 }, // Corrected the route and index
    { text: "Ai Business Companion", route: "/businesscompanion", i: 4 }, // Corrected the index
    { text: "Let's Chat", route: "/contactform", i: 5 }, // Corrected the index
  ];

  const handleItemClick = (route: string) => {
    console.log("Item clicked, navigating to:", route);
    toggleMenu();
    navigate(route);
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-screen h-screen p-16 lg:p-32 bg-brand-blue flex flex-col justify-center items-center font-Black z-40 ">
      <ul style={{ listStyle: "none", padding: 0 }}>
        {menuItems.map((item) => (
          <MenuItem 
            key={item.i} 
            text={item.text} 
            i={item.i} 
            onClick={() => handleItemClick(item.route)}
            isCurrentPage={location.pathname === item.route}
          />
        ))}
      </ul>
    </div>
  );
};

export default MenuPage;
