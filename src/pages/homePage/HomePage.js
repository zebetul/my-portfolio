import SectionHero from "./sectionHero/SectionHero";
import ProjectArticle from "./projectArticle/ProjectArticle";
import { PROJECTS } from "../../constants/constants";

const HomePage = () => {
  return (
    <main className="home-page w-full xl:flex">
      <SectionHero />

      <section className="section_projects xl:w-1/2 xl:ml-auto xl:my-20 flex flex-col items-center">
        <h2 className="section_projects__title mb-10 text-xl font-semibold text-center text-second">
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
