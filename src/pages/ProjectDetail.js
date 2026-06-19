import { useState } from "react";
import { useParams } from "react-router-dom";
import Header2 from "../components/Header2";
import Footer from "../components/Footer";
import { getProjectBySlug } from "../data/projects";
import { publicAsset } from "../utils/publicAsset";
import "./ProjectDetail.css";

function ProjectDetail() {
  const { projectSlug } = useParams();
  const project = getProjectBySlug(projectSlug);
  const [selectedProjectImage, setSelectedProjectImage] = useState(null);
  const [projectImageZoom, setProjectImageZoom] = useState(1);

  const openProjectImage = (image) => {
    setSelectedProjectImage(image);
    setProjectImageZoom(1);
  };

  const closeProjectImage = () => {
    setSelectedProjectImage(null);
    setProjectImageZoom(1);
  };

  const toggleProjectImageZoom = () => {
    setProjectImageZoom((currentZoom) => (currentZoom === 1 ? 1.667 : 1));
  };

  if (!project) {
    return (
      <div className="project-detail-page">
        <Header2 activePage="projects" />
        <main className="project-detail-main">
          <section className="project-detail-not-found">
            <h1>Проект не найден</h1>
            <a href="/projects">Вернуться к проектам</a>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  const [mainImage, ...secondaryImages] = project.detailImages;

  return (
    <div className="project-detail-page">
      <Header2 activePage="projects" />
      <main className="project-detail-main">
        <section className="project-detail-hero">
          <div className="project-detail-breadcrumbs">
            <a href="/">Главная</a>
            <span>/</span>
            <a href="/projects">Реализованные проекты</a>
            <span>/</span>
            <span>{project.title}</span>
          </div>
          <h1>{project.title}</h1>
        </section>

        <section className="project-detail-card">
          <div className="project-detail-media">
            <img
              className="project-detail-main-image"
              src={publicAsset(mainImage || project.image)}
              alt={project.title}
              role="button"
              tabIndex="0"
              onClick={() => openProjectImage(mainImage || project.image)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  openProjectImage(mainImage || project.image);
                }
              }}
            />
            {secondaryImages.length > 0 && (
              <div className="project-detail-thumbs">
                {secondaryImages.map((image) => (
                  <img
                    key={image}
                    src={publicAsset(image)}
                    alt={project.title}
                    loading="lazy"
                    role="button"
                    tabIndex="0"
                    onClick={() => openProjectImage(image)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        openProjectImage(image);
                      }
                    }}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="project-detail-info">
            <section>
              <h2>Заказчик</h2>
              <p>{project.customer}</p>
            </section>
            <section>
              <h2>Оборудование</h2>
              <p>{project.product}</p>
            </section>
            <section>
              <h2>Год исполнения</h2>
              <p>{project.yearLabel}</p>
            </section>
            <section>
              <h2>О проекте</h2>
              <p>{project.description}</p>
            </section>
          </div>
        </section>
      </main>
      {selectedProjectImage && (
        <div
          className="project-detail-image-modal"
          role="dialog"
          aria-modal="true"
          aria-label={project.title}
          onClick={closeProjectImage}
        >
          <div
            className="project-detail-image-modal-content"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="project-detail-image-modal-close"
              type="button"
              aria-label="Закрыть"
              onClick={closeProjectImage}
            >
              x
            </button>
            <div
              className={`project-detail-image-modal-wrap${
                projectImageZoom > 1
                  ? " project-detail-image-modal-wrap-zoomed"
                  : ""
              }`}
              role="button"
              tabIndex="0"
              aria-label={
                projectImageZoom === 1
                  ? "Увеличить изображение"
                  : "Уменьшить изображение"
              }
              onClick={toggleProjectImageZoom}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  toggleProjectImageZoom();
                }
              }}
            >
              <img
                src={publicAsset(selectedProjectImage)}
                alt={project.title}
                style={{ "--project-detail-image-zoom": projectImageZoom }}
              />
            </div>
            <h2>{project.title}</h2>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default ProjectDetail;
