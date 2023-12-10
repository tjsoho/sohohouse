function Voice() {
  return (
    <div className="w-full h-full bg-brand-blue flex flex-col lg:flex-row py-16 md:py-32 lg:py-16 px-4 md:p-8 ">
      <div className="h-2/5 lg:h-full w-full lg:w-1/2 flex flex-col justify-center items-center text-left md:text-center mb-16 lg:pr-16">
        <h3 className="text-brand-orange leading-[40px] text-[32px] md:text-[50px] md:leading-tight text-left md:text-center w-full lg:px-1">Ready to elevate</h3>
        <h3 className="text-brand-orange leading-[40px] text-[32px] md:text-[50px] md:leading-tight text-left md:text-center w-full lg:px-1">your brand's voice?</h3>
      </div>

      <div className=" h-3/5 lg:h-full w-full lg:w-1/2 flex flex-col justify-center items-center">
        <p className="text-brand-camel p-8">
          Dive into the cutting-edge world of AI with SoHo Creative House, where
          we leverage ChatGPT, the pinnacle of artificial intelligence, to craft
          your personalised business companion.<br /><br /> Your AI Business Companion
          seamlessly manages Email Chains, Blogs Posts, Social Media content,
          and Website material, ensuring your brand shines.<br /><br /> Imagine, in just a
          few clicks unleashing the power of your new AI Business Companion.<br /><br />
          Effortlessly handling tasks while joining you in brainstorming
          sessions for business ideas, marketing and sales strategies, HR
          support, and crafting emails with precision—all in YOUR unique and
          individual voice.
        </p>
      </div>
    </div>
  );
}

export default Voice;
