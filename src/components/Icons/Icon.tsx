import { motion } from "framer-motion";
import { draw } from "../Pages/Home/Section2/drawAnimation"; // Import draw animation

interface IconProps {
  name: string;
  className?: string;
  rotation?: number;
  onExitComplete?: () => void; // add this prop
  onClick?: () => void;
}

export default function Icon({ name, className, onClick ,rotation = 0, onExitComplete }: IconProps) {
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
      {name === "plus" && (
        <svg className={className} width="25" height="25" viewBox="0 0 192 192" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M176 0H16C11.7565 0 7.68687 1.68571 4.68629 4.68629C1.68571 7.68687 0 11.7565 0 16V176C0 180.243 1.68571 184.313 4.68629 187.314C7.68687 190.314 11.7565 192 16 192H176C180.243 192 184.313 190.314 187.314 187.314C190.314 184.313 192 180.243 192 176V16C192 11.7565 190.314 7.68687 187.314 4.68629C184.313 1.68571 180.243 0 176 0ZM152 104H104V152C104 154.122 103.157 156.157 101.657 157.657C100.157 159.157 98.1217 160 96 160C93.8783 160 91.8434 159.157 90.3431 157.657C88.8429 156.157 88 154.122 88 152V104H40C37.8783 104 35.8434 103.157 34.3431 101.657C32.8429 100.157 32 98.1217 32 96C32 93.8783 32.8429 91.8434 34.3431 90.3431C35.8434 88.8429 37.8783 88 40 88H88V40C88 37.8783 88.8429 35.8434 90.3431 34.3431C91.8434 32.8429 93.8783 32 96 32C98.1217 32 100.157 32.8429 101.657 34.3431C103.157 35.8434 104 37.8783 104 40V88H152C154.122 88 156.157 88.8429 157.657 90.3431C159.157 91.8434 160 93.8783 160 96C160 98.1217 159.157 100.157 157.657 101.657C156.157 103.157 154.122 104 152 104Z" fill="#FFE9E2"/>
        </svg>
      )}
      {name === "minus" && (
        <svg className={className} width="25" height="25" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M208 32H48C43.7565 32 39.6869 33.6857 36.6863 36.6863C33.6857 39.6869 32 43.7565 32 48V208C32 212.243 33.6857 216.313 36.6863 219.314C39.6869 222.314 43.7565 224 48 224H208C212.243 224 216.313 222.314 219.314 219.314C222.314 216.313 224 212.243 224 208V48C224 43.7565 222.314 39.6869 219.314 36.6863C216.313 33.6857 212.243 32 208 32ZM184 136H72C69.8783 136 67.8434 135.157 66.3431 133.657C64.8429 132.157 64 130.122 64 128C64 125.878 64.8429 123.843 66.3431 122.343C67.8434 120.843 69.8783 120 72 120H184C186.122 120 188.157 120.843 189.657 122.343C191.157 123.843 192 125.878 192 128C192 130.122 191.157 132.157 189.657 133.657C188.157 135.157 186.122 136 184 136Z" fill="#FFE9E2"/>
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
      {name === "arrowUp" && (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="#FFE9E2" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.4763 21.5L15.6287 13.5061L16.2482 12.7011H15.2324L0.5 12.7011V9.29888L15.2324 9.29888H16.2482L15.6287 8.49393L9.4763 0.5H13.2932L21.3692 11L13.2932 21.5H9.4763Z" fill="#FFE9E2" stroke="#FFE9E2"/>
        </svg>

        )}
     
    </>
  );
}
