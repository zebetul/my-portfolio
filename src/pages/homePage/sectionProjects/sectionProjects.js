import { useState } from "react";
import { Link } from "react-router-dom";
import CustomLink from "../../../components/common/customLink/CustomLink";
import CustomAnchor from "../../../components/common/customAnchor/CustomAnchor";

const SectionProjects = ({ project }) => {
	const { name, description, image, siteURL, detailsURL } = project;

	const [isHovered, setIsHovered] = useState(false);
	const [isImageHovered, setIsImageHovered] = useState(false);
	const [isTextHovered, setIsTextHovered] = useState(false);

	return (
		<div
			className={`article_animation rounded-sm flex flex-col md:flex-row-reverse gap-5 md:gap-10 px-10 py-16 ${
				isHovered ? "bg-second" : ""
			}`}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}>
			<div
				className="article_text_container max-w-sm flex flex-col cursor-pointer"
				onMouseEnter={() => setIsTextHovered(true)}
				onMouseLeave={() => setIsTextHovered(false)}>
				<Link to={detailsURL}>
					<CustomLink
						textContent={name}
						isHovered={isTextHovered}
						className="mb-3"
						arrow={"right"}
					/>

					<p
						className={`text-sm ml-1 border-l border-accent pl-5 ${
							isHovered ? "text-second" : ""
						}`}>
						{description}
					</p>

					<div className="project_stack_container flex flex-row flex-wrap gap-2 mt-3">
						{project.stack.map((tech) => (
							<span
								className="text-xs bg-pills text-accent px-2 py-1 rounded-md"
								key={tech}>
								{tech}
							</span>
						))}
					</div>
				</Link>
			</div>

			<a
				href={siteURL || null}
				target="_blank"
				rel="noopener noreferrer"
				className="article_image_container"
				onMouseEnter={() => setIsImageHovered(true)}
				onMouseLeave={() => setIsImageHovered(false)}>
				<div
					className={`article_image mt-2 mb-auto w-60  relative rounded-md overflow-hidden ${
						siteURL ? "cursor-pointer" : ""
					}`}>
					<img
						className="article_image w-full h-full object-cover"
						src={image}
						alt={name}
					/>

					<div
						className={`image-overlay bg-first absolute inset-0 ${
							isHovered ? "opacity-0" : "opacity-20"
						}`}></div>
				</div>

				{siteURL && (
					<CustomAnchor
						textContent="website"
						isHovered={isImageHovered}
					/>
				)}
			</a>
		</div>
	);
};
export default SectionProjects;
