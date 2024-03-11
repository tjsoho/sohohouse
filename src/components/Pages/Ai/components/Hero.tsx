

import ResponsiveVidBG from './RespsonsiveVidBG';

function Hero() {
  return (
    <div className=" h-full w-full">
      <ResponsiveVidBG>
        {/* Overlay */}
        <div className="absolute inset-0 ">
          {/* Content */}
          <div className="flex justify-center items-center h-full">
            {/* <Reveal>
          <h1 className="text-brand-orange font-bold text-8xl lg:text-9xl m-4 text-center">Welcome to teh Ai Hub</h1>
          </Reveal> */}
          </div>
        </div>
      </ResponsiveVidBG>
    </div>
  );
}

export default Hero;
