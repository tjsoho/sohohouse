import Contact from "../Contact/Contact";
import PortfolioCard from "./components/PortfolioCard";
import portfolioData from "./components/portfolioData";
import { SlideReveal } from "../../Animations/SlideReveal";
import Work from "../Home/Work/Work";

function Creations() {
  return (
    <div>
      <div className="bg-brand-blue">
        <div className="max-w-[1440px] mx-auto h-full bg-brand-blue ">
          <div className="flex flex-col p-8 lg:px-32 py-32">
            <h2 className="leading-none text-brand-orange font-bold text-[36px] md:text-7xl lg:text-9xl text-left">
              Web Creations
            </h2>
            <SlideReveal>
              <p className="text-brand-orange-light text-[20px] md:text-[28px] lg:text-[32px] xl:text-[35px] 2xl:text-[35px] font-Raleway font-light lg:font-thin leading-1 tracking-widest text-left mb-16 md:mb-32">
                No Ai! Just a digital pen and a lot of fun.
              </p>
            </SlideReveal>

            {/* Map through portfolio card */}
            <div className="portfolio-cards flex flex-wrap ">
              <Work />
              {portfolioData.map((item, index) => (
                <div
                  key={index}
                  className="w-full md:w-1/2 lg:w-1/3 px-2 mb-8 lg:mb-0 flex flex-col justify-center items-center"
                >
                  <PortfolioCard
                    image={item.image}
                    title={item.title}
                    subTitle={item.subTitle}
                    link={item.link}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full bg-brand-cream">
        <Contact />
      </div>
    </div>
  );
}

export default Creations;
