import { useState, useEffect } from "react";
import { PiArrowDownLight } from "react-icons/pi";
import { PROJECTS } from "../../constants/constants";
import SectionHero from "./sectionHero/SectionHero";
import SectionProjects from "./sectionProjects/sectionProjects";

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main
      className={`home-page ${
        isVisible
          ? "opacity-1 transition-opacity duration-500 ease-in-out"
          : " opacity-0"
      }`}
    >
      <SectionHero />

      <section className="section_projects xl:w-1/2 xl:ml-auto flex flex-col items-center xl:items-start">
        <h2 className="section_projects__title article_animation max-w-lg w-full xl:ml-10 mb-0 xl:mt-10 text-center text-xl font-semibold text-second">
          Projects
        </h2>

        {window.innerWidth < 1280 && (
          <PiArrowDownLight className="article_animation mt-2" size={25} />
        )}

        {PROJECTS.map((project) => (
          <SectionProjects project={project} key={project.name} />
        ))}
      </section>
    </main>
  );
};
export default HomePage;
