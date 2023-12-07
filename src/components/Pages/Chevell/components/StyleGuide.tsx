import img1 from "../assets/images/style1.svg";
import img2 from "../assets/images/style2.svg";
import style from "../assets/images/styleGLG.svg";
import { ChevellColors } from "../constants/ChevellColors";
import ChevellText from "./core/ChevellText";

function StyleGuide() {
  return (
    <div>
      {/* MOBILE */}
      <div className="flex md:hidden flex-col w-full h-full py-8">
        <div className="flex justify-center items-center">
          <img src={img1} alt="" />
        </div>
        <ChevellText
          type="h2"
          color={ChevellColors.SOFT_BLACK}
          className="p-8 "
        >
          Style Guide
        </ChevellText>
        <div
          className="w-[100px] h-[8px] flex flex-col justify-start items-start ml-8"
          style={{
            backgroundColor: ChevellColors.SOFT_BLACK,
          }}
        ></div>
        <ChevellText
          type="sub1"
          color={ChevellColors.SOFT_BLACK}
          className="p-8 lg:px-16 pb-8"
        >
          A design system that represents the inherrent beauty and elegance of
          CHEVELL photography.
        </ChevellText>
        <div className="flex justify-center items-center mb-4">
          <img src={img2} alt="" />
        </div>
      </div>
      {/*  */}
      {/*  */}
      {/*  */}
      {/* Medium and Up */}
      {/*  */}
      {/*  */}
      {/*  */}
      <div className="hidden md:flex flex-col lg:flex-row w-full">
        {/* Imag */}
        <div className="w-3/4 lg:w-1/2">
          <div className="flex justify-center items-center p-16">
            <img src={style} alt="" />
          </div>
        </div>

        {/*  */}
        {/* CONTENT */}
        {/*  */}
        <div className="flex flex-col w-full lg:w-1/2 justify-end items-end">
          <ChevellText
            type="h2"
            color={ChevellColors.SOFT_BLACK}
            className="p-8 mr-16 text-right"
          >
            Style Guide
          </ChevellText>
          <div
            className="w-[100px] h-[8px] flex flex-col justify-end items-end mr-24"
            style={{
              backgroundColor: ChevellColors.SOFT_BLACK,
            }}
          ></div>
          <ChevellText
            type="sub1"
            color={ChevellColors.SOFT_BLACK}
            className="pt-8 px-24 lg:pr-24 md:pb-16 lg:pb-28 text-right"
          >
            A design system that represents the inherrent beauty and elegance of
            CHEVELL photography.
          </ChevellText>
        </div>
      </div>
    </div>
  );
}

export default StyleGuide;
