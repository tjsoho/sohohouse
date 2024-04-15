import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button1 from "../../Button/Button1";
import Contact from "../Contact/Contact";

function JournalTwo() {
  return (
    <section className="w-full h-screen">
      {/* header */}
      <div className="w-full h-3/4 bg-brand-blue relative flex justify-center items-center">
        <div className="w-full h-full absolute">
          <img
            src="../../../images/blogHero.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full h-full relative flex justify-center lg:justify-between items-start lg:items-center lg:p-16 xl:p-32 2xl:p-72 ">
          <h1 className="lg:hidden text-brand-orange text-5xl md:text-7xl text-center pt-20 md:pt-32">
            JOURNAL ENTRY
          </h1>
          <h1 className="font-Black text-brand-orange relative text-left w-full hidden lg:block text-7xl xl:text-8xl">
            JOURNAL
          </h1>
          <h1 className="font-Black text-brand-orange relative text-right w-full hidden lg:block text-7xl xl:text-8xl">
            ENTRY
          </h1>
        </div>
      </div>
      <div className="flex w-full h-contain justify-center py-8 md:py-16 lg:pt-32">
        <div>
          <div className="max-w-[1440px] mx-auto">
            <h1 className="text-center text-brand-blue text-3xl md:text-5xl lg:text-6xl px-2">
              <span className="text-brand-orange">Storytelling</span> Through Scroll: Compelling<span className="text-brand-orange"> Long-Form</span>{" "}
              Web Pages
            </h1>
            <div className="w-full flex justify-center py-8">
              <motion.div
                className="w-2/12 flex justify-center border-2"
                animate={{
                  borderColor: [
                    "#FC7643", // Example for --brand-orange
                    "#FF9268", // Example for --brand-orange-light
                    "#f1f1f1", // Example for --brand-orange-light
                    "#FF9268", // Example for --brand-orange-light
                    "#FC7643", // Example for --brand-orange
                    // "#263559", // Example for --brand-blue-light
                    // "#FC7643", // Loop back to start for continuous animation
                  ],
                }}
                transition={{
                  duration: 5, // Duration for the full cycle of colors
                  ease: "linear", // Use a linear easing for consistent transition speed
                  repeat: Infinity, // Ensures the animation loops indefinitely
                  // repeatType: "loop" // Uncomment this line if you're using an older version or for specific effects
                }}
                style={{ borderWidth: "2px" }} // Ensure border width is applied
              />
            </div>
            <div className="md:flex w-full hidden ">
              <div className="w-1/2 h-full flex justify-center lg:mt-8">
                <img
                  src="../../../images/blog1a.png"
                  alt=""
                  className="p-8 lg:p-0 lg:w-4/5 auto object-cover "
                />
              </div>
              <div className="w-1/2 h-full flex justify-center lg:mt-8 pt-1">
                <img
                  src="../../../images/blog1aa.png"
                  alt=""
                  className="p-8 lg:p-0 lg:w-4/5 auto object-cover "
                />
              </div>
            </div>
            <div className="w-full h-full flex justify-center lg:mt-8 md:hidden">
              <img
                src="../../../images/blog1a.png"
                alt=""
                className="p-8 lg:p-0 lg:w-1/3 auto object-cover "
              />
            </div>
          </div>
          <div className="flex flex-col w-full h-full justify-start py-8 md:py-16">
            <div className="max-w-[1400px] mx-auto px-4 lg:px-16 2xl:px-4 py-8 lg:pt-16">
              <div className="mb-16 ">
                <h2 className="text-left text-brand-blue text-xl md:text-3xl lg:text-4xl mb-4">
                  The Art to  <span className="text-brand-orange">Story Telling</span> Through Scroll
                </h2>
                <p className="text-brand-blue">
                In the digital age, where attention spans are dwindling, capturing and maintaining your audience's attention is crucial. Long-form web pages offer a unique opportunity to engage your visitors, tell your brand's story, and drive conversions. By mastering the art of storytelling through scroll, you can create compelling long-form web pages that captivate your audience from top to bottom.
                </p>
              </div>
              <div className="mb-16">
                <h2 className="text-left text-brand-blue text-xl md:text-3xl lg:text-4xl mb-4">
                  The Power of <span className="text-brand-orange">Narrative </span> in Web Design
                </h2>
                <p className="text-brand-blue">
                Great storytelling has the power to evoke emotions, build connections, and drive action. When it comes to web design, weaving a narrative throughout your long-form pages can transform a mundane browsing experience into an immersive journey for your visitors. Whether you're introducing your brand, showcasing your products, or sharing testimonials, every element on the page should contribute to the overarching story you're telling.
                </p>
              </div>
              </div>
              <div className="flex justify-center h-contain">
              <div className="w-full h-contain lg:h-1/3 lg:w-1/3  mb-16 lg:mb-16 ">
                
                  <img
                    src="../../../images/blog1c.png"
                    alt=""
                    className="w-full h-auto object-contain "
                  />
                </div>
            </div>

            {/* BG BLUE SECTION */}

            <div className="w-full bg-brand-blue">
              <div className=" py-16 lg:py-32 px-4 lg:px-16 2xl:px-4 max-w-[1440px] mx-auto">
                <div className="">
                  <h2 className="text-left text-brand-orange text-xl md:text-3xl lg:text-4xl mb-4">
                  <span className="text-brand-cream">Tips for Crafting Compelling</span> Long-Form Web Pages
                  </h2>
                  {/* <p className="text-brand-cream mb-8">
                    Creating a website that resonates with your audience is akin
                    to composing a hit song—it needs rhythm, harmony, and a
                    melody that sticks in the mind long after the last note has
                    played. Your website should sing your brand, your values,
                    and the unique essence of who you are. It should be a
                    digital symphony that captivates and engages every visitor,
                    compelling them to explore, interact, and return.
                  </p> */}

                  {/* Content Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-12 p-4 ">
                    <div>
                      <p className="text-brand-cream mb-2 font-bold">1.
                        <span className="text-brand-orange-light"> Start Strong </span>{" "}
                        and Hook Your Audience
                      </p>
                      <p className="text-brand-cream mb-8 text-justify">
                      The beginning of your long-form web page is your chance to make a lasting impression. Start strong with a captivating headline, an engaging introduction, or a compelling visual that draws visitors in. Consider using multimedia elements like videos or animations to create an immersive experience right from the start. Remember, the goal is to hook your audience and entice them to keep scrolling.
                      </p>
                    </div>
                    <div>
                      <p className="text-brand-cream mb-2 font-bold">2. 
                        <span className="text-brand-orange-light"> Interactive Elements</span>{" "}
                        for Engagement
                      </p>
                      <p className="text-brand-cream mb-8 text-justify">
                      Interactive elements not only enhance user experience but also encourage visitors to actively participate in the storytelling process. Consider adding interactive features like quizzes, surveys, sliders, or social media feeds to engage your audience and keep them invested in the content. These elements can break the monotony of scrolling and provide opportunities for visitors to interact with your brand in a memorable way.
                      </p>
                    </div>
                    <div>
                      <p className="text-brand-cream mb-2 font-bold">3.
                        <span className="text-brand-orange-light"> Guide the Reader</span>{" "}
                        with Visual Heirarchy 
                      </p>
                      <p className="text-brand-cream mb-8 text-justify">
                        Next, consider the power of design. Your website's
                        design is the first impression visitors will have of
                        your business. It should reflect your brand's
                        personality, whether that's sleek and professional, warm
                        and welcoming, or bold and innovative. Use visuals,
                        animations, and interactive elements to bring your brand
                        to life and make navigating your site not just intuitive
                        but enjoyable.
                      </p>
                    </div>
                    {/* <div>
                      <p className="text-brand-cream mb-2 font-bold">
                        <span className="text-brand-orange-light">
                          Maximize
                        </span>{" "}
                        Accessibility
                      </p>
                      <p className="text-brand-cream mb-8 text-justify">
                        In today's digital age, your website needs to be
                        accessible to everyone, everywhere. This means
                        optimizing for mobile devices, ensuring fast load times,
                        and making navigation simple and intuitive. Remember, a
                        visitor who struggles to engage with your site is a
                        visitor lost.
                      </p>
                    </div>
                    <div className="flex justify-center items-center">
                      <img
                        src="../../../images/blog1d.png"
                        alt=""
                        className="w-full auto object-cover "
                      />
                    </div>
                    <div>
                      <p className="text-brand-cream mb-2 font-bold">
                        <span className="text-brand-orange-light">
                          Encourage
                        </span>{" "}
                        Interaction
                      </p>
                      <p className="text-brand-cream text-justify">
                        Finally, make your website a two-way street. Encourage
                        interaction through contact forms, surveys, live chats,
                        and feedback sections. Make it easy for visitors to
                        connect with you, share their thoughts, and feel heard.
                        This not only enhances their experience but also
                        provides you with invaluable insights into your
                        audience's needs and preferences.
                      </p>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>

            {/* BACK TO WHITE SECTION */}

            <div className=" px-4 lg:pt-16 lg:px-16 2xl:px-4 ">
              <div className="my-16 max-w-[1440px] mx-auto">
                <h2 className="text-left text-brand-blue text-xl md:text-3xl lg:text-4xl mb-4">
                  It's Time to <span className="text-brand-orange">Engage, Entertain</span> & Convert
                </h2>
                <p className="text-brand-blue">
                Crafting compelling long-form web pages that tell a story through scroll requires a strategic blend of creativity, design, and user experience. By leveraging the power of narrative, guiding your audience with visual hierarchy, and incorporating interactive elements, you can create a captivating digital experience that resonates with visitors and drives conversions. Remember, the story doesn't end at the bottom of the page—it's just the beginning of a lasting relationship with your audience.
                </p>
              </div>

              <div className="mb-16 ">
                <h2 className="text-left text-brand-blue text-xl md:text-3xl lg:text-4xl mb-4 max-w-[1440px] mx-auto">
                  Ready to <span className="text-brand-orange">Transform</span> Your Website?
                </h2>
                <div className="2xl:px-[218px]">
                  <p className="text-brand-blue ">
                    So, are you ready to embrace the art of storytelling through scroll? Watch as your long-form web pages become a powerful tool for engaging, entertaining, and converting visitors into loyal customers.
                  </p>
                  <div>
                    <p className="text-brand-blue font-semibold mt-8">
                      Ready to make your mark? Let's turn up the volume on your
                      digital presence. Connect today, and let's start
                      transforming your website visitors into new clients.
                    </p>
                  </div>
                  <Link to="/contactme">
                    <Button1
                      label="LET'S DO IT"
                      className="text-brand-blue my-8"
                      color="light"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-brand-cream h-contain">
        <Contact />
      </div>
    </section>
  );
}

export default JournalTwo;
