import { useEffect, useState } from "react";
import AboutMeDetails from "./aboutMeDetails/AboutMeDetails";
import AboutMeHero from "./aboutMeHero/AboutMeHero";

const AboutMePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main
      className="about_me_page"
      style={
        isLoaded
          ? { opacity: 1, transition: "opacity 0.5s ease-in-out" }
          : { opacity: 0 }
      }
    >
      <section className="section_hero xl:fixed xl:-top-10 xl:left-0 xl:w-1/2 xl:h-screen flex flex-col items-center xl:justify-center">
        <AboutMeHero setIsLoaded={setIsLoaded} />
      </section>

      <section className="section_details xl:w-1/2 xl:ml-auto flex flex-col items-center xl:items-start py-20 px-4">
        <AboutMeDetails />
      </section>
    </main>
  );
};
export default AboutMePage;
