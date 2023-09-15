import { PROJECTS } from "../../constants/constants";
import SectionHero from "./sectionHero/SectionHero";
import ProjectArticle from "./projectArticle/ProjectArticle";
import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="home-page">
      <SectionHero />

      <section className="section_projects xl:w-1/2 xl:ml-auto flex flex-col items-center xl:items-start">
        <h2 className="section_projects__title mb-10 text-xl font-semibold mx-auto text-second">
          Projects
        </h2>

        {PROJECTS.map((project) => (
          <ProjectArticle project={project} key={project.name} />
        ))}
      </section>
    </main>
  );
};
export default HomePage;
