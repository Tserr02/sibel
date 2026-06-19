import { useMemo } from "react";
import SearchBox from "./SearchBox";
import PropTypes from "prop-types";
import { publicAsset } from "../utils/publicAsset";
import "./Header2.css";
const Header2 = ({
  className = "",
  activePage = "products",
  frameNavMargin,
}) => {
  const frameNavStyle = useMemo(() => {
    return {
      margin: frameNavMargin,
    };
  }, [frameNavMargin]);
  return (
    <header className={`header2 ${className}`}>
      <a className="header2-logo-link" href="/">
        <img
          className="header2-logo"
          alt="Сибэл"
          src={publicAsset("./Vector2.svg")}
        />
      </a>
      <nav className="header2-nav" style={frameNavStyle}>
        <a
          className={`header2-nav-item ${
            activePage === "products" ? "header2-nav-item-active" : ""
          }`}
          href="/products"
        >
          Продукция
        </a>
        <a
          className={`header2-nav-item ${
            activePage === "about" ? "header2-nav-item-active" : ""
          }`}
          href="/about"
        >
          О компании
        </a>
        <a
          className={`header2-nav-item ${
            activePage === "certificates" ? "header2-nav-item-active" : ""
          }`}
          href="/certificates"
        >
          Сертификаты
        </a>
        <a
          className={`header2-nav-item ${
            activePage === "projects" ? "header2-nav-item-active" : ""
          }`}
          href="/projects"
        >
          Проекты
        </a>
        <a
          className={`header2-nav-item ${
            activePage === "contacts" ? "header2-nav-item-active" : ""
          }`}
          href="/contacts"
        >
          Контакты
        </a>
      </nav>
      <div className="header2-contacts">
        <div className="header2-contact-list">
          <a className="header2-contact" href="tel:+73822593193">
            +7(3822) 593-193
          </a>
          <a className="header2-contact" href="mailto:sibel.tomsk@mail.ru">
            sibel.tomsk@mail.ru
          </a>
        </div>
        <SearchBox />
      </div>
    </header>
  );
};
Header2.propTypes = {
  className: PropTypes.string,
  activePage: PropTypes.string,
  frameNavMargin: PropTypes.string,
};
export default Header2;
