const ProjectPage = ({ project }) => {
  return (
    <main className="project_page max-w-2xl mx-auto mt-32 flex flex-col gap-20">
      <h1 className="project_title text-center text-second text-2xl">
        Project Name
      </h1>

      <section className="project_objective">
        <h2 className="project_section_title mb-2 text-second">
          Backround story & objectives
        </h2>

        <p className="project_section_text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatum, voluptate, quibusdam, quia voluptas quod quos
        </p>
      </section>

      <section className="project_stack">
        <h2 className="project_section_title mb-2 text-second">
          Technical details
        </h2>

        <p className="project_section_text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatum, voluptate, quibusdam, quia voluptas quod quos
        </p>
      </section>

      <section className="project_conclusion">
        <h2 className="project_section_title mb-2 text-second">Conclusions</h2>

        <p className="project_section_text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatum, voluptate, quibusdam, quia voluptas quod quos
        </p>
      </section>
    </main>
  );
};
export default ProjectPage;
