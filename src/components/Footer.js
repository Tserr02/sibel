import Component9 from "./Component9";
import PropTypes from "prop-types";
import "./Footer.css";
const Footer = ({ className = "" }) => {
  return (
    <section className={`footer ${className}`}>
      <Component9 />
      <footer className="footer-inner">
        <div className="parent17">
          <div className="div42">© 2026 Сибэл. Все права защищены.</div>
          <div className="parent18">
            <a className="div42 footer-bottom-link" href="/privacy-policy">
              Политика конфиденциальности
            </a>
            <a className="div42 footer-bottom-link" href="/user-agreement">
              Пользовательское соглашение
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
};
Footer.propTypes = {
  className: PropTypes.string,
};
export default Footer;
