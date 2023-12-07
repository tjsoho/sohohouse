import HeaderResponsive from "./HeaderResponsive";
import logo from "../assets/images/logo.svg";

function BreathHeader() {
  return (
    <div className="h-full w-full flex ">
      <HeaderResponsive>
        <div className="flex flex-col justify-center items-center w-full h-full p-4">
          <img src={logo} alt="SoHo Creative House Clietn Logo" />
        </div>
      </HeaderResponsive>
    </div>
  );
}

export default BreathHeader;
