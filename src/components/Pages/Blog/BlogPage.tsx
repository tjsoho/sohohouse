import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button1 from "../../Button/Button1";
import Contact from "../Contact/Contact";

function BlogPage() {
  return (
    <section className="w-screen h-screen">
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
              <span className="text-brand-orange">Revolutionize</span> Your
              Business with a <span className="text-brand-orange">Dynamic</span>{" "}
              Website
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
          </div>
          <div className="flex flex-col w-full h-full justify-start py-8 md:py-16">
            <div className="max-w-[1440px] mx-auto px-4 py-8 lg:py-16">
              <div className="mb-16 ">
                <h2 className="text-left text-brand-blue text-xl md:text-3xl lg:text-4xl mb-4">
                  The Importance of an Engaging Website
                </h2>
                <p className="text-brand-blue">
                  In the dynamic world of digital interaction, where the virtual
                  handshake between businesses and customers happens, the
                  importance of a polished, engaging, and informative website
                  cannot be overstressed. Hey there, I'm Toby J, the maestro
                  behind The Ai Guy, where we turn the ordinary into
                  extraordinary digital experiences. Today, let's dive into why
                  your website should be the heart of your business, not just a
                  footnote.
                </p>
              </div>
              <div className="mb-16">
                <h2 className="text-left text-brand-blue text-xl md:text-3xl lg:text-4xl mb-4">
                  Social Media: The Guest Room in Your Digital Home
                </h2>
                <p className="text-brand-blue">
                  Many businesses mistake social media as the be-all and end-all
                  of their online presence. While platforms like Instagram,
                  Facebook, and Twitter are invaluable tools for engagement and
                  visibility, they are merely rooms within the broader structure
                  of your digital home. Think of social media as the guest
                  room—a place for casual interactions, quick updates, and
                  snapshots of your brand. It's welcoming and important, but
                  it's not where the essence of your brand lives.
                </p>
              </div>
            </div>

              {/* BG BLUE SECTION */}

            <div className="w-screen bg-brand-blue">
              <div className="max-w-[1440px] mx-auto py-16 lg:py-32 px-4">
                <div className="">
                  <h2 className="text-left text-brand-orange text-xl md:text-3xl lg:text-4xl mb-4">
                    A Website That Sings Your Brand
                  </h2>
                  <p className="text-brand-cream mb-8">
                    Creating a website that resonates with your audience is akin
                    to composing a hit song—it needs rhythm, harmony, and a
                    melody that sticks in the mind long after the last note has
                    played. Your website should sing your brand, your values,
                    and the unique essence of who you are. It should be a
                    digital symphony that captivates and engages every visitor,
                    compelling them to explore, interact, and return.
                  </p>
                  <p className="text-brand-cream mb-2 font-bold">
                    <span className="text-brand-orange-light">Amplify</span> Your Story
                  </p>
                  <p className="text-brand-cream mb-8">
                    First, focus on storytelling. Your business isn't just a
                    list of services or products; it's a story unfolding. Use
                    your website to share this narrative—from your humble
                    beginnings to your triumphs and challenges. Let visitors see
                    the heart and soul behind the brand, making your business
                    not just a choice but a character in their own life story.
                  </p>
                  <p className="text-brand-cream mb-2 font-bold">
                    <span className="text-brand-orange-light">Engage</span> Through Design
                  </p>
                  <p className="text-brand-cream mb-8">
                    Next, consider the power of design. Your website's design is
                    the first impression visitors will have of your business. It
                    should reflect your brand's personality, whether that's
                    sleek and professional, warm and welcoming, or bold and
                    innovative. Use visuals, animations, and interactive
                    elements to bring your brand to life and make navigating
                    your site not just intuitive but enjoyable.
                  </p>
                  <p className="text-brand-cream mb-2 font-bold">
                    <span className="text-brand-orange-light">Update</span> Regularly
                  </p>
                  <p className="text-brand-cream mb-8">
                    A great website is never truly "finished." It evolves with
                    your business, with technology, and with the needs of your
                    audience. Regular updates—be it through blog posts, new
                    product launches, or refreshed visuals—keep your site
                    relevant and engaging. They tell your visitors that you're
                    active, attentive, and ahead of the curve.
                  </p>
                  <p className="text-brand-cream mb-2 font-bold">
                    <span className="text-brand-orange-light">Maximize</span> Accessibility
                  </p>
                  <p className="text-brand-cream mb-8">
                    In today's digital age, your website needs to be accessible
                    to everyone, everywhere. This means optimizing for mobile
                    devices, ensuring fast load times, and making navigation
                    simple and intuitive. Remember, a visitor who struggles to
                    engage with your site is a visitor lost.
                  </p>
                  <p className="text-brand-cream mb-2 font-bold">
                    <span className="text-brand-orange-light">Encourage</span> Interaction
                  </p>
                  <p className="text-brand-cream">
                    Finally, make your website a two-way street. Encourage
                    interaction through contact forms, surveys, live chats, and
                    feedback sections. Make it easy for visitors to connect with
                    you, share their thoughts, and feel heard. This not only
                    enhances their experience but also provides you with
                    invaluable insights into your audience's needs and
                    preferences.
                  </p>
                </div>
              </div>
            </div>

            {/* BACK TO WHITE SECTION */}

            <div className="max-w-[1440px] mx-auto px-4 lg:pt-16">
              <div className="my-16">
                <h2 className="text-left text-brand-blue text-xl md:text-3xl lg:text-4xl mb-4">
                  Your Digital Home Awaits
                </h2>
                <p className="text-brand-blue">
                  Your website is more than a digital footprint; it's a home for
                  your brand in the vast online universe. It's where connections
                  are made, stories are shared, and relationships with clients
                  are forged. In the digital landscape where businesses vie for
                  attention, let your website be your masterpiece—a place where
                  potential clients can't help but engage deeply and
                  meaningfully with your brand.
                </p>
              </div>

              <div className="mb-16">
                <h2 className="text-left text-brand-blue text-xl md:text-3xl lg:text-4xl mb-4">
                  Ready to Transform Your Website?
                </h2>
                <p className="text-brand-blue">
                  So, are you ready to transform your website from a mere
                  contact page into a captivating digital home? As The Ai Guy,
                  my speciality is in crafting bespoke websites and AI solutions
                  that not only meet the eye but touch the heart. Let's work
                  together to create a website that not only stands out but
                  stands for something. Because in the end, your business isn't
                  just about transactions; it's about connections.
                </p>
              </div>
              <div>
                <p className="text-brand-blue font-semibold">
                  Ready to make your mark? Let's turn up the volume on your
                  digital presence. Connect with us today, and let's start
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
      </div>
      <div className="bg-brand-cream h-contain">
        <Contact />
      </div>  
    </section>
  );
}

export default BlogPage;
