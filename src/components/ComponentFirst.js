import IconoirnavArrowLeft from "./IconoirnavArrowLeft";
import PropTypes from "prop-types";
import "./ComponentFirst.css";
const ComponentFirst = ({ className = "" }) => {
  const scrollToContactForm = () => {
    document.getElementById("project-contact-form")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className={`frame-container ${className}`}>
      <div className="frame-wrapper">
        <div className="frame-div">
          <div className="frame-parent2">
            <img
              className="frame-child"
              alt=""
              src="./Frame-1410085861@2x.png"
            />
            <div className="wrapper">
              <b className="b">
                Контроль качества
                <br />
                на каждом этапе
                <br />
                производства
              </b>
            </div>
          </div>
          <section className="frame-section">
            <div className="ellipse-parent">
              <div className="frame-item" />
              <div className="container">
                <h1 className="h1">
                  Производственная электротехническая компания
                </h1>
              </div>
              <div className="div2">
                Изготавливаем электрощиты по типовым
                <br />и индивидуальным схемам заказчика,
                <br />
                используем комплектующие изделия лучших российских и зарубежных
                производителей
              </div>
            </div>
            <IconoirnavArrowLeft
              showTxt
              button="Оставить заявку"
              iconoirnavArrowRight="./iconoir-nav-arrow-right.svg"
              showIconoirnavArrowRight={false}
              onClick={scrollToContactForm}
            />
          </section>
        </div>
      </div>
      <img
        className="frame-inner"
        loading="lazy"
        alt=""
        src="./Ellipse-1.svg"
      />
    </div>
  );
};
ComponentFirst.propTypes = {
  className: PropTypes.string,
};
export default ComponentFirst;
