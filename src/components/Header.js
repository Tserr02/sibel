import SearchBox from "./SearchBox";
import PropTypes from "prop-types";
import { publicAsset } from "../utils/publicAsset";
import "./Header.css";

const Header = ({ className = "" }) => {
  return (
    <header className={`frame-header ${className}`}>
      <a className="header-logo-link" href="/">
        <img
          className="vector-icon3"
          alt="Сибэл"
          src={publicAsset("./Vector.svg")}
        />
      </a>
      <nav className="frame-nav">
        <a className="div45" href="/products">
          Продукция
        </a>
        <a className="div45" href="/about">
          О компании
        </a>
        <a className="div45" href="/certificates">
          Сертификаты
        </a>
        <a className="div45" href="/projects">
          Проекты
        </a>
        <a className="div45" href="/contacts">
          Контакты
        </a>
      </nav>
      <div className="frame-parent17">
        <div className="frame-parent18">
          <a className="sibeltomskmailru-wrapper" href="tel:+73822593193">
            <div className="div50">+7(3822) 593-193</div>
          </a>
          <a
            className="sibeltomskmailru-wrapper"
            href="mailto:sibel.tomsk@mail.ru"
          >
            <div className="div50">sibel.tomsk@mail.ru</div>
          </a>
        </div>
        <SearchBox variant="dark" />
      </div>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
