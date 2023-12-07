import grace from "../assets/images/graceLG.jpg";
import { ChevellColors } from "../constants/ChevellColors";
import ChevellText from "./core/ChevellText";
import graceSM from "../assets/images/graceSM.png";
import graceMD from "../assets/images/graceMD.jpg";

const EssenceOfLove = () => {
  // Detect screen size (for simplicity, using window width)
  const isMediumScreen = window.innerWidth >= 368 && window.innerWidth < 1024;

  return (
    <div>
      {/* SMALL/MEDIUM SCREENS */}
      <div
        style={{ backgroundColor: ChevellColors.SOFT_BROWN }}
        className="h-contain w-full lg:hidden "
      >
        <ChevellText
          type="h2"
          color={"white"}
          className="text-left md:text-center p-8 pt-16"
        >
          The Essence of Love with an Editorial Flair
        </ChevellText>
        <div
          className="w-[100px] h-[8px] flex justify-center ml-8 md:mx-auto"
          style={{
            backgroundColor: ChevellColors.CREAM_WHITE,
          }}
        ></div>
        <ChevellText
          type="sub1"
          color="white"
          className="text-left md:text-center text-brand-cream p-8 mb-8"
        >
          Inspired by the look of love and the stylish pages of Vogue. We
          brought Chevell's vision to life with a website that reflects their
          inherently stylish, romantic, and timeless aesthetic.
        </ChevellText>
        <img src={isMediumScreen ? graceMD : graceSM} alt="" />
      </div>

      {/* LARGE SCREENS */}

      <div
        style={{ backgroundImage: `url(${grace})` }}
        className="h-screen w-full hidden lg:block relative"
      
      >

            {/* Overlay with semi-transparent background */}
            <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.3)', // Semi-transparent overlay
          }}
        ></div>


        <div style={{ position: 'relative', zIndex: 1 }} className="h-full flex flex-col justify-center items-end">
          <ChevellText
            type="h2"
            color={"#FFE9E2"}
            className="text-right mx-16"
          >
            The Essence of Love <br /> with an Editorial Flair
          </ChevellText>
          <div
            className="w-[100px] h-[8px] m-16"
            style={{
              backgroundColor: ChevellColors.CREAM_WHITE,
            }}
          ></div>
          <ChevellText
            type="sub1"
            color="white"
            className="text-right text-[#FFE9E2] pr-16 w-1/3"
          >
            Inspired by the look of love and the stylish pages of Vogue. We
            brought Chevell's vision to life with a website that reflects their
            inherently stylish, romantic, and timeless aesthetic.
          </ChevellText>
        </div>
      </div>
    </div>
  );
};

export default EssenceOfLove;
