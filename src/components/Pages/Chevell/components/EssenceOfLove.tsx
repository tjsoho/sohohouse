import ChevellImage3 from "../assets/images/chevell3.jpg";
import ChevellText from "./core/ChevellText";

const EssenceOfLove = () => {
  return (
    <div
      className="h-[100vh] bg-cover lg:bg-cover"
      style={{
        backgroundImage: `url(${ChevellImage3})`,
      }}
    >
      <ChevellText type="h2" color={"white"}>
        The Essence of Love with an Editorial Flair
      </ChevellText>
    </div>
  );
};

export default EssenceOfLove;
