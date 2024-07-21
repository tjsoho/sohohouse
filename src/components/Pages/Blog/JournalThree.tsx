import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button1 from "../../Button/Button1";
import Contact from "../Contact/Contact";
import { Button } from "@mui/material";

function JournalThree() {
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
            <h1 className="text-center text-brand-blue text-3xl md:text-5xl lg:text-6xl">
              <span className="text-brand-orange">Simplify </span> Your Brand
              Messaging
              {/* Simpify Your <span className="text-brand-orange">Dynamic</span>{" "}
              Website */}
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
            <div className="md:flex w-full  ">
              <div className="w-full h-full flex justify-center lg:mt-8 p-8 xl:px-16 ">
                <img
                  src="../../../images/mHighway.png"
                  alt=""
                  className="lg:p-0 lg:w-4/5 auto object-cover rounded"
                />
              </div>
              {/* <div className="w-1/2 h-full flex justify-center lg:mt-8 pt-1">
                <img
                  src="../../../images/blog1aa.png"
                  alt=""
                  className="p-8 lg:p-0 lg:w-4/5 auto object-cover "
                />
              </div> */}
            </div>
            {/* <div className="w-full h-full flex justify-center lg:mt-8 md:hidden">
              <img
                src="../../../images/blog1a.png"
                alt=""
                className="p-8 lg:p-0 lg:w-1/3 auto object-cover "
              />
            </div> */}
          </div>
          <div className="flex flex-col w-full h-full justify-start py-8 md:py-16">
            <div className="max-w-[1400px] mx-auto px-4 lg:px-16 2xl:px-4 py-8 lg:pt-16">
              <div className="mb-16 ">
                <h2 className="text-left text-brand-blue text-xl md:text-3xl lg:text-4xl mb-4">
                  Streamline Your{" "}
                  <span className="text-brand-orange">Brand Messaging</span>
                </h2>
                <p className="text-brand-blue">
                  In today's fast-paced digital world, managing consistent brand
                  messaging can feel like juggling flaming torches. Social
                  media, blog posts, email marketing—it’s enough to make
                  anyone's head spin. But what if I told you there’s a way to
                  tie them all together seamlessly, without doubling your
                  workload? Let’s unpack this nifty trick for streamlined
                  content creation that will save you time and keep your
                  messaging on point.
                </p>
              </div>
              <div className="mb-16">
                <h2 className="text-left text-brand-blue text-xl md:text-3xl lg:text-4xl mb-4">
                  Content{" "}
                  <span className="text-brand-orange">Overload</span>
                </h2>
                <p className="text-brand-blue">
                  Imagine you need to push out fresh content for your brand. You
                  draft a blog post for your website, brainstorm engaging social
                  media content, and then sit down to craft an email newsletter.
                  Before you know it, you have three separate content pieces,
                  each requiring unique attention, strategies, and valuable time
                  you may not have. It’s like managing three highways, all
                  leading to the same destination, but with different speed
                  limits, toll booths, and traffic rules.
                </p>
              </div>
            </div>
            <div className="flex justify-center h-contain">
              <div className="w-full h-auto lg:w-1/3  mb-16 px-8">
                <img
                  src="../../../images/frustrated.png"
                  alt=""
                  className="w-full auto object-cover rounded"
                />
              </div>
            </div>

            {/* BG BLUE SECTION */}

            <div className="w-full bg-brand-blue">
              <div className=" py-16 lg:py-32 px-4 lg:px-16 2xl:px-4 max-w-[1440px] mx-auto">
                <div className="">
                  <h2 className="text-left text-brand-orange text-xl md:text-3xl lg:text-4xl mb-4">
                    <span className="text-brand-cream">
                      The Unified Content Highway:
                    </span>{" "}
                    One Idea, Multiple Platforms
                  </h2>
                  <p className="text-brand-cream mb-8">
                    Introducing the concept of the unified content highway.
                    Instead of brainstorming three distinct blocks of content,
                    start with one cornerstone piece—like a detailed blog post.
                    This blog post becomes your main highway. From there, you
                    can extract snippets and insights to create social media
                    posts and email campaigns, effectively giving your audience
                    consistent messaging across platforms while minimising your
                    workload.
                  </p>

                  {/* Content Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-12 p-4 ">
                    <div>
                      <p className="text-brand-cream mb-2 font-bold">
                        <span className="text-brand-orange-light">Step 1</span>{" "}
                        Craft a Killer Blog Post
                      </p>
                      <p className="text-brand-cream mb-8 text-justify">
                        Start with a robust blog post packed with valuable
                        insights or tips related to your business. This will be
                        your central piece of content, your go-to highway. Make
                        sure it’s SEO-friendly by integrating relevant keywords
                        naturally throughout the text.
                      </p>
                    </div>
                    <div>
                      <p className="text-brand-cream mb-2 font-bold">
                        <span className="text-brand-orange-light">Step 2</span>{" "}
                        Break it Down for Social Media
                      </p>
                      <p className="text-brand-cream mb-8 text-justify">
                        From your blog post, identify key quotes, statistics, or
                        engaging points that can be turned into social media
                        content. This could be a bold statement from your post,
                        a point that encourages discussion, or even a quick
                        infographic. Voila! You’ve got several social media
                        posts ready to go. To stay consistent, ensure all
                        platforms come back to your main message, leading your
                        followers back to the blog post for more detail.
                      </p>
                    </div>
                    <div>
                      <p className="text-brand-cream mb-2 font-bold">
                        <span className="text-brand-orange-light">Step 3</span>{" "}
                        Expand into Email Marketing
                      </p>
                      <p className="text-brand-cream mb-8 text-justify">
                        Next, draft an email newsletter summarising the blog
                        post. Highlight the most significant takeaways,
                        including a call-to-action that directs readers to your
                        blog for further reading. This not only drives traffic
                        back to your website but also maintains a cohesive brand
                        voice in your email marketing.
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
                    </div> */}

                    {/* <div>
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
              <div className="my-16 max-w-[1440px] mx-auto flex items-center justify-center flex-col">
                <div className="flex justify-center items-center w-full lg:w-1/2">
                  <img
                    src="../../../images/happy.png"
                    alt=""
                    className="w-full auto object-cover rounded"
                  />
                </div>
                <h2 className="text-left text-brand-blue text-xl md:text-3xl lg:text-4xl mb-4 w-full mt-32">
                  The Benefits of{" "}
                  <span className="text-brand-orange">Unified</span> Content
                  Creation
                </h2>
                <ul className="text-brand-blue font-Raleway text-[20px] flex flex-col list-disc list-inside leading-[28px]">
                  <li>
                    <strong>Consistency:</strong> Your audience receives the
                    same core message across all platforms, reinforcing your
                    brand identity and ensuring a clear, cohesive narrative.
                  </li>
                  <li>
                    <strong>Efficiency:</strong> Creating content for one blog
                    post is significantly less overwhelming than tackling
                    separate content ideas for social media and email marketing.
                  </li>
                  <li>
                    <strong>SEO Boost:</strong> Driving traffic back to a single
                    blog post can help improve your SEO rankings. More eyeballs
                    on one central piece of content translate to better metrics
                    and search engine love.
                  </li>
                  <li>
                    <strong>Simplified Analytics:</strong> Tracking the
                    performance of one primary piece of content across various
                    platforms makes it easier to analyse customer engagement and
                    refine your strategy accordingly.
                  </li>
                </ul>
              </div>

              <div className="mb-16 ">
                <h2 className="text-left text-brand-blue text-xl md:text-3xl lg:text-4xl mb-4 max-w-[1440px] mx-auto">
                  Final Thoughts <span className="text-brand-orange"></span>{" "}
                </h2>
                <div className="2xl:px-[218px]">
                  <p className="text-brand-blue ">
                    By adopting a streamlined content creation strategy, you
                    transition from juggling flaming torches to effortlessly
                    gliding down a well-paved highway. Start with a single,
                    high-quality blog post, and let its rich content fuel your
                    social media posts and email campaigns. This not only takes
                    the pressure off creating fresh content from scratch but
                    also ensures your brand message is consistent, captivating,
                    and continually driving your audience toward the desired
                    destination.
                  </p>
                  <div>
                    <p className="text-brand-blue font-semibold mt-8">
                      Ready to streamline your content? Let's turn up the volume
                      on your digital presence. Connect today, and let's start
                      composing your brand's digital symphony.
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
            <div className="w-full flex justify-center underline text-brand-blue">
              <Link to="/journal">
                <p className="text-brand-blue my-8 cursor-pointer">
                  Back To Journal Page
                </p>
              </Link>
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

export default JournalThree;
