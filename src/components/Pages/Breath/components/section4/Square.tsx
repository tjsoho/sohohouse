import React from "react";
import { BreathColours } from "../../constants/BreathColours";
import BreathText from "../core/BreathText";
import { CSSProperties } from 'react';

interface SquareProps {
  colour: string;
  label?: string;
  text?: string;
  image?: string;
  code1?: string;
  code2?: string;
}

const Square: React.FC<SquareProps> = ({
  colour,
  text,
  label,
  image,
  code1,
  code2
}) => {
  const style: CSSProperties = {
    backgroundColor: colour,
    position: 'relative',
  };

  return (
    <div style={style} className="w-full h-full p-4 flex flex-col justify-center items-center">
      {label && (
        <div>
          <BreathText type="h1" color={BreathColours.SOFT_CREAM} className="text-center">
            {label}
          </BreathText>
        </div>
      )}
      {text && (
        <div className="md:px-16 lg:px-48">
          <BreathText
            type="sub1"
            color={BreathColours.SOFT_CREAM}
            className="text-center"
          >
            {text}
          </BreathText>
        </div>
      )}
      {image && (
        <div>
          <img src={image} alt="Soho Creative House client style guide" />
        </div>
      )}
      <div className="absolute bottom-0 right-0 p-4">
        {code1 && (
          <BreathText type="sub1" color={BreathColours.SOFT_BROWN} className="text-right">
            {code1}
          </BreathText>
        )}
        {code2 && (
          <BreathText type="sub1" color={BreathColours.SOFT_BROWN} className="text-right">
            {code2}
          </BreathText>
        )}
      </div>
    </div>
  );
};

export default Square;
