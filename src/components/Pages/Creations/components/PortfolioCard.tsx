import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Import the Link component from react-router-dom
import { Reveal } from "../../../Animations/Reveal";

interface PortfolioCardProps {
  image: string;
  title: string;
  subTitle: string;
  link: string; // Add a link prop
}

function PortfolioCard({ image, title, subTitle, link }: PortfolioCardProps) {
  return (
    <Link to={link}>
      {" "}
      {/* Wrap the whole card with a Link */}
      <div className="portfolio-card mb-16 full lg:p-4 w-full h-full">
        <motion.div
          whileHover={{ scale: 1.1 }} // Increase the scale on hover
        >
          <div className="w-full h-[80%]">
            <img className="mb-4 rounded-md" src={image} alt={title} />
          </div>
          <Reveal>
            <div className="w-full h-[10%]">
              <h3 className="leading-none text-[32px] md:text-[28px] text-brand-orange-light hover:text-brand-orange mb-2">
                {title}
              </h3>
            </div>
          </Reveal>
          <Reveal>
            <div className="w-full h-[50px]">
              <p className="text-[18px] text-brand-cream">{subTitle}</p>
            </div>
          </Reveal>
        </motion.div>
      </div>
    </Link>
  );
}

export default PortfolioCard;
