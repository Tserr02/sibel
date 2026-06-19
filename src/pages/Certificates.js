import { useState } from "react";
import Header2 from "../components/Header2";
import Footer from "../components/Footer";
import "./Certificates.css";

const certificates = [
  {
    title: "Сертификат промбезопасности",
    image: "./image-234@2x.png",
    imageClassName: "certificates-image certificates-image-narrow",
  },
  {
    title: "Разрешение на применение ЯКНО, ЯКУ, КРУН, КРУПЭ",
    image: "./image-233@2x.png",
    imageClassName: "certificates-image certificates-image-narrow",
  },
  {
    title: "Свидетельство на товарный знак",
    image: "./image-236@2x.png",
    imageClassName: "certificates-image certificates-image-narrow",
  },
  {
    title: "Сертификат КСО",
    image: "./image-23@2x.png",
    imageClassName: "certificates-image",
  },
  {
    title: "Сертификат НКУ",
    image: "./image-235@2x.png",
    imageClassName: "certificates-image",
  },
  {
    title: "Сертификат КТП",
    image: "./image-231@2x.png",
    imageClassName: "certificates-image",
  },
  {
    title: "Сертификат ЯКНО",
    image: "./image-232@2x.png",
    imageClassName: "certificates-image certificates-image-narrow",
  },
  {
    title: "Сертификат Таврида",
    image: "./image-24@2x.png",
    imageClassName: "certificates-image certificates-image-wide",
  },
];

function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [certificateZoom, setCertificateZoom] = useState(1);

  const openCertificate = (certificate) => {
    setSelectedCertificate(certificate);
    setCertificateZoom(1);
  };

  const closeCertificate = () => {
    setSelectedCertificate(null);
    setCertificateZoom(1);
  };

  const toggleCertificateZoom = () => {
    setCertificateZoom((currentZoom) => (currentZoom === 1 ? 1.667 : 1));
  };

  return (
    <div className="certificates-page">
      <Header2 activePage="certificates" />
      <main className="certificates-main">
        <section className="certificates-hero">
          <div className="certificates-breadcrumbs">
            <a href="/">Главная</a>
            <span>/</span>
            <a href="/certificates">Сертификаты</a>
          </div>
          <div className="certificates-heading">
            <h1>Сертификаты</h1>
            <p>
              Каждое оборудование, выпускаемое нашей компанией,
              сертифицировано в соответствии с российскими и международными
              стандартами безопасности и качества. Мы гарантируем, что все наши
              изделия соответствуют строгим требованиям безопасности и
              техническим регламентам.
            </p>
          </div>
        </section>

        <section className="certificates-grid" aria-label="Список сертификатов">
          {certificates.map((certificate) => (
            <article
              className="certificates-card"
              key={certificate.title}
              tabIndex="0"
              role="button"
              onClick={() => openCertificate(certificate)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  openCertificate(certificate);
                }
              }}
            >
              <div className="certificates-card-media">
                <img
                  className={certificate.imageClassName}
                  src={certificate.image}
                  alt={certificate.title}
                  loading="lazy"
                />
              </div>
              <h2>{certificate.title}</h2>
            </article>
          ))}
        </section>
      </main>
      {selectedCertificate && (
        <div
          className="certificate-modal"
          role="dialog"
          aria-modal="true"
          aria-label={selectedCertificate.title}
          onClick={closeCertificate}
        >
          <div
            className="certificate-modal-content"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="certificate-modal-close"
              type="button"
              aria-label="Закрыть"
              onClick={closeCertificate}
            >
              ×
            </button>
            <div
              className={`certificate-modal-image-wrap${
                certificateZoom > 1 ? " certificate-modal-image-wrap-zoomed" : ""
              }`}
              role="button"
              tabIndex="0"
              aria-label={
                certificateZoom === 1
                  ? "Увеличить изображение"
                  : "Уменьшить изображение"
              }
              onClick={toggleCertificateZoom}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  toggleCertificateZoom();
                }
              }}
            >
              <img
                src={selectedCertificate.image}
                alt={selectedCertificate.title}
                style={{ "--certificate-zoom": certificateZoom }}
              />
            </div>
            <h2>{selectedCertificate.title}</h2>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Certificates;
