import IconoirnavArrowLeft from "./IconoirnavArrowLeft";
import PropTypes from "prop-types";
import "./Component5.css";
const Component5 = ({ className = "" }) => {
  const openCertificatesPage = () => {
    window.location.href = "/certificates";
  };

  return (
    <section className={`frame-parent9 ${className}`}>
      <div className="frame-parent10">
        <div className="parent9">
          <h1 className="h13">
            <span className="span5">Сертифицированное</span>
            <span className="span6">
              {" "}
              производство
              <br />и продукция
            </span>
          </h1>
          <div className="div8">
            Производство и электрощитовое оборудование СИБЭЛ имеют необходимые
            сертификаты и разрешительную документацию, подтверждающие
            соответствие требованиям безопасности, промышленным стандартам и
            техническим регламентам.
          </div>
        </div>
        <IconoirnavArrowLeft
          iconoirnavArrowLeftBackgroundColor="transparent"
          iconoirnavArrowLeftGap="4px"
          iconoirnavArrowLeftBorder="1px solid #737373"
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
          button="Подробнее"
          buttonColor="rgba(49, 49, 49, 0.7)"
          iconoirnavArrowRight="./iconoir-nav-arrow-right.svg"
          showIconoirnavArrowRight
          iconoirnavArrowRightHeight="24px"
          iconoirnavArrowRightMaxHeight="unset"
          onClick={openCertificatesPage}
        />
      </div>
      <div className="ellipse-group">
        <div className="ellipse-div" />
        <img className="image-13-icon" alt="" src="./image-13@2x.png" />
        <div className="image-11-wrapper">
          <img
            className="image-11-icon"
            loading="lazy"
            alt=""
            src="./image-11@2x.png"
          />
        </div>
        <img className="image-12-icon" alt="" src="./image-12@2x.png" />
      </div>
    </section>
  );
};
Component5.propTypes = {
  className: PropTypes.string,
};
export default Component5;
