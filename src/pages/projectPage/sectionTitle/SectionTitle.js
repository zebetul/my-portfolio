import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PROJECTS } from "../../../constants/constants";
import CustomLink from "../../../components/common/customLink/CustomLink";
import CustomAnchor from "../../../components/common/customAnchor/CustomAnchor";

const SectionTitle = ({ project, setIsLoaded }) => {
  const [nextProject, setNextProject] = useState("");
  const [previousProject, setPreviousProject] = useState("");
  const [isTitleHovered, setIsTitleHovered] = useState(false);
  const [isPreviousButtonHovered, setIsPreviousButtonHovered] = useState(false);
  const [isNextButtonHovered, setIsNextButtonHovered] = useState(false);
  const [isProjectsButtonHovered, setIsProjectsButtonHovered] = useState(false);

  const { name, description, image, siteURL } = project;

  useEffect(() => {
    window.scrollTo(0, 0);

    const projectIndex = PROJECTS.findIndex((project) => project.name === name);

    if (projectIndex === PROJECTS.length - 1) {
      setNextProject(PROJECTS[0].detailsURL);
    } else {
      setNextProject(PROJECTS[projectIndex + 1].detailsURL);
    }

    if (projectIndex === 0) {
      setPreviousProject(PROJECTS[PROJECTS.length - 1].detailsURL);
    } else {
      setPreviousProject(PROJECTS[projectIndex - 1].detailsURL);
    }

    setIsNextButtonHovered(false);
    setIsPreviousButtonHovered(false);
    setIsTitleHovered(false);
    setIsProjectsButtonHovered(false);
  }, [name]);

  return (
    <section className="project_image xl:fixed xl:-top-10 xl:w-1/2 xl:h-screen mt-5 xl:mt-0 flex flex-col xl:justify-center items-center">
      <a
        href={siteURL || null}
        className="article_image_container mb-14 max-w-xs w-full h-80"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsTitleHovered(true)}
        onMouseLeave={() => setIsTitleHovered(false)}
      >
        <div className="image_container mb-2 relative max-w-md rounded-md overflow-hidden border border-gray-500">
          <img
            className="project_image_img w-full h-auto"
            src={image}
            alt={name}
            onLoad={() => setIsLoaded(true)}
          />

          <div
            className={`image-overlay bg-first absolute inset-0 ${
              isTitleHovered ? "opacity-0" : "opacity-10"
            }`}
          ></div>
        </div>

        <CustomAnchor
          textContent={name}
          isHovered={isTitleHovered}
          className="mb-2 text-2xl"
          noArrow={siteURL ? false : true}
        />

        <p
          className={`project_details ml-1 border-l border-accent pl-5
        ${isTitleHovered ? "text-second" : ""}
        `}
        >
          {description}
        </p>
      </a>

      <div className="buttons_container mb-5 max-w-xs w-full flex justify-between px-2 text-second text-xl">
        <Link to={previousProject}>
          <CustomLink
            textContent={"previous"}
            isHovered={isPreviousButtonHovered}
            arrow={"left"}
            onMouseEnter={() => setIsPreviousButtonHovered(true)}
            onMouseLeave={() => setIsPreviousButtonHovered(false)}
          />
        </Link>

        <Link to={nextProject}>
          <CustomLink
            textContent={"next"}
            isHovered={isNextButtonHovered}
            arrow={"right"}
            onMouseEnter={() => setIsNextButtonHovered(true)}
            onMouseLeave={() => setIsNextButtonHovered(false)}
          />
        </Link>
      </div>

      <Link to="/">
        <CustomLink
          textContent={"projects"}
          isHovered={isProjectsButtonHovered}
          arrow={"left"}
          onMouseEnter={() => setIsProjectsButtonHovered(true)}
          onMouseLeave={() => setIsProjectsButtonHovered(false)}
        />
      </Link>
    </section>
  );
};
export default SectionTitle;
