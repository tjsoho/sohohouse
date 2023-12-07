import { ChevellColors } from "../constants/ChevellColors";
import ChevellText from "./core/ChevellText";
import ChevellImage2 from "../assets/images/chevell2.jpg";

const InherentlyStylish = () => {
  return (
    <div
      style={{ backgroundColor: ChevellColors.CREAM_WHITE }}
      className="flex sm:flex-row flex-col items-center"
    >
      <div className="flex-1">
        <ChevellText type="h2" color={ChevellColors.SOFT_BLACK} className="px-8 lg:px-16 mt-8">
          Inherently Stylish
        </ChevellText>
        <div
          className="w-[100px] h-[8px] m-8 lg:ml-16"
          style={{
            backgroundColor: ChevellColors.SOFT_BLACK,
          }}
        ></div>
        <ChevellText type="sub1" color={ChevellColors.SOFT_BLACK} className="px-8 lg:px-16 pb-8">
          A hand-picked team of photographers and cinematographers bound by the
          inherent qualities and personalities that make Chevell an adored
          choice. <br /> <br /> We mirrored this spirit in our design, creating
          an inviting space where couples can explore Chevell's soulful and
          timeless photography.
        </ChevellText>
      </div>
      <div className="flex flex-row  justify-end md:object-right md:w-1/2 lg:w-1/3">
        <img
          src={ChevellImage2}
          alt="Wedding dress"
          className="h-full object-cover lg:object-right"
        />
      </div>
    </div>
  );
};

export default InherentlyStylish;
