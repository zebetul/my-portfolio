import { useState } from "react";
import CustomLink from "../../../components/common/customLink/CustomLink";
import { Link } from "react-router-dom";

const SectionHero = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link to="/about_me">
      <section className="section_hero mx-auto xl:fixed xl:-top-10 xl:w-1/2 xl:h-screen h-96 mt-32 xl:mt-0 mb-40 p-10 flex flex-col items-center justify-center cursor-pointer">
        <div
          className="section_hero_container max-w-lg flex flex-col"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <h1 className="section_hero__title mb-2">Hi, my name is</h1>

          <h1 className="section_hero__title mb-5 text-4xl text-white">
            Cristian Sebeni
          </h1>

          <h1 className="section_hero__title mb-10 ml-auto">
            but you can call me
            <span className="ml-4 text-4xl text-white">Zebe</span>
          </h1>

          <p
            className={`section_hero_subtitle text-md mb-2
      ${isHovered ? "text-second" : ""}`}
          >
            I am a dedicated software developer specializing in JavaScript,
            proficient in React and Node.js, with experience in PostgreSQL and
            AWS. I am committed to continuous learning in web development.
          </p>

          <CustomLink textContent="more about me" isHovered={isHovered} />
        </div>
      </section>
    </Link>
  );
};
export default SectionHero;
