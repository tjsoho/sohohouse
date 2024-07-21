import React from "react";
import Section1a from "./section1a/Section1a";
import Craft from "../Home/Craft/Craft";
import MusicToDigitalA from "./about/MusicToDigitalA";
import Work from "../Home/Work/Work";
import WebsitesA from "./websites/WebsitesA";
import Offering from "./offering/offering";
import Testimonials2 from "./testimonials/Testimonials2";
import LandingContact from "../Contact/LandingContact";

function Page() {
  return (
    <div className="p-4 lg:p-12">
      <div className="">
        <Section1a />
      </div>
      <Craft />

      <WebsitesA />

      <div className="flex h-full justify-center items-center">
        <MusicToDigitalA />
      </div>
      <div className="flex h-full justify-center items-center">
        <Work />
      </div>
      <div>
        <Offering />
      </div>
      <div className="flex h-full justify-center items-center">
        <Testimonials2 />
      </div>

      <div className="bg-brand-cream h-contain">
        <LandingContact />
      </div>
    </div>
  );
}

export default Page;
