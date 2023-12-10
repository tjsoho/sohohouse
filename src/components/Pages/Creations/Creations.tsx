import Contact from "../Contact/Contact";
import PortfolioCard from "./components/PortfolioCard";
import portfolioData from "./components/portfolioData";

function Creations() {
  return (
    <div className="w-full h-full flex flex-col p-8 lg:px-32 bg-brand-cream py-32">
      
        <h2 className="leading-none text-brand-blue font-bold text-4xl md:text-7xl lg:text-9xl text-left">
          Our Creations
        </h2>
        <p className="text-brand-blue text-[20px] md:text-[28px] lg:text-[32px] xl:text-[35px] 2xl:text-[35px] font-Raleway font-light lg:font-thin leading-1 tracking-widest text-left mb-16 md:mb-32">
          Awesome people doing awesome things.
        </p>
      

      {/* Map through portfolio card */}
      <div className="portfolio-cards flex flex-wrap ">
        {portfolioData.map((item, index) => (
          <div
            key={index}
            className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0 flex flex-col justify-center items-center"
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
      <Contact />
    </div>
  );
}

export default Creations;
