import { useEffect, useState } from "react";
import SectionTitle from "./sectionTitle/SectionTitle";
import SectionDetails from "./sectionDetails/Sectiondetails";

const ProjectPage = ({ project }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(false);

    window.scrollTo(0, 0);
  }, [project]);

  return (
    <main
      className="project_page"
      style={
        isLoaded
          ? { opacity: 1, transition: "opacity 1s ease-in-out" }
          : { opacity: 0 }
      }
    >
      <SectionTitle project={project} setIsLoaded={setIsLoaded} />

      <SectionDetails project={project} />
    </main>
  );
};
export default ProjectPage;
