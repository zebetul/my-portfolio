import { Link } from "react-router-dom";
import { PiArrowUpRightLight } from "react-icons/pi";

const SectionHero = () => {
  return (
    <section className="section_hero h-96 mt-10 p-5 flex flex-col place-content-center">
      <h1 className="section_hero__title text-2xl text-second">Hi,</h1>

      <h1 className="section_hero__title text-2xl text-second">
        My name is Cristi Sebeni
      </h1>

      <h1 className="section_hero__title text-2xl text-second">
        but you can call me Zebe
      </h1>

      <p className="section_hero__subtitle">
        I am a passionate software developer who is eager to learn more about
        information technology and its applications.
        <span className="inline-block">
          <Link
            to="/about_me"
            className="ml-2 flex flex-row items-center text-sm"
          >
            more about me <PiArrowUpRightLight />
          </Link>
        </span>
      </p>
    </section>
  );
};
export default SectionHero;
