import { useEffect, useState } from "react";
import SectionTitle from "./sectionTitle/SectionTitle";
import SectionDetails from "./sectionDetails/SectionDetails";

const ProjectPage = ({ project }) => {
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [project]);

	return (
		<div
			className="project_page"
			style={
				isLoaded
					? { opacity: 1, transition: "opacity 0.5s ease-in-out" }
					: { opacity: 0 }
			}>
			<SectionTitle
				project={project}
				setIsLoaded={setIsLoaded}
			/>

			<SectionDetails project={project} />
		</div>
	);
};
export default ProjectPage;
