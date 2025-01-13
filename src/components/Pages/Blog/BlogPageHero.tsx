import Contact from "../Contact/Contact";
import BlogCard from "./BlogCard";

function BlogPageHero() {
  return (
    <section className="w-screen-1 h-screen ">
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
     

      {/* blog tiles */}
      <div className="flex justify-center items-center h-contain max-w-[1440px] mx-auto">
        
         <div className="grid grid-cols-1  md:grid-cols-3  gap-12 p-4  justify-center items-center py-8 mb-8 ">
          
           <BlogCard
             title="5 Reasons Your Business Needs a Blog"
             description="And Why You Should Be Writing It!"
             image="../../../images/team.jpg"
             link="/5-reasons-your-business-needs-a-blog"
           />
           <BlogCard
            title="The Instagram-Website Synergy"
            description="How to Make Them Work Together Seamlessly"
            image="../../../images/toby.jpg"
            link="/the-instagram-website-synergy"
          />
            <BlogCard
              title="The High-Converting Homepage"
              description="The digital home of your business"
              image="../../../images/toby2.jpg"
              link="/the-high-converting-homepage"
            />
           <BlogCard
            title="Streamlined Brand Messaging"
            description="Simplifying your brand message"
            image="../../../images/mHighway.png"
            link="/streamlined-brand-messaging"
          />
          <BlogCard
            title="Revolutionalise Your Business"
            description="The power of an engaging website"
            image="../../../images/Tile1a.png"
            link="/power-of-an-engaging-website"
          />
           {/* <BlogCard
            title="The Power of AI"
            description="The power of AI in the digital age"
            image="../../../images/Tile1a.png"
            date="September 2021"
            link="/journal-entry"
          /> */}
          
        </div> 
      </div>
      <Contact />
    </section>
  );
}

export default BlogPageHero;