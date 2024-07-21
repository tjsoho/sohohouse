import React from 'react';
import { Reveal } from "../../../Animations/Reveal";
import { SlideReveal2 } from "../../../Animations/SlideReveal2";
import Button1 from "../../../Button/Button1";
import { Link } from 'react-router-dom';

function Websites() {
  return (
    <div className="w-full h-full bg-white">
      <div className="w-full h-full rounded-br-[75px] md:rounded-br-[150px] bg-brand-orange-light rounded-tr-[75px] md:rounded-tr-[150px]">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col lg:flex-row justify-around items-center h-full">
            <div className="flex flex-col justify-center items-center h-full w-full lg:w-1/2">
              <div className="text-#24438C px-4 lg:px-16 py-8 lg:py-16 flex flex-col justify-center items-center w-full">
                <Reveal>
                  <div className="rounded-t-lg p-2">
                    <p className="text-brand-blue text-[36px] md:text-[46px] font-Black mb-4 leading-8">
                      Bespoke Web Design
                    </p>

                    <ul className="list-disc list-inside text-brand-blue-light text-lg leading-relaxed">
                      <p>
                        Your business isn't just a business; it's a part of who you are. Your new website will highlight this unique essence, ensuring your digital presence reflects your brand perfectly.
                      </p>
                      <br />
                      <p>We'll work in two phases:</p>
                      <ul className="list-disc list-inside ml-5">
                        <li>
                          <strong>Design Phase</strong> – We'll collaborate closely to craft something truly unique, ensuring it shows you and your business off in the best possible light.
                        </li>
                        <li>
                          <strong>Build Phase</strong> – Once approved, I'll go tunnel vision to get your website live and ready as quickly as possible.
                        </li>
                      </ul>
                      <br />
                      <p>Your bespoke design will include:</p>
                      <ul className="list-disc list-inside ml-5">
                        <li>A high-converting homepage</li>
                        <li>Engaging and informative About page</li>
                        <li>Clear and detailed Services page</li>
                        <li>Easy-to-navigate Contact page</li>
                        <li>Comprehensive Privacy Policy</li>
                      </ul>
                      <p className="my-4">$1450 + GST</p>
                    </ul>
                    <a href="https://calendly.com/toby-ai-guy/30min" target="_blank" rel="noopener noreferrer">
                      <Button1 label="GET STARTED" color="blue" className="text-brand-orange mt-8" />
                    </a>
                  </div>
                </Reveal>
              </div>
            </div>
            <div className="flex flex-col justify-end items-end h-full order-2 mt-16 lg:mt-0 w-full lg:w-1/2">
              <SlideReveal2>
                <div className="w-full h-full lg:w-full xl:w-full  self-end">
                  <img
                    src="./images/founder3.png"
                    alt="The Ai Guy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </SlideReveal2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Websites;
