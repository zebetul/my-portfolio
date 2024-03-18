import { AiFillGithub, AiOutlineCheck } from "react-icons/ai";

const SectionDetails = ({ project }) => {
	const {
		objective,
		backgroundStory,
		techDetails,
		stack,
		whatIHaveLearned,
		gitHub,
	} = project;

	return (
		<section className="project_details xl:w-1/2 xl:ml-auto my-20 flex flex-col items-center xl:items-start gap-20 px-4">
			<article className="project_article article_objectives max-w-lg mr-auto w-full">
				<h2 className="article_title mb-5 text-second text-lg">
					Main Objective
				</h2>

				<p className="article_text ml-2 border-l border-accent pl-5 font-normal">
					{objective}
				</p>
			</article>

			<article className="project_article article_tech max-w-lg w-full">
				<div className="tech_title_container mb-5 flex flex-row items-end">
					<h2 className="article_title text-second text-lg">
						Technical details
					</h2>

					{gitHub && (
						<a
							className="footer_link ml-5"
							target="_blank"
							rel="noopener noreferrer"
							href={gitHub}>
							<AiFillGithub size={30} />
						</a>
					)}
				</div>

				<div className="tech_container ml-2">
					<div className="project_stack_container flex flex-row flex-wrap gap-2 mb-5 ml-2">
						{stack.map((tech) => (
							<span
								className="text-xs bg-pills text-accent px-2 py-1 rounded-md"
								key={tech}>
								{tech}
							</span>
						))}
					</div>

					<ul className="tech_list flex flex-col gap-6">
						{Object.entries(techDetails).map(([key, value]) => (
							<li
								className="tech_item flex flex-col md:flex-row md:items-start"
								key={key}>
								<p className="tech_item_key w-1/4 text-second text-sm whitespace-nowrap">
									<span className="tech_item_bullet mr-2 text-accent text-xl">
										•
									</span>

									{`${key}:`}
								</p>

								<p className="tech_item_text w-3/4 pl-4 pt-1.5 text-sm">
									{value}
								</p>
							</li>
						))}
					</ul>
				</div>
			</article>

			<article className="project_article article_wil max-w-lg">
				<h2 className="article_title mb-5 text-second text-lg">
					What I've learned
				</h2>

				<ul className="wil_container ml-0 flex flex-col gap-6">
					{whatIHaveLearned.map((item, index) => (
						<li
							className="wil_item flex flex-row"
							key={index}>
							<AiOutlineCheck
								className="text-accent w-1/12"
								size={20}
							/>

							<p className="wil_item_text w-11/12 text-sm">{item}</p>
						</li>
					))}
				</ul>
			</article>

			{backgroundStory && (
				<article className="project_article article_story max-w-lg">
					<h2 className="article_title mb-5 text-second text-lg">
						Background story
					</h2>

					<div className="story_container ml-2 border-l border-accent pl-5 flex flex-col gap-5">
						{backgroundStory?.map((paragraph, index) => (
							<p
								className="article_text m-0 font-normal"
								key={index}>
								{paragraph}
							</p>
						))}
					</div>
				</article>
			)}
		</section>
	);
};
export default SectionDetails;
