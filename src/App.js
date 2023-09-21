import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { PROJECTS } from "./constants/constants";
// import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";
import HomePage from "./pages/homePage/HomePage";
import AboutMePage from "./pages/aboutMePage/AboutMePage";
import ProjectPage from "./pages/projectPage/ProjectPage";

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
      "-=1.2"
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

        <Route path="/restil" element={<ProjectPage project={PROJECTS[0]} />} />

        <Route path="/flex" element={<ProjectPage project={PROJECTS[1]} />} />

        <Route
          path="/just_tripppin"
          element={<ProjectPage project={PROJECTS[2]} />}
        />

        <Route
          path="/pdf_form_filler"
          element={<ProjectPage project={PROJECTS[3]} />}
        />
      </Routes>

      <Footer />
    </div>
  );
}
export default App;
