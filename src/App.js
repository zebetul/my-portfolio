import { Route, Routes } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import HomePage from "./pages/homePage/HomePage";
import AboutMe from "./pages/aboutMe/AboutMe";
import Project1 from "./pages/projects/project-1/Project1";
import Project2 from "./pages/projects/project-2/Project2";
import Project3 from "./pages/projects/project-3/Project3";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App flex flex-col">
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/about_me" element={<AboutMe />} />

        <Route path="/project_restil" element={<Project1 />} />

        <Route path="/project_flex" element={<Project2 />} />

        <Route path="/project_just_tripppin" element={<Project3 />} />

        <Route path="/project_pdf_form_filler" element={<Project3 />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
