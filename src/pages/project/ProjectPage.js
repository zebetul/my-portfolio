import { useEffect } from "react";
import SectionTitle from "./sectionTitle/SectionTitle";
import SectionDetails from "./sectionDetails/Sectiondetails";

const ProjectPage = ({ project }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="project_page">
      <SectionTitle project={project} />

      <SectionDetails project={project} />
    </main>
  );
};
export default ProjectPage;
