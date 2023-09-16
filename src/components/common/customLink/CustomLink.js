import { PiArrowLeftLight, PiArrowRightLight } from "react-icons/pi";

const CustomLink = ({
  textContent,
  isHovered,
  className,
  arrow,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <button
      className={`w-max flex flex-row items-center text-xl text-second ${
        isHovered ? "text-accent" : ""
      } ${className}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {arrow === "left" && (
        <PiArrowLeftLight
          className={`mr-1 ${
            isHovered ? "-translate-x-2 transition-transform" : ""
          }`}
        />
      )}

      {textContent}

      {arrow === "right" && (
        <PiArrowRightLight
          className={`ml-1 ${
            isHovered ? "translate-x-2 transition-transform" : ""
          }`}
        />
      )}
    </button>
  );
};
export default CustomLink;
