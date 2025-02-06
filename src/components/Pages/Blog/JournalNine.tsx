import { Reveal } from "../../Animations/Reveal";
import { Link } from "react-router-dom";
import Contact from "../Contact/Contact";

export default function JournalNine() {
  return (
    <div className="w-full min-h-screen bg-brand-blue-dark text-brand-cream font-Raleway">
      {/* Header Image */}
      <div className="w-full h-[40vh] md:h-[70vh] relative">
        <img
          src="/images/value.png"
          alt="Discovering Core Values"
          className="w-full h-full object-cover"
          style={{ objectPosition: "50% 30%" }}
        />
      </div>

      {/* Added background container */}
      <div className="bg-brand-blue-dark/95 backdrop-blur-sm">
        {/* Content Container */}
        <div className="max-w-[90%] md:max-w-[80%] lg:max-w-[60%] mx-auto py-16">
          <Reveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-Black mb-8 text-brand-orange">
              Your Core Values: A Guide to Discovering What Truly
              Matters
            </h1>
          </Reveal>

          <Reveal>
            <div className="space-y-6 text-lg leading-relaxed text-brand-blue-light">
              <p>
                So ... why all this talk about core values? Because these
                fundamental principles are the guide lines of your
                entrepreneurial journey, illuminating the path toward authentic
                decision-making and fulfilling connections. So how do we uncover
                these hidden gems within ourselves? That's easy ... let me help you. I've got some deep-thinking exercises and actionable tips to
                help you unpack your values and unleash their power!
              </p>

              {/* Link to Journal 8 */}
              

              <div>
                <h2 className="text-2xl md:text-3xl font-Black text-brand-orange mt-12 mb-6">
                  Step 1: Reflection and Introspection
                </h2>
                <div className="space-y-6 pl-4">
                  <p>
                    Before diving headfirst into exercises, it's essential to
                    carve out some sacred time for reflection and diving deeper into what it means to be you.
                    Grab a comfy chair, light a candle, and maybe even pour
                    yourself a soothing cup of tea. Allow yourself to settle
                    into the moment. You might be surprised how much can come up
                    when the busy mind takes a backseat.
                  </p>
                </div>
              </div>

              {/* Journaling Exercise section */}
              <div>
                <h2 className="text-2xl md:text-3xl font-Black text-brand-orange mt-12 mb-6">
                  Journaling Exercise: "The Life Inventory"
                </h2>
                <div className="space-y-6 pl-4">
                  <p>
                    Grab your journal and write down key moments in your life
                    that made you feel fulfilled, proud, or genuinely happy.
                    Reflect on these moments and consider the following
                    questions:
                  </p>
                  <ol className="list-decimal pl-6 space-y-4">
                    <li>
                      What feeling (or values) were present during these moments? Did you
                      feel a sense of freedom? Community? Creativity?
                    </li>
                    <li>
                      What was contradictory in experiences that left you
                      feeling unsatisfied or frustrated? This can provide
                      insight into values that are important to you but also
                      hints at what might be missing.
                    </li>
                  </ol>
                  <p>
                    By identifying these peaks and valleys in your experiences,
                    you gain invaluable insight into what truly resonates with
                    you. Don't be afraid to take your time with this
                    reflection—sometimes the best revelations occur in the
                    stillness.
                  </p>
                </div>
              </div>

              {/* Step 2 section */}
              <div>
                <h2 className="text-2xl md:text-3xl font-Black text-brand-orange mt-12 mb-6">
                  Step 2: Identify Your Influences and Role Models
                </h2>
                <div className="space-y-6 pl-4">
                  <p>
                    Consider the qualities you admire in others. Think about
                    mentors, authors, or even friends whose values you resonate
                    with deeply. What is it about them that inspires you?
                    Oftentimes, those qualities are reflections of your own
                    values, waiting to be acknowledged.
                  </p>
                </div>
              </div>

              {/* Value Mapping Exercise */}
              <div>
                <h2 className="text-2xl md:text-3xl font-Black text-brand-orange mt-12 mb-6">
                  Exercise: "Value Mapping"
                </h2>
                <div className="space-y-6 pl-4">
                  <p>
                    Now, take a piece of paper and create a "Value Map." Start
                    by jotting down names of people you admire. For each person,
                    write down at least three qualities or values they embody
                    that you respect.
                  </p>
                  <p>
                    Once you've completed this, step back and look for patterns
                    or themes. Are there recurring values that appear in your
                    analysis? This can serve as a helpful starting point for
                    your own value identification process.
                  </p>
                </div>
              </div>

              {/* Step 3 section */}
              <div>
                <h2 className="text-2xl md:text-3xl font-Black text-brand-orange mt-12 mb-6">
                  Step 3: Digging Deeper with Values Lists
                </h2>
                <div className="space-y-6 pl-4">
                  <p>
                    To help you through this step, there's a nifty trick called a
                    "Values List." This list can act as a buffet of values for
                    you to choose from—tasty, right?!
                  </p>
                </div>
              </div>

              {/* Value Buffet Exercise */}
              <div>
                <h2 className="text-2xl md:text-3xl font-Black text-brand-orange mt-12 mb-6">
                  Exercise: "The Value Buffet"
                </h2>
                <div className="space-y-6 pl-4">
                  <ol className="list-decimal pl-6 space-y-4">
                    <li>
                      <span className="font-semibold">
                        Craft or Find a List:
                      </span>{" "}
                      You can create a list of values (or use pre-existing ones
                      available online). Here are some examples: integrity,
                      creativity, freedom, community, growth, compassion, etc.
                    </li>
                    <li>
                      <span className="font-semibold">Rate Your Values:</span>{" "}
                      Go through the list and select 10-15 values that resonate
                      with you. Next, rank them in terms of importance.
                    </li>
                    <li>
                      <span className="font-semibold">Narrow it Down:</span>{" "}
                      From your top chosen values, narrow it down to 3-5 values that
                      capture the essence of what truly matters to you.
                    </li>
                  </ol>
                  <p>
                    This exercise encourages you to feel and reflect on
                    different values, ultimately narrowing them down to your
                    core beliefs.
                  </p>
                </div>
              </div>

              {/* Step 4 section */}
              <div>
                <h2 className="text-2xl md:text-3xl font-Black text-brand-orange mt-12 mb-6">
                  Step 4: Creating Your Value Statement
                </h2>
                <div className="space-y-6 pl-4">
                  <p>
                    Once you've concluded the value-hunting expedition, it's
                    time to put those insights into action! A value statement
                    crystallises your newfound understanding into a guiding
                    principle for your life and business.
                  </p>
                </div>
              </div>

              {/* Value Statement Exercise */}
              <div>
                <h2 className="text-2xl md:text-3xl font-Black text-brand-orange mt-12 mb-6">
                  Exercise: "The Value Statement Creation"
                </h2>
                <div className="space-y-6 pl-4">
                  <ol className="list-decimal pl-6 space-y-4">
                    <li>
                      <span className="font-semibold">
                        Draft Your Statement:
                      </span>{" "}
                      Using your core values, write a short paragraph that
                      encapsulates what each value means to you. For example, if
                      one of your values is creativity, you might say:
                      "Creativity is the heartbeat of my life. It fuels my
                      passions and allows me to express my unique self in
                      everything I do."
                    </li>
                    <li>
                      <span className="font-semibold">Refine and Reflect:</span>{" "}
                      Revisit your statement regularly and adjust it as you
                      evolve in your journey. This ensures it remains aligned
                      with your ever-changing self.
                    </li>
                  </ol>
                </div>
              </div>

              {/* Step 5 section */}
              <div>
                <h2 className="text-2xl md:text-3xl font-Black text-brand-orange mt-12 mb-6">
                  Step 5: Put Your Values into Action
                </h2>
                <div className="space-y-6 pl-4">
                  <p>
                    Now that you've gone through the process of discovery, it's
                    time to weave those values into your daily life. Here's how
                    you can ensure they shine like beacons in your
                    entrepreneurial endeavours:
                  </p>
                </div>
              </div>

              {/* Implementation Tips */}
              <div>
                <h2 className="text-2xl md:text-3xl font-Black text-brand-orange mt-12 mb-6">
                  Tips for Implementation
                </h2>
                <div className="space-y-6 pl-4">
                  <ul className="list-disc pl-6 space-y-4">
                    <li>
                      <span className="font-semibold">
                        Set Intentional Goals:
                      </span>{" "}
                      Align your business goals with your core values. For
                      example, if community is vital to you, create initiatives
                      that strengthen connections within your audience and
                      industry.
                    </li>
                    <li>
                      <span className="font-semibold">Check-In Regularly:</span>{" "}
                      Schedule periodic check-ins with yourself. Ask, "Am I
                      living in alignment with my values?" Adjust your path as
                      needed.
                    </li>
                    <li>
                      <span className="font-semibold">
                        Surround Yourself with Like-Minded People:
                      </span>{" "}
                      Build a tribe of people who share similar values. This
                      helps reinforce your alignment and creates a supportive
                      network.
                    </li>
                    <li>
                      <span className="font-semibold">
                        Communicate Your Values:
                      </span>{" "}
                      Share your values on your website, social media, and any
                      material connected to your brand. This communication
                      attracts clients who resonate with your vision.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Step 6 section */}
              <div>
                <h2 className="text-2xl md:text-3xl font-Black text-brand-orange mt-12 mb-6">
                  Step 6: Reflect and Evolve
                </h2>
                <div className="space-y-6 pl-4">
                  <p>
                    Your values are not set in stone. Like fine wine, they may
                    shift and evolve over time. As you grow as a person and
                    entrepreneur, take time to reflect on changes and adapt your
                    values as needed.
                  </p>
                </div>
              </div>

              {/* Value Evolution Survey */}
              <div>
                <h2 className="text-2xl md:text-3xl font-Black text-brand-orange mt-12 mb-6">
                  Exercise: "Value Evolution Survey"
                </h2>
                <div className="space-y-6 pl-4">
                  <ol className="list-decimal pl-6 space-y-4">
                    <li>
                      <span className="font-semibold">
                        Return to Your Journaling:
                      </span>{" "}
                      Set a reminder to revisit your values every six months or
                      so. Take time to see if they still resonate or if your
                      priorities have shifted.
                    </li>
                    <li>
                      <span className="font-semibold">Embrace Change:</span>{" "}
                      Remember, it's okay if your values change or evolve! This
                      can indicate that you're growing and aligning more closely
                      with your authentic self.
                    </li>
                  </ol>
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-center gap-4 my-8">
                <Link
                  to="/values-in-business"
                  className="px-8 py-4 my-8 bg-brand-blue text-brand-cream rounded-full font-Black text-lg hover:bg-brand-orange-light transition-colors duration-300 text-center"
                >
                  Click here to check out my personal values
                </Link>
              </div>
              {/* Conclusion */}
              <div>
                
                <div className="space-y-6 pl-4">
                  <p>
                    Finding your core values is an incredible journey—a
                    discovery to unearth what truly matters and align it with your
                    business. It's about finding moments of clarity in the loud
                    chaos of life and embracing who you are at your core. By
                    engaging in these deep-thinking exercises, reflecting
                    regularly, and actively implementing your values in everyday
                    life, you create an authentic foundation for nurturing your
                    business and building meaningful connections with others.
                  </p>
                  <p>
                    So take a deep breath, ease into this journey of
                    discovery, and allow the beauty of your core values to
                    guide you toward a more fulfilling entrepreneurial
                    adventure! Your values are waiting—now go and uncover them!
                  </p>
                </div>
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

      <Contact />
    </div>
  );
}
