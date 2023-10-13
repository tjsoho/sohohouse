import Logo1 from "../Logo/Logo1";
import MenuIcon from "./MenuIcon";

export default function MenuBar() {
  return (
    <div className="h-full w-full bg-brand-camel flex justify-between items-center px-[25px]">
      <div className="flex items-center">
        <Logo1 />
      </div>
      <div className="flex items-center">
        <MenuIcon />
      </div>
    </div>
  );
}
