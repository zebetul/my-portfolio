import { useState } from "react";
import CustomLink from "../../../components/common/customLink/CustomLink";
import { Link } from "react-router-dom";

const SectionHero = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="section_hero mx-auto xl:fixed xl:top-0 xl:right-1/2 xl:w-1/2 h-96 mt-32 mb-40 max-w-lg p-10 flex flex-col place-content-center">
      <h1 className="section_hero__title mb-2">Hi, my name is</h1>

      <h1 className="section_hero__title mb-5 text-4xl text-white">
        Cristian Sebeni
      </h1>

      <h1 className="section_hero__title mb-10 ml-auto">
        but you can call me
        <span className="ml-4 text-4xl text-white">Zebe</span>
      </h1>

      <div
        className="cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link to="/about_me">
          <p
            className={`section_hero_subtitle text-md
      ${isHovered ? "text-second" : ""}`}
          >
            I am a dedicated and aspiring software developer with a
            specialization in JavaScript, demonstrating proficiency in React and
            Node.js. My experience extends to working with databases like
            PostgreSQL and cloud technologies on platforms such as AWS. I am
            committed to continuous learning and growth in the ever-evolving
            field of web development.
          </p>

          <CustomLink textContent="more about me" isHovered={isHovered} />
        </Link>
      </div>
    </section>
  );
};
export default SectionHero;
