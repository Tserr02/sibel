import PropTypes from "prop-types";
import "./Component8.css";

const Component8 = ({ className = "" }) => {
  return (
    <div className={`parent15 ${className}`}>
      <div className="main-contact-map">
        <iframe
          title="Сибэл на карте"
          src="https://yandex.ru/map-widget/v1/?z=18&mode=search&text=%D0%A1%D0%B8%D0%B1%D1%8D%D0%BB%2C%20%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D1%8F%2C%20%D0%A2%D0%BE%D0%BC%D1%81%D0%BA%2C%20%D1%83%D0%BB.%20%D0%9F%D1%80%D0%BE%D0%BB%D0%B5%D1%82%D0%B0%D1%80%D1%81%D0%BA%D0%B0%D1%8F%2C%2062%2F2"
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen
        />
      </div>
      <div className="frame-parent15">
        <div className="wrapper2">
          <h2 className="h26">Адрес и контакты</h2>
        </div>
        <div className="parent16">
          <div className="div21">
            634009, Россия, г. Томск,
            <br />
            ул. Пролетарская, 62/2
          </div>
          <div className="e-mail-sibeltomskmailru">
            <b>Телефон:</b>
            <a className="sibeltomskmailru" href="tel:+73822593193">
              {" "}
              +7 (3822) 593-193
            </a>
            <br />
            <a className="sibeltomskmailru" href="tel:+73822404802">
              +7 (3822) 40-48-02
            </a>
          </div>
          <div className="e-mail-sibeltomskmailru">
            <b>E-mail:</b>
            <a className="sibeltomskmailru" href="mailto:sibel.tomsk@mail.ru">
              {" "}
              sibel.tomsk@mail.ru
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

Component8.propTypes = {
  className: PropTypes.string,
};

export default Component8;
