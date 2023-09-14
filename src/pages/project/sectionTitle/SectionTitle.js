import { useState } from "react";
import { Link } from "react-router-dom";
import {
  PiArrowLeftLight,
  PiArrowRightLight,
  PiArrowUpRightLight,
} from "react-icons/pi";

const SectionTitle = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  const { name, image, siteURL } = project;

  return (
    <section className="project_image xl:fixed xl:-top-20 xl:w-1/2 xl:h-screen flex flex-col xl:justify-center items-center">
      <a
        className="article_image_container mb-10"
        href={siteURL}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <p
          className={`mb-5 flex flex-row items-end justify-center text-4xl font-semibold text-second
            ${isHovered ? "text-accent" : ""}
            `}
        >
          {name}

          <PiArrowUpRightLight
            className={`ml-1 mb-0.5 ${
              isHovered
                ? "translate-x-2 -translate-y-2 transition-transform"
                : ""
            }`}
            size={24}
          />
        </p>

        <div className="image_container relative max-w-md rounded-md overflow-hidden">
          <img
            className="project_image_img w-full h-auto"
            src={image}
            alt={name}
          />

          <div
            className={`image-overlay bg-first absolute inset-0 ${
              isHovered ? "opacity-0" : "opacity-30"
            }`}
          ></div>
        </div>
      </a>

      <div className="buttons_container flex justify-between text-second text-xl">
        <Link to="/">
          <button className="button_back flex items-center">
            <PiArrowLeftLight />

            <span className="ml-1">Back</span>
          </button>
        </Link>

        <Link to="/">
          <button className="button_back flex items-center">
            <span className="ml-1">Back</span>

            <PiArrowRightLight />
          </button>
        </Link>
      </div>
    </section>
  );
};
export default SectionTitle;
