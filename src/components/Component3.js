import PropTypes from "prop-types";
import "./Component3.css";
const Component3 = ({ className = "" }) => {
  return (
    <div className={`parent5 ${className}`}>
      <h2 className="h22">О компании</h2>
      <div className="parent6">
        <img
          className="icon"
          loading="lazy"
          alt=""
          src="./20181226-183728-2@2x.png"
        />
        <section className="frame-parent5">
          <div className="parent7">
            <h3 className="h34">
              <span className="span">Налаженное</span>
              <span className="span2">{` `}</span>
              <span className="span">производство</span>
              <span className="span2"> и четкие сроки</span>
            </h3>
            <div className="div7">
              Продукция «СИБЭЛ» применяется в системах электроснабжения
              промышленных предприятий, на объектах городского
              <br />и жилищно-коммунального хозяйства, в строительстве и
              энергетике.
              <br />
              Все выпускаемые изделия имеют необходимые сертификаты
              соответствия. Особое внимание мы уделяем качеству сборки.
              <br />
              Каждое изделие проходит проверку и приёмочный контроль перед
              отгрузкой. Мы тщательно прорабатываем конструктивные
              <br />и монтажные решения, чтобы оборудование было надёжным,
              безопасным и удобным в эксплуатации. Важной частью нашей работы
              является соблюдение согласованных сроков производства.
            </div>
          </div>
          <div className="frame-parent6">
            <div className="frame-parent7">
              <div className="frame">
                <h3 className="h35">24 года опыта</h3>
              </div>
              <div className="vector-container">
                <img className="frame-child3" alt="" src="./Vector-5.svg" />
                <h1 className="h12">24</h1>
              </div>
            </div>
            <img
              className="image-10-icon"
              loading="lazy"
              alt=""
              src="./image-10@2x.png"
            />
          </div>
        </section>
      </div>
    </div>
  );
};
Component3.propTypes = {
  className: PropTypes.string,
};
export default Component3;
