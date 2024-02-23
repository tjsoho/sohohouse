import BookNow from "./Components/BookNow";
import Creations from "./Components/Creations";

import Process from "./Components/Process";
import ReadyAi from "./Components/ReadyAi";

function ContactAi() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="bg-brand-cream px-5 py-32 h-screen flex flex-col lg:flex-row  items-start md:items-center">
        {/* Col 1 */}
        <div className="w-full lg:w-1/2 lg:mt-32">
          <div className="md:mb-16 ">
            <ReadyAi />
          </div>
          <div className="my-16 ">
            <BookNow />
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
    </div>
  );
}

export default ContactAi;
