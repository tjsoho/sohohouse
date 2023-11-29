import React from "react";
import { ChevellTextType } from "../../types";

type Props = {
  children: React.ReactNode;
  type: ChevellTextType;
  color: string;
};
const ChevellText = ({ children, type, color }: Props) => {
  const renderHeadingText = () => {
    switch (type) {
      case "h1":
        return (
          <h1
            style={{ color, fontFamily: "OggRoman" }}
            className="text-[60px] sm:text-[70px] md:text-[100px] lg:text-[130px] xl:text-[161px]"
          >
            {children}
          </h1>
        );
      case "h2":
        return (
          <h2
            style={{ color, fontFamily: "OggItalic" }}
            className="text-[50px] sm:text-[60px] md:text-[70px]"
          >
            {children}
          </h2>
        );
      case "h3":
        return <h3 style={{ color, fontFamily: "OggItalic" }}>{children}</h3>;
      case "sub1":
        return (
          <p className="text-[20px] sm:text-[25px] md:text-[30px] lg:text-[35px] xl:text-[37px]">
            {children}
          </p>
        );
    }
  };
  return <>{renderHeadingText()}</>;
};

export default ChevellText;
