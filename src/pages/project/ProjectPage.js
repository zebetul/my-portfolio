import { useEffect } from "react";

const ProjectPage = ({ project }) => {
  const {
    name,
    stack,
    image,
    siteURL,
    objectives,
    backgroundStory,
    techDetails,
    whatIHaveLearned,
  } = project;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="project_page my-32">
      <section className="project_image xl:fixed xl:-top-10 xl:w-1/2 xl:h-screen flex flex-col xl:justify-center items-center">
        <h1 className="project_title text-center text-second text-2xl">
          {name}
        </h1>

        <div className="image_container relative max-w-md rounded-md overflow-hidden">
          <img
            className="project_image_img w-full h-auto"
            src={image}
            alt={name}
          />

          <div className="image-overlay bg-first absolute inset-0 opacity-30"></div>
        </div>
      </section>

      <section className="project_details xl:w-1/2 xl:ml-auto mt-20 flex flex-col items-center xl:items-start gap-20">
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
    </main>
  );
};
export default ProjectPage;
