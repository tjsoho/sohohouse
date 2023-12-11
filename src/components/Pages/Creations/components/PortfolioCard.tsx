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
    <Link to={link}> {/* Wrap the whole card with a Link */}
      <div className="portfolio-card mb-16 full lg:p-4">
        <motion.div
          whileHover={{ scale: 0.9 }} // Increase the scale on hover
        >
          <img className="mb-4" src={image} alt={title} />
          <Reveal>
        <h3 className="leading-none text-4xl md:text-[40px] text-brand-camel hover:text-brand-orange mb-2">
          {title}
        </h3>
        </Reveal>
        <Reveal>
        <p className="text-[20px] text-brand-cream">{subTitle}</p>
        </Reveal>
        </motion.div>
      </div>
    </Link>
  );
}

export default PortfolioCard;
