import { ChevellColors } from "../constants/ChevellColors";
import ChevellText from "./core/ChevellText";
import ChevellImage2 from "../assets/images/chevell2.jpg";

const InherentlyStylish = () => {
  return (
    <div
      style={{ backgroundColor: ChevellColors.CREAM_WHITE, height: "100vh" }}
      className="flex sm:flex-row flex-col items-center"
    >
      <div className="flex-1 p-[10%]">
        <ChevellText type="h2" color={ChevellColors.SOFT_BLACK}>
          Inherently Stylish
        </ChevellText>
        <div
          className="w-[100px] h-[8px] my-10"
          style={{
            backgroundColor: ChevellColors.SOFT_BLACK,
          }}
        ></div>
        <ChevellText type="sub1" color={ChevellColors.SOFT_BLACK}>
          A hand-picked team of photographers and cinematographers bound by the
          inherent qualities and personalities that make Chevell an adored
          choice. <br /> <br /> We mirrored this spirit in our design, creating
          an inviting space where couples can explore Chevell's soulful and
          timeless photography.
        </ChevellText>
      </div>
      <div className="flex flex-row flex-1 justify-end md:object-right">
        <img
          src={ChevellImage2}
          alt="Wedding dress"
          className="h-screen w-auto object-cover lg:object-right"
        />
      </div>
    </div>
  );
};

export default InherentlyStylish;
