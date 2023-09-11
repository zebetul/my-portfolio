import { PiArrowRightLight, PiArrowUpRightLight } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";

const ProjectArticle = ({ project }) => {
  const { name, description, image, siteURL, detailsURL } = project;
  const navigate = useNavigate();

  return (
    <div className="project-article flex flex-col md:flex-row-reverse gap-5 md:gap-10 p-10">
      <div className="article_text_container max-w-md flex flex-col">
        <a
          href={siteURL}
          target="_blank"
          rel="noopener noreferrer"
          className="mb-3 flex flex-row items-end text-xl font-semibold text-second"
        >
          {name} <PiArrowUpRightLight className="ml-1 mb-1" />
        </a>

        <p className="text-sm">{description}</p>

        <div className="flex flex-row flex-wrap gap-2 mt-3">
          {project.stack.map((tech) => (
            <span
              className="text-xs bg-second text-accent px-2 py-1 rounded-md"
              key={tech}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="article_image_container">
        <div
          className="article_image mt-2 mb-auto w-32 relative cursor-pointer rounded-sm overflow-hidden"
          onClick={() => navigate(detailsURL)}
        >
          <img
            src={image}
            className="article_image w-full h-full object-cover"
            alt={name}
          />

          <div className="image-overlay bg-first absolute inset-0 opacity-20"></div>
        </div>

        <Link
          to={detailsURL}
          className="mt-2 flex flex-row items-center text-second"
        >
          Details <PiArrowRightLight className="ml-1" />
        </Link>
      </div>
    </div>
  );
};
export default ProjectArticle;
