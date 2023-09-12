import { PiArrowUpRightLight } from "react-icons/pi";

const CustomAnchor = ({ textContent, isHovered }) => {
  return (
    <p
      className={`w-max flex flex-row items-end text-md font-semibold text-second
      ${isHovered ? "text-accent" : ""}
      `}
    >
      {textContent}

      <PiArrowUpRightLight
        className={`ml-1 mb-0.5
      ${isHovered ? "translate-x-1 -translate-y-1 transition-transform" : ""}`}
        size={16}
      />
    </p>
  );
};
export default CustomAnchor;
