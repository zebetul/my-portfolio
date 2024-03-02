import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { PROJECTS } from "./constants/constants";
// import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";
import HomePage from "./pages/homePage/HomePage";
import AboutMePage from "./pages/aboutMePage/AboutMePage";
import ProjectPage from "./pages/projectPage/ProjectPage";
import CVPage from "./pages/cvPage/CVPage";
import Animation from "./components/Animation";

function App() {
	return (
		<div className="App opacity-0 flex flex-col">
			<Routes>
				<Route
					path="/"
					element={
						<Animation>
							<HomePage />
						</Animation>
					}
				/>

				<Route
					path="/about_me"
					element={<AboutMePage />}
				/>

				<Route
					path="/cv"
					element={<CVPage />}
				/>

				{PROJECTS.map((project) => (
					<Route
						path={project.detailsURL}
						element={
							<ProjectPage
								project={project}
								key={project.detailsURL}
							/>
						}
						key={project.name}
					/>
				))}
			</Routes>

			<Footer />
		</div>
	);
}
export default App;
