import Contact from "../Contact/Contact";
import BlogCard from "./BlogCard";

function BlogPageHero() {
  return (
    <section className="w-screen-1 h-screen">
      {/* header */}
      <div className="w-full h-3/4 bg-brand-blue relative flex justify-center items-center">
        <div className="w-full h-full absolute">
          <img
            src="../../../images/blogHero.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full h-full relative flex justify-center lg:justify-between items-start lg:items-center lg:p-16 xl:p-32 2xl:p-64">
          <h1 className="lg:hidden text-brand-orange text-5xl md:text-7xl text-center pt-20 md:pt-32">
            JOURNAL DIGEST
          </h1>
          <h1 className="font-Black text-brand-orange relative text-left w-full hidden lg:block text-7xl xl:text-8xl">
            JOURNAL
          </h1>
          <h1 className="font-Black text-brand-orange relative text-right w-full hidden lg:block text-7xl xl:text-8xl">
            DIGEST
          </h1>
        </div>
      </div>

      {/* Square ontpoo of banner */}
      <div className="w-full flex justify-center items-center">
        <div className="w-4/5 xl:w-1/3 h-1/3 bg-brand-blue-light absolute bottom-15  flex justify-center items-center p-4   lg:p-12 xl:p-4 shadow-lg">
          <h5 className=" text-brand-cream text-center leading-[40px] text-2xl md:text-3xl font-Raleway font-light lg:p-4">
            <span className="text-brand-orange font-Black md:text-4xl ">
              BEHIND THE SCREEN <br />
            </span>
            Exploring the Power of Websites & AI
          </h5>
        </div>
      </div>

      {/* blog tiles */}
      <div className="flex justify-center items-center w-[100%] ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-12 p-4 mt-64 justify-center items-center">
          <BlogCard
            title="Revolutionalise Your Business"
            description="The power of an engaging website"
            image="../../../images/Tile1a.png"
            date="February 2024"
            link="/journal-one"
          />
          <BlogCard
            title="The Power of AI"
            description="The power of AI in the digital age"
            image="../../../images/Tile1.png"
            date="September 2021"
            link="/journal-entry"
          />
          <BlogCard
            title="The Power of Websites"
            description="The power of websites in the digital age"
            image="../../../images/Tile1.png"
            date="September 2021"
            link="/journal-entry"
          />
        </div>
      </div>
      <Contact />
    </section>
  );
}

export default BlogPageHero;
