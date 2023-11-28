import { motion } from "framer-motion";
import { draw } from "../Pages/Home/Section2/drawAnimation"; // Import draw animation

interface IconProps {
  name: string;
  className?: string;
  rotation?: number;
  onExitComplete?: () => void; // add this prop
}

export default function Icon({ name, className, rotation = 0, onExitComplete }: IconProps) {
  const rotate = `rotate(${rotation} 32.5 12.5)`; // Assuming the center of rotation is the center of the SVG
  return (
    <>
       {name === "arrowDown" && (
        <svg
          className={className}
          width="65"
          height="25"
          viewBox="0 0 65 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g transform={rotate}>
            <path
              d="M66.2337 0.891674L34.0695 24.1157L1.9053 0.891674L66.2337 0.891674Z"
              fill="#FC7643"
              stroke="#FC7643"
              strokeWidth="0.764368"
            />
          </g>
        </svg>
      )}

      {name === "smallLine" && (
        <svg
          className={className}
          width="116"
          height="11"
          viewBox="0 0 116 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line y1="5.5" x2="116" y2="5.5" stroke="#FC7643" stroke-width="11" />
        </svg>
      )}
      {name === "xsmallLine" && (
        <svg
          className={className}
          width="116"
          height="3"
          viewBox="0 0 116 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line y1="5.5" x2="116" y2="5.5" stroke="#FC7643" stroke-width="11" />
        </svg>
      )}

      {name === "arrowCamel" && (
        <svg
          className={className}
          width="42"
          height="42"
          viewBox="0 0 42 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.0291 36.4437L12.6387 5.76421L33.1663 20.8452L13.0291 36.4437Z"
            fill="#CA9F78"
          />
        </svg>
      )}
      {name === "arrowCamel2" && (
        <svg
        className={`${className} rotate-svg`}
          width="42"
          height="42"
          viewBox="0 0 42 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.0291 36.4437L12.6387 5.76421L33.1663 20.8452L13.0291 36.4437Z"
            fill="#FFE9E2"
          />
        </svg>
      )}

      {name === "smallHouse" && (
        <svg
          className={className}
          width="163"
          height="110"
          viewBox="0 0 163 110"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="65.1484"
            y="109.385"
            width="54.2903"
            height="27.3462"
            transform="rotate(-90 65.1484 109.385)"
            fill="#FFE9E2"
          />
          <circle cx="85.2544" cy="82.8157" r="1.20645" fill="#FC7643" />
          <rect
            x="97.3219"
            y="55.9262"
            width="33.3785"
            height="23.3247"
            fill="#FC7643"
            stroke="#FC7643"
            stroke-width="1.6086"
          />
          <rect
            x="97.3219"
            y="85.2832"
            width="33.3785"
            height="23.3247"
            fill="#FC7643"
            stroke="#FC7643"
            stroke-width="1.6086"
          />
          <rect
            x="26.5436"
            y="55.9262"
            width="33.3785"
            height="23.3247"
            fill="#FC7643"
            stroke="#FC7643"
            stroke-width="1.6086"
          />
          <rect
            x="26.9459"
            y="85.2832"
            width="33.3785"
            height="23.3247"
            fill="#FC7643"
            stroke="#FC7643"
            stroke-width="1.6086"
          />
          <path
            d="M13.3443 49.8667L81.0333 0.992048L148.722 49.8667H13.3443Z"
            fill="#FC7643"
            stroke="#FC7643"
            stroke-width="1.6086"
          />
        </svg>
      )}
      {name === "houseOutline" && (
        <motion.svg
          className={className}
          width="562"
          height="265"
          viewBox="0 0 562 465"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={draw}
          onAnimationComplete={onExitComplete} // use the prop here
        >
          <motion.rect
            x="121"
            y="409"
            width="75"
            height="50"
            stroke="#FC7643"
            stroke-width="8"
            variants={draw}
            custom={1}
          />
          <motion.rect
            x="501"
            y="243"
            width="55"
            height="30"
            stroke="#FC7643"
            stroke-width="8"
            variants={draw}
            custom={2}
          />
          <motion.rect
            x="316"
            y="37"
            width="95"
            height="36"
            stroke="#FC7643"
            stroke-width="8"
            variants={draw}
            custom={3}
          />
          <motion.rect
            x="6"
            y="145"
            width="55"
            height="36"
            stroke="#FC7643"
            stroke-width="8"
            variants={draw}
            custom={4}
          />
          <motion.rect
            x="379"
            y="347"
            width="75"
            height="50"
            stroke="#FC7643"
            stroke-width="8"
            variants={draw}
            custom={5}
          />
          <motion.path
            d="M200.786 47.6378L316.084 201.598L206.217 359.48L200.786 47.6378Z"
            stroke="#FC7643"
            stroke-width="8"
            variants={draw}
            custom={6}
          />
        </motion.svg>
      )}

      {name === "arrowRight" && (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="#FFE9E2" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.4763 21.5L15.6287 13.5061L16.2482 12.7011H15.2324L0.5 12.7011V9.29888L15.2324 9.29888H16.2482L15.6287 8.49393L9.4763 0.5H13.2932L21.3692 11L13.2932 21.5H9.4763Z" fill="#FFE9E2" stroke="#FFE9E2"/>
        </svg>
        )}
    </>
  );
}
