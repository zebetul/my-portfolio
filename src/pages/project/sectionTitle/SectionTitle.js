import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  PiArrowLeftLight,
  PiArrowRightLight,
  PiArrowUpRightLight,
} from "react-icons/pi";
import { PROJECTS } from "../../../constants/constants";

const SectionTitle = ({ project }) => {
  const [nextProject, setNextProject] = useState("");
  const [isTitleHovered, setIsTitleHovered] = useState(false);
  const [isProjectsButtonHovered, setIsProjectsButtonHovered] = useState(false);
  const [isNextButtonHovered, setIsNextButtonHovered] = useState(false);

  const { name, image, siteURL } = project;

  useEffect(() => {
    window.scrollTo(0, 0);

    const projectIndex = PROJECTS.findIndex((project) => project.name === name);

    if (projectIndex === PROJECTS.length - 1) {
      setNextProject(PROJECTS[0].detailsURL);
    } else {
      setNextProject(PROJECTS[projectIndex + 1].detailsURL);
    }
  }, [name]);

  return (
    <section className="project_image xl:fixed xl:-top-20 xl:w-1/2 xl:h-screen flex flex-col xl:justify-center items-center">
      <a
        className="article_image_container mb-20"
        href={siteURL}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsTitleHovered(true)}
        onMouseLeave={() => setIsTitleHovered(false)}
      >
        <p
          className={`mb-5 flex flex-row items-end justify-center text-4xl font-semibold text-second
            ${isTitleHovered ? "text-accent" : ""}
            `}
        >
          {name}

          <PiArrowUpRightLight
            className={`ml-1 mb-0.5 ${
              isTitleHovered
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
              isTitleHovered ? "opacity-0" : "opacity-10"
            }`}
          ></div>
        </div>
      </a>

      <div className="buttons_container flex text-second text-xl">
        <Link to="/">
          <button
            className={`button_back flex items-center ${
              isProjectsButtonHovered ? "text-accent" : ""
            }`}
            onMouseEnter={() => setIsProjectsButtonHovered(true)}
            onMouseLeave={() => setIsProjectsButtonHovered(false)}
          >
            <PiArrowLeftLight
              className={
                isProjectsButtonHovered
                  ? "-translate-x-2 transition-transform"
                  : ""
              }
            />

            <span className="ml-1">back to projects</span>
          </button>
        </Link>

        <Link to={nextProject}>
          <button
            className={`button_back ml-12 md:ml-28 flex items-center ${
              isNextButtonHovered ? "text-accent" : ""
            }`}
            onMouseEnter={() => setIsNextButtonHovered(true)}
            onMouseLeave={() => setIsNextButtonHovered(false)}
          >
            <span>next project</span>

            <PiArrowRightLight
              className={`ml-1 ${
                isNextButtonHovered ? "translate-x-2 transition-transform" : ""
              }`}
            />
          </button>
        </Link>
      </div>
    </section>
  );
};
export default SectionTitle;
