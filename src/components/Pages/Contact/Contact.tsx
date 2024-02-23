import { Link } from "react-router-dom";
import Creations from "./Components/Creations";
import LetsChat from "./Components/LetsChat";
import Process from "./Components/Process";
import Socials from "./Components/Socials";
import Start from "./Components/Start";

function Contact() {
  return (
    <div className="max-w-[1440px] mx-auto">
    <div className="bg-brand-cream mx-auto px-5 pb-4 pt-24 lg:py-8 h-screen flex flex-col justify-between">
      <div className="flex-grow flex flex-col lg:flex-row  items-start md:items-center w-full">
        {/* Col 1 */}
        <div className="w-full lg:w-1/2 lg:mt-32">
          <div className="md:mb-16 ">
            <Start />
          </div>
          <div className="mt-16 md:my-16 ">
            <LetsChat />
          </div>
        </div>

        {/* Col 2 */}
        <div className="w-full lg:w-1/2 lg:pl-16">
          <div className="flex flex-col md:flex-row lg:flex-col md:justify-evenly items-center w-full">
            <div className="my-16 md:my-4 lg:my-20">
              <Process />
            </div>
            <div className="mb-4 md:my-4 lg:my-20">
              <Creations />
            </div>
          </div>
        </div>
      </div>

       {/* Footer */}
<div className="flex justify-center items-center w-full bg-brand-cream">
  <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left w-full px-5 md:px-10">
    <p className="text-[16px] text-zinc-400">
      © SoHo Creative House Pty Ltd
    </p>
    <div className="w-auto mx-16 my-4 md:my-0">
      <Socials />
    </div>
    <Link to="/privacy-policy">
      <p className="text-[16px] text-zinc-400">Privacy Policy</p>
    </Link>
  </div>
</div>
    </div>
    </div>
  );
}

export default Contact;
