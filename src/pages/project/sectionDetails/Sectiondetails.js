const SectionDetails = ({ project }) => {
  const { objectives, backgroundStory, techDetails, stack, whatIHaveLearned } =
    project;

  return (
    <section className="project_details xl:w-1/2 xl:ml-auto my-20 flex flex-col items-center xl:items-start gap-20">
      <article className="project_section max-w-lg">
        <h2 className="project_section_title mb-2 text-second">Objectives</h2>

        <p className="project_section_text text-sm">{objectives}</p>
      </article>

      <article className="project_section max-w-lg">
        <h2 className="project_section_title mb-2 text-second">
          Backround story
        </h2>

        <p className="project_section_text text-sm">{backgroundStory}</p>
      </article>

      <article className="project_section max-w-lg">
        <h2 className="project_section_title mb-2 text-second">
          Technical details
        </h2>

        <p className="project_section_text text-sm">{techDetails}</p>

        <div className="project_stack_container flex flex-row flex-wrap gap-2 mt-3">
          {stack.map((tech) => (
            <span
              className="text-xs bg-second text-accent px-2 py-1 rounded-md"
              key={tech}
            >
              {tech}
            </span>
          ))}
        </div>
      </article>

      <article className="project_section max-w-lg">
        <h2 className="project_section_title mb-2 text-second">
          What I've learned
        </h2>

        <ul className="wil_container flex flex-col gap-2 text-sm">
          {whatIHaveLearned.map((item, index) => (
            <li className="wil_item flex flex-row gap-2" key={index}>
              <span className="wil_item_bullet text-accent">•</span>

              <p className="wil_item_text">{item}</p>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
};
export default SectionDetails;
