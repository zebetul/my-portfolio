import { Route, Routes } from "react-router-dom";
import AboutMe from "./pages/aboutMe/AboutMe";
import HomePage from "./pages/homePage/HomePage";
import Project1 from "./pages/projects/project-1/Project1";
import Project2 from "./pages/projects/project-2/Project2";

function App() {
  return (
    <div className="App">
      <h1>App</h1>

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/about_me" element={<AboutMe />} />

        <Route path="/project_1" element={<Project1 />} />

        <Route path="/project_2" element={<Project2 />} />
      </Routes>
    </div>
  );
}

export default App;
