import React from "react";
import { BreathTextType } from "../../types";

type Props = {
  children: React.ReactNode;
  type: BreathTextType;
  color: string;
  className?: string;
};
const BreathText = ({ children, type, color, className }: Props) => {
  const renderHeadingText = () => {
    switch (type) {
      case "h1":
        return (
          <h1
            style={{ color, fontFamily: "Play" }}
            className={`text-[38px] md:text-[70px] lg:text-[90px]  leading-none font-bold ${className}`}
          >
            {children}
          </h1>
        );
      case "h2":
        return (
          <h2
            style={{ color, fontFamily: "Play" }}
            className="text-[50px] sm:text-[60px] md:text-[70px]"
          >
            {children}
          </h2>
        );
      case "h3":
        return <h3 style={{ color, fontFamily: "Roboto" }}>{children}</h3>;
        case "sub1":
          return (
            <p style={{ color, fontFamily: "Roboto" }} className={`text-[18px] md:text-[21px]  ${className}`}>
              {children}
            </p>
          );
    }
  };
  return <>{renderHeadingText()}</>;
};

export default BreathText;
