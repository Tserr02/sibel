import Header2 from "../components/Header2";
import Footer from "../components/Footer";
import { projects } from "../data/projects";
import { publicAsset } from "../utils/publicAsset";
import "./Projects.css";

function Projects() {
  return (
    <div className="projects-page">
      <Header2 activePage="projects" />
      <main className="projects-main">
        <section className="projects-hero">
          <div className="projects-breadcrumbs">
            <a href="/">Главная</a>
            <span>/</span>
            <a href="/projects">Реализованные проекты</a>
          </div>
          <h1>Реализованные проекты</h1>
        </section>

        <section className="projects-grid" aria-label="Реализованные проекты">
          {projects.map((project) => (
            <a
              className={`projects-card${
                project.accent ? " projects-card-accent" : ""
              }`}
              href={`/projects/${project.slug}`}
              key={project.slug}
            >
              <img
                src={publicAsset(project.image)}
                alt={project.title}
                loading="lazy"
              />
              <div className="projects-card-body">
                <div>
                  <h2>{project.title}</h2>
                  <p>{project.product}</p>
                </div>
                <div className="projects-card-meta">
                  <span>{project.customer}</span>
                  <span>{project.year}</span>
                </div>
              </div>
            </a>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Projects;
