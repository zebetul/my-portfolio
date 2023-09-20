import { ABOUT_ME } from "../../../constants/constants";

const AboutMeDetails = () => {
  return (
    <div className="max-w-lg flex flex-col gap-20">
      <article className="about_article article_stack max-w-lg">
        <div className="stack_title_container mb-5 flex flex-row items-end">
          <h2 className="article_title text-second text-lg">
            Stack and technologies
          </h2>
        </div>

        <div className="stack_container flex flex-row flex-wrap gap-2 mb-5 ml-2">
          {ABOUT_ME.stack.map((tech) => (
            <span
              className="text-xs bg-pills text-accent px-2 py-1 rounded-md"
              key={tech}
            >
              {tech}
            </span>
          ))}
        </div>
      </article>

      <article className="about_article article_tools max-w-lg">
        <div className="tools_title_container mb-5 flex flex-row items-end">
          <h2 className="article_title text-second text-lg">Tools</h2>
        </div>

        <div className="tools_container flex flex-row flex-wrap gap-2 mb-5 ml-2">
          {ABOUT_ME.tools.map((tool) => (
            <span
              className="text-xs bg-pills text-accent px-2 py-1 rounded-md"
              key={tool}
            >
              {tool}
            </span>
          ))}
        </div>
      </article>

      <article className="about_article article_interests">
        <div className="tools_title_container mb-5 flex flex-row items-end">
          <h2 className="article_title text-second text-lg">Interests</h2>
        </div>

        <ul className="interests_list ml-2 flex flex-col gap-4">
          {ABOUT_ME.interests.map((interest, key) => (
            <li
              className="interest_item flex flex-col md:flex-row md:items-start"
              key={key}
            >
              <p className="interest_item_key text-second text-sm whitespace-nowrap">
                <span className="tech_item_bullet mr-2 text-accent text-xl">
                  •
                </span>

                {interest}
              </p>
            </li>
          ))}
        </ul>
      </article>

      <article className="about_article article_description">
        <h2 className="article_title mb-5 text-second text-lg">Who am I?</h2>

        <div className="story_container ml-2 border-l border-accent pl-5 flex flex-col gap-5">
          {ABOUT_ME.description.map((paragraph, index) => (
            <p className="article_text m-0 font-normal" key={index}>
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </div>
  );
};
export default AboutMeDetails;
