import Icon from "../../../Icons/Icon";
import HouseAnimation from "./houseAnimation";

export default function One() {
  const titleClasses = `
    Title Class
    text-brand-blue
    text-[70px]
    leading-none
    text-right
    `;

  return (
    <div className="h-screen bg-brand-cream">
      {/* ROW 1 */}

      <div className="flex h-4/5 px-12">
        {/* Heading, orange line, body, svg */}
        <div className="flex-grow ">
          <div className="row flex flex-wrap h-full">
            {/* Left Col */}
            <div className="w-1/2 p-4 flex flex-col justify-end">
              <h3 className={titleClasses}>Your Brand.</h3>
              <h3 className="leading-none text-brand-blue text-right text-[74px] my-2">
                Your Story.
              </h3>
              <h3 className={titleClasses}>Your Home.</h3>
            </div>

            {/* Right Col */}
            <div className="w-1/2 px-4 xl:pt-16 2xl:pt-24 flex flex-col justify-between h-full">
              <div className="mt-8 mb-12">
                <Icon name="smallLine" />
              </div>

              <div className="max-w-[650px] tracking-wider ">
                <p className="text-[20px]">
                  {" "}
                  Welcome to your new online home, where your business isn't
                  just a reflection of who you are, it's a story that deserves
                  to be shared with the world.{" "}
                </p>
              </div>
              {/* House Div */}
              <div className="flex flex-grow justify-end items-end mt-16">
                <div className="pb-6">
                  <HouseAnimation />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ROW 2 Camel Arrow 'Let's Chat' */}
      <div className="flex h-1/5 flex-grow">
        <div className="h-1/4 flex-grow-0 flex flex-wrap">
          <div className=" w-1/12">{/* leave blank */}</div>
          <div className="w-11/12 px-20">
            <Icon name="arrowCamel" />
          </div>
        </div>
      </div>
    </div>
  );
}
