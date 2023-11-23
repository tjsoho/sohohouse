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
            style={{ color }}
            className="text-[161px] sm:text-[70px] md:text-[100px] lg:text-[130px] xl:text-[161px]"
          >
            {children}
          </h1>
        );
      case "h2":
        return <h2>{children}</h2>;
      case "h3":
        return <h3>{children}</h3>;
    }
  };
  return <>{renderHeadingText()}</>;
};

export default ChevellText;
