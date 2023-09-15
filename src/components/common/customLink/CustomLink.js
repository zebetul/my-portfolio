import { PiArrowRightLight } from "react-icons/pi";

const CustomLink = ({ textContent, isHovered, className }) => {
  return (
    <button
      className={`w-max flex flex-row items-center text-xl text-second ${
        isHovered ? "text-accent" : ""
      } ${className}`}
    >
      {textContent}

      <PiArrowRightLight
        className={`ml-1 ${
          isHovered ? "translate-x-2 transition-transform" : ""
        }`}
      />
    </button>
  );
};
export default CustomLink;
