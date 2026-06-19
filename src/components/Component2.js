import IconoirnavArrowLeft from "./IconoirnavArrowLeft";
import PropTypes from "prop-types";
import "./Component2.css";
const Component2 = ({ className = "" }) => {
  const openProductsPage = () => {
    window.location.href = "/products";
  };

  return (
    <div className={`frame-parent3 ${className}`}>
      <div className="parent">
        <h2 className="h2">{`Основные направления деятельности `}</h2>
        <IconoirnavArrowLeft
          iconoirnavArrowLeftBackgroundColor="rgba(230, 81, 0, 0.21)"
          iconoirnavArrowLeftGap="4px"
          iconoirnavArrowLeftBorder="none"
          iconoirnavArrowLeftPadding="0px 24px"
          iconoirnavArrowLeftHeight="64px"
          iconoirnavArrowLeftBorderRadius="16px"
          iconoirnavArrowLeftWidth="unset"
          iconoirnavArrowLeftMargin="unset"
          iconoirnavArrowLeftPosition="unset"
          iconoirnavArrowLeftTop="unset"
          iconoirnavArrowLeftLeft="unset"
          iconoirnavArrowLeftBackdropFilter="unset"
          showTxt
          button="Смотреть продукцию"
          buttonColor="#e65100"
          iconoirnavArrowRight="./iconoir-nav-arrow-right.svg"
          showIconoirnavArrowRight={false}
          iconoirnavArrowRightHeight="24px"
          iconoirnavArrowRightMaxHeight="unset"
          onClick={openProductsPage}
        />
      </div>
      <div className="frame-parent4">
        <section className="group">
          <div className="div3">
            Производство электрощитового оборудования и аппаратуры,
            низковольтных комплектных устройств (НКУ), устройств распределения
            электроэнергии.
          </div>
          <div className="vector-parent">
            <img className="vector-icon" alt="" src="./Vector-3.svg" />
            <img
              className="image-202602031716-1-icon"
              loading="lazy"
              alt=""
              src="./Image-202602031716-1@2x.png"
            />
            <div className="parent2">
              <h3 className="h3">КТП</h3>
              <div className="div4">
                Комплектные трансформаторные подстанции
              </div>
            </div>
          </div>
        </section>
        <div className="highly-realistic-3d-2k-2026020-parent">
          <img
            className="highly-realistic-3d-2k-2026020-icon"
            loading="lazy"
            alt=""
            src="./Highly-realistic-3d-2k-202602031729-1@2x.png"
          />
          <div className="parent3">
            <h3 className="h32">ЩО70</h3>
            <div className="div5">Панели распределительных щитов</div>
          </div>
          <img
            className="iconoirarrow-up-right"
            alt=""
            src="./iconoir-arrow-up-right.svg"
          />
        </div>
        <div className="vector-group">
          <img className="frame-child2" alt="" src="./Vector-3.svg" />
          <img
            className="highly-realistic-3d-2k-2026020-icon2"
            loading="lazy"
            alt=""
            src="./Highly-realistic-3d-2k-202602031745-1@2x.png"
          />
          <div className="parent4">
            <h3 className="h32">ЩЭ</h3>
            <div className="div6">Щиты этажные</div>
          </div>
        </div>
      </div>
    </div>
  );
};
Component2.propTypes = {
  className: PropTypes.string,
};
export default Component2;
