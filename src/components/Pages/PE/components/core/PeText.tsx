import React from "react";
import { PeTextType } from "../../types";

type Props = {
  children: React.ReactNode;
  type: PeTextType;
  color: string;
  className?: string;
};
const PeText = ({ children, type, color, className }: Props) => {
  const renderHeadingText = () => {
    switch (type) {
      case "h1":
        return (
          <h1
            style={{ color, fontFamily: "GopherB" }}
            className={`text-[38px] sm:text-[60px] md:text-[80px] lg:text-[90px]  leading-none font-bold ${className}`}
          >
            {children}
          </h1>
        );
      case "h2":
        return (
          <h2
            style={{ color, fontFamily: "GopherB" }}
            className="text-[50px] sm:text-[60px] md:text-[70px]"
          >
            {children}
          </h2>
        );
      case "h3":
        return <h3 style={{ color, fontFamily: "GopherM" }}>{children}</h3>;
        case "sub1":
          return (
            <p style={{ color, fontFamily: "GopherL" }} className={`text-[20px] sm:text-[25px]  ${className}`}>
              {children}
            </p>
          );
    }
  };
  return <>{renderHeadingText()}</>;
};

export default PeText;
