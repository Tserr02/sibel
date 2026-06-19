import Header2 from "../components/Header2";
import Footer from "../components/Footer";
import { products } from "../data/products";
import { publicAsset } from "../utils/publicAsset";
import "./Products.css";

function Products() {
  return (
    <div className="products-page">
      <Header2 activePage="products" />
      <main className="products-main">
        <section className="products-hero">
          <div className="products-hero-text">
            <div className="certificates-breadcrumbs">
              <a href="/">Главная</a>
              <span>/</span>
              <a href="/products">Продукция</a>
            </div>
            <h1 className="products-title">Продукция</h1>
          </div>
        </section>
        <section className="products-grid" aria-label="Каталог продукции">
          {products.map((product) => (
            <a
              className="products-card"
              href={`/products/${product.slug}`}
              key={product.slug}
            >
              <div className="products-card-media">
                <img
                  src={publicAsset(product.image)}
                  alt={product.title}
                  loading="lazy"
                />
              </div>
              <div className="products-card-body">
                <h2>{product.title}</h2>
              </div>
            </a>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Products;
