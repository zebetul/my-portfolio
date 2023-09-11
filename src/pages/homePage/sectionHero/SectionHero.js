import { Link } from "react-router-dom";
import { PiArrowRightLight } from "react-icons/pi";

const SectionHero = () => {
  return (
    <section className="section_hero mx-auto h-96 mt-20 mb-40 max-w-lg p-10 flex flex-col place-content-center">
      <h1 className="section_hero__title">Hi, my name is</h1>

      <h1 className="section_hero__title md:mb-0 text-4xl text-white">
        Cristian Sebeni
      </h1>

      <h1 className="section_hero__title mb-5 ml-auto">
        but you can call me
        <span className="ml-4 text-4xl text-white">Zebe</span>
      </h1>

      <p className="section_hero__subtitle mb-2 text-lg">
        I am a beginner but passionate software developer specialized in
        JavaScript, familiar with React and Node.js. I also worked with
        PostgreSQL and AWS.
      </p>

      <Link to="/about_me" className="flex flex-row items-center text-second">
        more about me
        <PiArrowRightLight className="ml-1" />
      </Link>
    </section>
  );
};
export default SectionHero;
