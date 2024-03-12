import { SlideReveal } from "../../../Animations/SlideReveal";

function BookNow() {
  // Define the external link URL
  const externalLink = "https://calendly.com/ai-guy-bookings/free-ai-strategy-session";

  return (
    <div className="row px-5 -mx-5">
      <div className="row px-5 -mx-5">
        <div className="flex justify-center items-center h-full w-full">
          {/* Use the <a> tag for the external link */}
          <a href={externalLink} target="_blank" rel="noopener noreferrer">
            <SlideReveal>
            <p className="text-brand-blue text-4xl md:text-6xl leading-none font-Black underline md:my-16 text-left">
              Book a Date!
            </p>
            </SlideReveal>
          </a>
        </div>
      </div>
    </div>
  );
}

export default BookNow;
