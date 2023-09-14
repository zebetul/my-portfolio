import { PiArrowRightLight } from "react-icons/pi";

const CustomLink = ({ textContent, isHovered }) => {
  return (
    <button
      className={`w-max mb-3 flex flex-row items-center text-xl text-second ${
        isHovered ? "text-accent" : ""
      }`}
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
