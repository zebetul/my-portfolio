import { PiArrowUpRightLight } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";

const ProjectArticle = ({ project }) => {
  const { name, image, siteURL, detailsURL } = project;
  const navigate = useNavigate();

  return (
    <div className="project-article p-3 bg-second">
      <div
        className="w-52 md:w-72 relative cursor-pointer"
        onClick={() => navigate(detailsURL)}
      >
        <img src={image} alt={name} />

        <div className="image-overlay bg-second absolute inset-0 opacity-70 hover:opacity-50 transition-all duration-500"></div>
      </div>

      <div className="project-article__title flex flex-row justify-between">
        <Link to={detailsURL}>Details</Link>

        <a
          href={siteURL}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 flex flex-row items-center text-sm"
        >
          site <PiArrowUpRightLight />
        </a>
      </div>
    </div>
  );
};
export default ProjectArticle;
