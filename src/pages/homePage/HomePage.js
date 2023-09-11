import SectionHero from "./sectionHero/SectionHero";
import ProjectArticle from "./projectArticle/ProjectArticle";
import { PROJECTS } from "../../constants/constants";

const HomePage = () => {
  return (
    <main className="home-page mx-auto">
      <SectionHero />

      <section className="section_projects my-5 flex flex-col items-center gap-20">
        <h2 className="section_projects__title text-2xl font-semibold text-center text-second">
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
