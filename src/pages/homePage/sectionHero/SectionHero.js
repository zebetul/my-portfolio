import { useState } from "react";
import { Link } from "react-router-dom";
import CustomLink from "../../../components/common/customLink/CustomLink";

const SectionHero = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="section_hero mx-auto xl:fixed xl:-top-20 xl:w-1/2 xl:h-screen h-96 mt-32 xl:mt-0 mb-28 p-10 flex flex-col items-center justify-center">
      <Link to="/about_me" className="cursor-pointer">
        <div
          className="section_hero_container max-w-lg flex flex-col"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <h1 className="intro_animation mb-2">Hi, my name is</h1>

          <h1 className="intro_animation mb-5 text-6xl text-white">
            <span className="text-accent">C</span>
            risti <span className="text-accent">S</span>
            ebeni
          </h1>

          <h1 className="intro_animation mb-10 ml-auto whitespace-nowrap">
            but you can call me
            <span className="ml-4 text-6xl text-white">Zebe</span>
          </h1>

          <div className="intro_animation border-l border-accent pl-5">
            <p className={`text-md mb-2 ${isHovered ? "text-second" : ""}`}>
              I am a dedicated software developer specializing in JavaScript,
              proficient in React and Node.js, with experience in PostgreSQL and
              AWS. I am committed to continuous learning and improving.
            </p>

            <CustomLink
              textContent="more about me"
              isHovered={isHovered}
              arrow={"right"}
            />
          </div>
        </div>
      </Link>
    </section>
  );
};
export default SectionHero;
