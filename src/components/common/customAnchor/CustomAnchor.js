import { PiArrowUpRightLight } from "react-icons/pi";

const CustomAnchor = ({ textContent, isHovered, className, noArrow }) => {
  return (
    <p
      className={`w-max flex flex-row items-end text-md font-semibold text-second
      ${isHovered ? "text-accent" : ""} ${className}
      `}
    >
      {textContent}

      {!noArrow && (
        <PiArrowUpRightLight
          className={`ml-1 mb-0.5
      ${isHovered ? "translate-x-1 -translate-y-1 transition-transform" : ""}`}
          size={16}
        />
      )}
    </p>
  );
};
export default CustomAnchor;
