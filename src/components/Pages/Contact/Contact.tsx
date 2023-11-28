import Creations from "./Components/Creations";
import LetsChat from "./Components/LetsChat";
import Process from "./Components/Process";
import Start from "./Components/Start";

function Contact() {
  return (
    <div className="bg-brand-cream mx-auto px-5 py-32 h-screen flex flex-col justify-between items-start">
      {/* Ensure this div takes full height */}
      <div className=" ">
        <Start />
      </div>
      <div className="  my-16">
        <LetsChat />
      </div>
      <div className="flex flex-col md:flex-row w-full md:justify-evenly">
        <div className="  my-16 md:my-4">
          <Process />
        </div>
        <div className="  mb-16 md:my-4">
          <Creations />
        </div>
      </div>
    </div>
  );
}

export default Contact;
