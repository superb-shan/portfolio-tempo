import projectData from "./projectsData.json";
import Project from "../../components/Project";
import PageHeader from "../../components/PageHeader";

const Portfolio = () => {
  const ProjectList = () =>
    projectData.map((project, i) => (
      <Project
        key={i}
        title={project.title}
        technologies={project.technologies}
        color={project.bgcolor}
        description={project.description}
      />
    ));

  return (
    <section className="portfolio">
      <PageHeader title="Portfolio" description="View my work" />
      <div className="row">
        <ProjectList />
      </div>
    </section>
  );
};

export default Portfolio;
