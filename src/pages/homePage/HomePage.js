import { useEffect } from "react";
import { PiArrowDownLight } from "react-icons/pi";
import { PROJECTS } from "../../constants/constants";
import SectionHero from "./sectionHero/SectionHero";
import ProjectArticle from "./projectArticle/ProjectArticle";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="home-page">
      <SectionHero />

      <section className="section_projects xl:w-1/2 xl:ml-auto flex flex-col items-center xl:items-start">
        <h2 className="section_projects__title article_animation max-w-lg w-full xl:ml-10 mb-0 xl:mt-10 text-center text-xl font-semibold text-second">
          Projects
        </h2>

        {window.innerWidth < 1280 && (
          <PiArrowDownLight className="article_animation mt-2" size={25} />
        )}

        {PROJECTS.map((project) => (
          <ProjectArticle project={project} key={project.name} />
        ))}
      </section>
    </main>
  );
};
export default HomePage;
