import { useEffect } from "react";
import AboutMeDetails from "./aboutMeDetails/AboutMeDetails";
import AboutMeHero from "./aboutMeTitle/AboutMeHero";

const AboutMe = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="about_me_page">
      <section className="section_hero xl:fixed xl:-top-10 xl:left-0 xl:w-1/2 xl:h-screen flex flex-col items-center xl:justify-center">
        <AboutMeHero />
      </section>

      <section className="section_details xl:w-1/2 xl:ml-auto flex flex-col items-center xl:items-start py-20 px-4">
        <AboutMeDetails />
      </section>
    </main>
  );
};
export default AboutMe;
