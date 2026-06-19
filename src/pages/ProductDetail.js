import { useState } from "react";
import { useParams } from "react-router-dom";
import Header2 from "../components/Header2";
import Footer from "../components/Footer";
import { getProductBySlug } from "../data/products";
import { publicAsset } from "../utils/publicAsset";
import "./ProductDetail.css";

function ProductDetail() {
  const { productSlug } = useParams();
  const product = getProductBySlug(productSlug);
  const [selectedGalleryItem, setSelectedGalleryItem] = useState(null);
  const [galleryZoom, setGalleryZoom] = useState(1);

  const openGalleryItem = (item) => {
    setSelectedGalleryItem(item);
    setGalleryZoom(1);
  };

  const closeGalleryItem = () => {
    setSelectedGalleryItem(null);
    setGalleryZoom(1);
  };

  const toggleGalleryZoom = () => {
    setGalleryZoom((currentZoom) => (currentZoom === 1 ? 1.667 : 1));
  };

  if (!product) {
    return (
      <div className="product-detail-page">
        <Header2 activePage="products" />
        <main className="product-detail-main">
          <section className="product-detail-not-found">
            <h1>Продукт не найден</h1>
            <a href="/products">Вернуться к продукции</a>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="product-detail-page">
      <Header2 activePage="products" />
      <main className="product-detail-main">
        <section className="product-detail-breadcrumbs">
          <a href="/">Главная</a>
          <span>/</span>
          <a href="/products">Продукция</a>
          <span>/</span>
          <span>{product.shortTitle}</span>
        </section>

        <section className="product-detail-hero">
          <div className="product-detail-image">
            <img src={publicAsset(product.heroImage)} alt={product.title} />
          </div>
          <div className="product-detail-intro">
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <div className="product-detail-characteristics">
              <h2>Основные характеристики</h2>
              <ul>
                {product.characteristics.map((characteristic) => (
                  <li key={characteristic}>
                    <img
                      src={publicAsset("./iconoir-flash-solid.svg")}
                      alt=""
                    />
                    <span>{characteristic}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="product-detail-bottom">
              <a className="product-detail-cta" href="/#project-contact-form">
                Рассчитать стоимость
              </a>
              <p className="product-detail-note">{product.note}</p>
            </div>
          </div>
        </section>

        {/*
        <section className="product-detail-download">
          <img src={publicAsset("./merged-asset-1@2x.png")} alt="" />
          <div>
            <h2>Типоисполнения электрощитового оборудования</h2>
            <p>Скачайте файл, чтобы ознакомиться с параметрами модели.</p>
            <a href="/products" className="product-detail-outline-button">
              Скачать файл
            </a>
          </div>
        </section>
        */}

        <section className="product-detail-gallery">
          <h2>Фото нашей продукции</h2>
          <div className="product-detail-gallery-grid">
            {product.gallery.map((item) => (
              <article
                key={`${item.title}-${item.image}`}
                tabIndex="0"
                role="button"
                onClick={() => openGalleryItem(item)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    openGalleryItem(item);
                  }
                }}
              >
                <img
                  src={publicAsset(item.image)}
                  alt={item.title}
                  loading="lazy"
                />
                <b>{item.title}</b>
              </article>
            ))}
          </div>
        </section>
      </main>
      {selectedGalleryItem && (
        <div
          className="product-gallery-modal"
          role="dialog"
          aria-modal="true"
          aria-label={selectedGalleryItem.title}
          onClick={closeGalleryItem}
        >
          <div
            className="product-gallery-modal-content"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="product-gallery-modal-close"
              type="button"
              aria-label="Закрыть"
              onClick={closeGalleryItem}
            >
              x
            </button>
            <div
              className={`product-gallery-modal-image-wrap${
                galleryZoom > 1 ? " product-gallery-modal-image-wrap-zoomed" : ""
              }`}
              role="button"
              tabIndex="0"
              aria-label={
                galleryZoom === 1
                  ? "Увеличить изображение"
                  : "Уменьшить изображение"
              }
              onClick={toggleGalleryZoom}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  toggleGalleryZoom();
                }
              }}
            >
              <img
                src={publicAsset(selectedGalleryItem.image)}
                alt={selectedGalleryItem.title}
                style={{ "--product-gallery-zoom": galleryZoom }}
              />
            </div>
            <h2>{selectedGalleryItem.title}</h2>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default ProductDetail;
