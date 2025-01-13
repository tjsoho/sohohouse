import { Reveal } from "../../Animations/Reveal";
import { Link } from "react-router-dom";
import Contact from "../Contact/Contact";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function JournalFive() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const TemplateModal = () => (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            className="bg-black p-8 rounded-lg w-[90%] md:w-[60%] h-[90vh] overflow-y-auto mx-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-6 text-brand-cream bg-black max-h-full">
              <h3 className="text-2xl font-Black text-brand-orange mb-6 top-0 bg-black pb-4">
                High-Converting Homepage Template
              </h3>

              {/* Hero Section */}
              <div className="border-2 border-brand-orange p-4 rounded-lg bg-black">
                <h4 className="text-brand-orange font-Black mb-2">
                  HERO SECTION
                </h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-brand-blue p-3 rounded">
                    <p className="text-brand-orange-light">Headline</p>
                    <p>Main value proposition</p>
                  </div>
                  <div className="bg-brand-blue p-3 rounded">
                    <p className="text-brand-orange-light">Hero Image</p>
                    <p>High-quality visual</p>
                  </div>
                </div>
              </div>

              {/* Introduction */}
              <div className="border-2 border-brand-orange p-4 rounded-lg bg-black">
                <h4 className="text-brand-orange font-Black mb-2">
                  INTRODUCTION
                </h4>
                <div className="bg-brand-blue p-3 rounded">
                  <p>Brief, compelling problem-solution statement</p>
                </div>
              </div>

              {/* Main Content Blocks */}
              <div className="border-2 border-brand-orange p-4 rounded-lg bg-black">
                <h4 className="text-brand-orange font-Black mb-2">
                  MAIN CONTENT
                </h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-brand-blue p-3 rounded">
                    <p className="text-brand-orange-light">Content Block 1</p>
                    <p>Primary service/product</p>
                  </div>
                  <div className="bg-brand-blue p-3 rounded">
                    <p className="text-brand-orange-light">Content Block 2</p>
                    <p>Secondary service/product</p>
                  </div>
                </div>
              </div>

              {/* About Me Section */}
              <div className="border-2 border-brand-orange p-4 rounded-lg bg-black">
                <h4 className="text-brand-orange font-Black mb-2">
                  ABOUT ME MINI
                </h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-brand-blue p-3 rounded">
                    <p className="text-brand-orange-light">Personal Image</p>
                    <p>Authentic photo of you</p>
                  </div>
                  <div className="bg-brand-blue p-3 rounded">
                    <p className="text-brand-orange-light">Brief Bio</p>
                    <p>Quick personal connection + expertise highlight</p>
                  </div>
                </div>
              </div>

              {/* Core Promise */}
              <div className="border-2 border-brand-orange p-4 rounded-lg bg-black">
                <h4 className="text-brand-orange font-Black mb-2">
                  CORE PROMISE
                </h4>
                <div className="bg-brand-blue p-3 rounded text-center">
                  <p className="text-brand-orange-light">Your Bold Statement</p>
                  <p>Single powerful promise that sets you apart</p>
                </div>
              </div>

              {/* Social Proof */}
              <div className="border-2 border-brand-orange p-4 rounded-lg bg-black">
                <h4 className="text-brand-orange font-Black mb-2">
                  SOCIAL PROOF
                </h4>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div className="bg-brand-blue p-3 rounded">Testimonial 1</div>
                  <div className="bg-brand-blue p-3 rounded">Testimonial 2</div>
                  <div className="bg-brand-blue p-3 rounded">Testimonial 3</div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="border-2 border-brand-orange p-4 rounded-lg bg-black">
                <h4 className="text-brand-orange font-Black mb-2">
                  CALL TO ACTION
                </h4>
                <div className="bg-brand-blue p-3 rounded text-center">
                  <p>Primary conversion button</p>
                </div>
              </div>

              {/* Enter My World Section */}
              <div className="border-2 border-brand-orange p-4 rounded-lg bg-black">
                <h4 className="text-brand-orange font-Black mb-2">
                  ENTER MY WORLD
                </h4>
                <div className="grid grid-cols-2 gap-4 text-sm relative">
                  <div className="bg-brand-blue p-3 rounded">
                    <p className="text-brand-orange-light">Newsletter Signup</p>
                    <p>Email capture with value offer</p>
                  </div>

                  {/* OR divider */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black px-2 font-Black text-brand-orange-light">
                    OR
                  </div>

                  <div className="bg-brand-blue p-3 rounded">
                    <p className="text-brand-orange-light">Free Download</p>
                    <p>Lead magnet or valuable resource</p>
                  </div>
                </div>
              </div>

              {/* Conclusion Section */}
              <div className="border-2 border-brand-orange p-4 rounded-lg bg-black">
                <h4 className="text-brand-orange font-Black mb-2">
                  CONCLUSION
                </h4>
                <div className="bg-brand-blue p-3 rounded">
                  <p className="text-brand-orange-light">Final Message</p>
                  <p>Reinforcement of value + gentle push to action</p>
                </div>
              </div>

              {/* Footer Section */}
              <div className="border-2 border-brand-orange p-4 rounded-lg bg-black">
                <h4 className="text-brand-orange font-Black mb-2">FOOTER</h4>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div className="bg-brand-blue p-3 rounded">
                    <p className="text-brand-orange-light">Social Links</p>
                    <p>Instagram, LinkedIn, etc.</p>
                  </div>
                  <div className="bg-brand-blue p-3 rounded">
                    <p className="text-brand-orange-light">Quick Links</p>
                    <p>Important pages & policies</p>
                  </div>
                  <div className="bg-brand-blue p-3 rounded">
                    <p className="text-brand-orange-light">Contact Info</p>
                    <p>Email & business details</p>
                  </div>
                </div>
              </div>

              <button
                className="absolute top-4 right-4 text-brand-cream hover:text-brand-orange bg-brand-blue rounded-full w-8 h-8 flex items-center justify-center"
                onClick={() => setIsModalOpen(false)}
              >
                <span className="text-xl">×</span>
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  const modalTrigger = (
    <div className="w-full flex justify-center my-24">
      <button
        onClick={() => setIsModalOpen(true)}
        className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <img
          src="/images/toby2.jpg"
          alt="Homepage Template Preview"
          className="w-full h-[30vh] md:h-[40vh] object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-blue-dark/50 to-brand-blue-dark/90 flex items-center justify-center">
          <span className="text-brand-cream font-Black text-xl md:text-2xl px-8 py-4 bg-brand-blue rounded-full shadow-lg hover:bg-brand-orange-light transition-colors duration-300 hover:text-brand-blue">
            High-Converting Homepage Template
          </span>
        </div>
      </button>
    </div>
  );

  return (
    <div className="w-full min-h-screen bg-brand-blue-dark text-brand-cream font-Raleway">
      {/* Header Image */}
      <div className="w-full h-[40vh] md:h-[70vh] relative">
        <img
          src="/images/toby2.jpg"
          alt="High-Converting Homepage"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Added background container */}
      <div className="bg-brand-blue-dark/95 backdrop-blur-sm">
        {/* Content Container */}
        <div className="max-w-[90%] md:max-w-[80%] lg:max-w-[60%] mx-auto py-16">
          <Reveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-Black mb-8 text-brand-orange">
              The High-Converting Homepage: More Than Just a Pretty Face
            </h1>
          </Reveal>

          <Reveal>
            <div className="space-y-6 text-lg leading-relaxed text-brand-blue-light">
              <p>
                Let's talk about your homepage. It's the digital home of
                your business, the first impression you make on potential
                clients & customers. It's often the only chance you get to capture their
                attention and entice them to explore further. A stunning design
                is important, yes, but it's not enough. A truly high-converting
                homepage is a carefully crafted experience that subtly guides
                visitors toward the desired action – whether that's a purchase,
                a sign-up, or simply deeper engagement with your brand.
              </p>

              <p>
                Forget generic templates and stock photos. A high-converting
                homepage tells a story, engaging the visitor on an emotional
                level and leaving a lasting impression. It's less about shouting
                your message and more about whispering it compellingly, so your
                visitors lean in to listen.
              </p>

              <h2 className="text-2xl md:text-3xl font-Black text-brand-orange mt-12 mb-6">
                Here's what makes a homepage truly shine:
              </h2>

              <div className="space-y-12">
                <div>
                  <h3 className="text-xl md:text-2xl font-Black text-brand-orange mb-6">
                    1. Crystal Clear Value Proposition
                  </h3>
                  <div className="space-y-6 pl-4 text-brand-blue-light">
                    <p>
                      Within seconds, visitors should understand what you offer
                      and why they should care. Don't bury your value
                      proposition under a mountain of text or fancy graphics.
                      Instead, state it clearly, concisely, and compellingly
                      above the fold—the area visible without scrolling. This is
                      your elevator pitch, your chance to grab attention before
                      anyone hits that back button.
                    </p>
                    <p>
                      Think about what unique problem you solve for your
                      customers. What are the key benefits they receive by
                      choosing you? Highlight these benefits prominently and
                      persuasively. Instead of stating "We sell shoes," try
                      "Step into Comfort and Confidence: Discover Your Perfect
                      Fit."
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-Black text-brand-orange mb-6">
                    2. Compelling Visual Storytelling
                  </h3>
                  <div className="space-y-6 pl-4 text-brand-blue-light">
                    <p>
                      Your homepage should visually engage the visitor, weaving
                      a story that connects emotionally. High-quality images and
                      videos are crucial. These visuals shouldn't be generic
                      stock photos; they should reflect your brand's personality
                      and resonate with your target audience. Think lifestyle
                      imagery that showcases your products in action or
                      aspirational videos that evoke the feeling your brand
                      embodies.
                    </p>
                    <p>
                      Avoid cluttered designs. Use whitespace effectively to
                      create breathing room and guide the eye to key elements. A
                      minimalist approach often proves more effective, focusing
                      attention on the most important information and creating a
                      clean, uncluttered experience.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-Black text-brand-orange mb-6">
                    3. Strategic Use of White Space
                  </h3>
                  <div className="space-y-6 pl-4 text-brand-blue-light">
                    <p>
                      Whitespace, or negative space, isn't empty; it's
                      intentional. It provides breathing room, allows key
                      elements to stand out, and enhances readability. Don't be
                      afraid of using plenty of white space to create a clean,
                      uncluttered look that feels professional and inviting. Too
                      much visual "clutter" overwhelms the visitor and makes it
                      harder for them to find the key information they need.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-Black text-brand-orange mb-6">
                    4. Strong Call to Action (CTA)
                  </h3>
                  <div className="space-y-6 pl-4 text-brand-blue-light">
                    <p>
                      Your homepage should have a clear, compelling CTA that
                      guides visitors toward the desired action. This might be a
                      "Shop Now" button, a "Learn More" link, or a "Sign Up"
                      form. Make your CTA prominent, visually appealing, and
                      easy to find.
                    </p>
                    <p>
                      Use contrasting colours to make your CTA buttons stand
                      out. Consider using action verbs to encourage clicks, such
                      as "Get Started," "Download Now," or "Book Your
                      Consultation." Make sure your CTA is directly linked to
                      the page where the visitor can take that specific action.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-Black text-brand-orange mb-6">
                    5. Social Proof and Testimonials
                  </h3>
                  <div className="space-y-6 pl-4 text-brand-blue-light">
                    <p>
                      Building trust is vital. Incorporate social proof elements
                      like customer testimonials, reviews, and logos of
                      prestigious clients. These build credibility and help
                      convince visitors that you're trustworthy and that your
                      products or services deliver on their promises. Show,
                      don't just tell; let your satisfied customers do the
                      talking for you.
                    </p>
                  </div>
                </div>

                {modalTrigger}

                <div>
                  <h3 className="text-xl md:text-2xl font-Black text-brand-orange mb-6">
                    6. Mobile Responsiveness
                  </h3>
                  <div className="space-y-6 pl-4 text-brand-blue-light">
                    <p>
                      Your homepage must look and function perfectly on all
                      devices – desktops, tablets, and mobile phones. A
                      responsive design adapts seamlessly to different screen
                      sizes, ensuring a consistent and enjoyable experience
                      regardless of how visitors access your site. In today's
                      mobile-first world, this is non-negotiable.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-Black text-brand-orange mb-6">
                    7. Fast Loading Speed
                  </h3>
                  <div className="space-y-6 pl-4 text-brand-blue-light">
                    <p>
                      Nobody wants to wait for a website to load. Slow loading
                      times lead to frustration and high bounce rates. Optimize
                      your website for speed to provide a seamless user
                      experience. Use tools to test your loading speed and
                      identify areas for improvement.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-Black text-brand-orange mb-6">
                    8. Easy Navigation
                  </h3>
                  <div className="space-y-6 pl-4 text-brand-blue-light">
                    <p>
                      Your homepage should be easy to navigate, with clear menus
                      and links that guide visitors to the information they
                      seek. Don't bury important information under layers of
                      menus or confusing navigation structures. Keep it simple,
                      intuitive, and user-friendly.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-Black text-brand-orange mb-6">
                    9. Regular Updates
                  </h3>
                  <div className="space-y-6 pl-4 text-brand-blue-light">
                    <p>
                      Your homepage isn't a static entity; it should evolve as
                      your business grows and your offerings change. Regular
                      updates—with fresh content, images, and promotions—keep
                      your homepage relevant and engaging, attracting returning
                      visitors and showcasing the dynamic nature of your
                      business.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-24 space-y-6 text-brand-blue-light italic">
                <p>
                  Creating a high-converting homepage is about more than
                  aesthetics; it's about understanding your target audience,
                  crafting a compelling narrative, and guiding visitors towards
                  the desired outcome with subtle persuasion. By implementing
                  these strategies, you'll transform your homepage from a simple
                  landing page into a powerful engine for growth, attracting new
                  customers and driving conversions.
                </p>
                <p>
                  Remember, every detail matters—from the colour scheme to the
                  placement of your CTA button—in creating a truly irresistible
                  digital storefront that captivates and converts.
                </p>
              </div>

              <div className="flex justify-center mt-16">
                <Link
                  to="/journal"
                  className="px-8 py-4 bg-brand-blue mt-12 hover:bg-brand-orange-light text-brand-cream font-Black text-lg rounded-full transition-colors duration-300"
                >
                  Back to Journals
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <TemplateModal />

      <Contact />
    </div>
  );
}
