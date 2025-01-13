import { Reveal } from "../../Animations/Reveal";
import { Link } from "react-router-dom";
import Contact from "../Contact/Contact";

export default function JournalSix() {
  return (
    <div className="w-full min-h-screen bg-brand-blue-dark text-brand-cream font-Raleway">
      {/* Header Image */}
      <div className="w-full h-[40vh] md:h-[70vh] relative">
        <img
          src="/images/team.jpg"
          alt="Business Blogging Strategy"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Added background container */}
      <div className="bg-brand-blue-dark/95 backdrop-blur-sm">
        {/* Content Container */}
        <div className="max-w-[90%] md:max-w-[80%] lg:max-w-[60%] mx-auto py-16">
          <Reveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-Black mb-8 text-brand-orange">
              5 Reasons Why Your Business Needs a Blog (And Why You Should Be
              Writing It!)
            </h1>
          </Reveal>

          <Reveal>
            <div className="space-y-6 text-lg leading-relaxed text-brand-blue-light">
              <p>
                Right, let's talk blogs. I know, I know. Another thing to add to
                your already overflowing to-do list. But hear me out. Ignoring
                your business blog is like ignoring half your potential
                customers. It's like leaving money on the table…and who wants
                that?
              </p>

              <p>
                Let me tell you, a well-written blog is pure gold. Here's why:
              </p>

              <div className="space-y-12">
                {/* Numbered sections 1-5 */}
                <div>
                  <h3 className="text-xl md:text-2xl font-Black text-brand-orange mb-6">
                    1. You're Already an Expert (Even If You Don't Think So)
                  </h3>
                  <div className="space-y-6 pl-4 text-brand-blue-light">
                    <p>
                      You know your business inside and out. You understand your
                      customers' needs better than anyone. That knowledge? It's
                      blog gold. Writing about what you know establishes you as
                      an authority in your field. It builds trust. And trust, my
                      friends, leads to sales. Don't underestimate the power of
                      sharing your unique expertise. Your experience is valuable
                      – let your voice be heard!
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-Black text-brand-orange mb-6">
                    2. It's a Great Lead Generation Machine
                  </h3>
                  <div className="space-y-6 pl-4 text-brand-blue-light">
                    <p>
                      Think of your blog as a magnet, attracting potential
                      customers who are actively searching for solutions to
                      their problems – problems you just happen to solve! Each
                      blog post is a chance to engage with these potential
                      clients. Offer valuable, insightful content that positions
                      you as the go-to expert.
                    </p>
                    <p>
                      And don't forget the call to action! At the end of each
                      post, offer a free download – a checklist, a template, an
                      ebook – something valuable in exchange for their email
                      address. This is how you build your email list, a crucial
                      asset for nurturing leads and driving sales.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-Black text-brand-orange mb-6">
                    3. Search Engines Love a Good Story (And So Do Customers)
                  </h3>
                  <div className="space-y-6 pl-4 text-brand-blue-light">
                    <p>
                      Let's face it, nobody wants to read dry, corporate jargon.
                      People connect with stories. Weaving a narrative into your
                      blog posts makes them more engaging, memorable, and
                      shareable. Think of your ideal customer. What challenges
                      do they face? What are their aspirations? Tell a story
                      that speaks directly to their needs and desires.
                    </p>
                    <p>
                      Search engines also love well-written, engaging content,
                      rewarding it with higher rankings in search results. This
                      means more visibility, more traffic, and more potential
                      customers finding you.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-Black text-brand-orange mb-6">
                    4. Showcase Your Brand's Personality and Values
                  </h3>
                  <div className="space-y-6 pl-4 text-brand-blue-light">
                    <p>
                      Your blog isn't just about selling; it's about connecting.
                      Use your blog to let your brand's personality shine
                      through. Are you quirky and fun? Serious and professional?
                      Let your unique voice resonate in every post. Show your
                      potential customers the human side of your business, the
                      values that drive you, and the passion behind your work.
                      This builds a stronger connection with your audience,
                      turning customers into loyal brand advocates.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-Black text-brand-orange mb-6">
                    5. It's the Beginning of Your Content Waterfall
                  </h3>
                  <div className="space-y-6 pl-4 text-brand-blue-light">
                    <p>
                      This is where the magic really happens. One well-crafted
                      blog post isn't just a single piece of content; it's the
                      seed from which a whole week's worth of marketing material
                      can sprout. Think of it like this: your blog post is the
                      mighty oak tree, and your social media updates, email
                      newsletters, and LinkedIn posts are the leaves, branches,
                      and acorns.
                    </p>
                    <p>
                      Each social media share is a small branch, each email is a
                      leaf, and your LinkedIn post expands the roots. All of
                      them should point back to your original blog post,
                      creating a strong, unified marketing presence that
                      strengthens your overall brand message. Repurpose the key
                      points, quotes, and insights from your blog post into
                      shorter, more digestible snippets for your other
                      platforms. This saves you time and ensures consistent
                      messaging across all channels.
                    </p>
                  </div>
                </div>

                {/* Content Waterfall Masterclass Button */}
                <div className="w-full flex flex-col items-center my-24">
                  <button
                    onClick={() =>
                      window.open(
                        "https://www.savetime-makemoney.com",
                        "_blank"
                      )
                    }
                    className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <img
                      src="/images/team.jpg"
                      alt="Content Waterfall Masterclass"
                      className="w-full h-[30vh] md:h-[40vh] object-cover opacity-50"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-brand-blue-dark/50 to-brand-blue-dark/90 flex items-center justify-center">
                      <span className="text-brand-cream font-Black text-xl md:text-2xl px-8 py-4 bg-brand-blue rounded-full shadow-lg hover:bg-brand-orange-light transition-colors duration-300 hover:text-brand-blue">
                        Master The Content Waterfall Method™
                      </span>
                    </div>
                  </button>

                  <a
                    href="https://www.savetime-makemoney.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 text-center text-brand-blue-light hover:text-brand-orange transition-colors duration-300"
                  >
                    <p className="max-w-2xl mx-auto">
                      Ready to turn one piece of content into a week's worth of
                      marketing material? Learn my proven Content Waterfall
                      Method and save hours on your content creation.
                    </p>
                  </a>
                </div>

                {/* Building Your Blog Strategy section */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-Black text-brand-orange mt-12 mb-6">
                    Building Your Blog Strategy: A Step-by-Step Guide
                  </h2>
                  <div className="space-y-6 pl-4 text-brand-blue-light">
                    <p>
                      Now that you understand why you need a blog, let's talk
                      about how to make it work for you:
                    </p>
                    <ul className="list-disc pl-6 space-y-4">
                      <li>
                        <span className="font-semibold">
                          Identify Your Target Audience:
                        </span>{" "}
                        Who are you trying to reach? What are their interests,
                        pain points, and aspirations? Tailor your blog posts to
                        address their specific needs.
                      </li>
                      <li>
                        <span className="font-semibold">
                          Choose Your Keywords:
                        </span>{" "}
                        What terms are people using to search for solutions like
                        yours? Incorporate these keywords naturally into your
                        blog posts to improve your search engine ranking.
                      </li>
                      <li>
                        <span className="font-semibold">
                          Create a Content Calendar:
                        </span>{" "}
                        Plan your blog posts in advance, ensuring a consistent
                        flow of fresh content. This doesn't mean that you need
                        to write multiple posts simultaneously – writing one
                        excellent post per week is better than churning out
                        several mediocre posts. Quality over quantity will
                        always win.
                      </li>
                      <li>
                        <span className="font-semibold">
                          Promote Your Posts:
                        </span>{" "}
                        Don't just write and forget! Share your blog posts on
                        social media, in your email newsletters, and on other
                        relevant platforms.
                      </li>
                      <li>
                        <span className="font-semibold">
                          Track Your Results:
                        </span>{" "}
                        Use analytics to monitor your blog's performance. Which
                        posts are performing best? What topics resonate most
                        with your audience? Use this data to refine your
                        strategy and create even more effective content.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Conclusion */}
              <div className="mt-24 space-y-6 text-brand-blue-light italic">
                <p>
                  Your blog is more than just a collection of articles; it's the
                  beating heart of your online presence, a powerful tool to
                  build trust, generate leads, and establish your brand. Don't
                  let this powerful resource sit idle. Start writing, start
                  sharing, and watch your business grow. And remember, if you're
                  ever stuck or need a hand, I'm always here to help!
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

      <Contact />
    </div>
  );
}
