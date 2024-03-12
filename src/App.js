import { Route, Routes } from "react-router-dom";
import { PROJECTS } from "./constants/constants";
import HomePage from "./pages/homePage/HomePage";
import AboutMePage from "./pages/aboutMePage/AboutMePage";
import ProjectPage from "./pages/projectPage/ProjectPage";
import CVPage from "./pages/cvPage/CVPage";
import IntroAnimation from "./components/IntroAnimation";
import AppLayout from "./components/AppLayout";

function App() {
	return (
		<Routes>
			<Route element={<AppLayout />}>
				<Route
					index
					element={
						<IntroAnimation>
							<HomePage />
						</IntroAnimation>
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
			</Route>
		</Routes>
	);
}
export default App;
