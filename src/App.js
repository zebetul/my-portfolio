import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { PROJECTS } from "./constants/constants";
// import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";
import HomePage from "./pages/homePage/HomePage";
import AboutMePage from "./pages/aboutMePage/AboutMePage";
import ProjectPage from "./pages/projectPage/ProjectPage";
import CVPage from "./pages/cvPage/CVPage";

function App() {
  const introAnimation = () => {
    // eslint-disable-next-line no-undef
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    tl.fromTo(
      ".intro_animation",
      {
        y: 20,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.7,
      }
    ).fromTo(
      ".article_animation",
      {
        y: 20,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.2,
      },
      "-=1.0"
    );

    // eslint-disable-next-line no-undef
    gsap.to(".App", {
      opacity: 1,
    });
  };

  useEffect(() => {
    introAnimation();
  }, []);

  return (
    <div className="App opacity-0 flex flex-col">
      {/* <Navigation /> */}

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/about_me" element={<AboutMePage />} />

        <Route path="/cv" element={<CVPage />} />

        {PROJECTS.map((project) => (
          <Route
            path={project.detailsURL}
            element={<ProjectPage project={project} key={project.detailsURL} />}
            key={project.name}
          />
        ))}
      </Routes>

      <Footer />
    </div>
  );
}
export default App;
