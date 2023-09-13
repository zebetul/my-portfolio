import { Route, Routes } from "react-router-dom";
import { PROJECTS } from "./constants/constants";
// import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";
import HomePage from "./pages/homePage/HomePage";
import AboutMe from "./pages/aboutMe/AboutMe";
import ProjectPage from "./pages/project/ProjectPage";

function App() {
  return (
    <div className="App flex flex-col">
      {/* <Navigation /> */}

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/about_me" element={<AboutMe />} />

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
