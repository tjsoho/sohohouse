import React from "react";
import { ChevellTextType } from "../../types";

type Props = {
  children: React.ReactNode;
  type: ChevellTextType;
  color: string;
  className?: string;
};
const ChevellText = ({ children, type, color, className }: Props) => {
  const renderHeadingText = () => {
    switch (type) {
      case "h1":
        return (
          <h1
            style={{ color, fontFamily: "Ogg" }}
            className={`text-[60px] sm:text-[70px] md:text-[100px] lg:text-[110px] xl:text-[121px] leading-none ${className}`}          >
            {children}
          </h1>
        );
      case "h2":
        return (
          <h2
      style={{ color, fontFamily: "Ogg" }}
      className={`text-[36px]  md:text-[44px] lg:text-[52px] leading-tight ${className}`}
    >
      {children}
    </h2>
        );
      case "h3":
        return <h3 style={{ color, fontFamily: "Ogg" }}>{children}</h3>;
      case "sub1":
        return (
          <p className={`text-[18px] md:text-[20px] lg:text-[21]  ${className}`}>
            {children}
          </p>
        );
    }
  };
  return <>{renderHeadingText()}</>;
};

export default ChevellText;
