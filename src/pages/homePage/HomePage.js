import SectionHero from "./sectionHero/SectionHero";
import ProjectArticle from "./projectArticle/ProjectArticle";
import { PROJECTS } from "../../constants/constants";

const HomePage = () => {
  console.log(PROJECTS);

  return (
    <main className="home-page mx-auto">
      <SectionHero />

      <section className="section_projects my-5 flex flex-col items-center gap-32">
        {PROJECTS.map((project) => (
          <ProjectArticle project={project} />
        ))}
      </section>
    </main>
  );
};
export default HomePage;
