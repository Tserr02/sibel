import IconoirnavArrowLeft from "./IconoirnavArrowLeft";
import FrameComponent from "./FrameComponent";
import PropTypes from "prop-types";
import "./Component7.css";
const Component7 = ({ className = "" }) => {
  const openProjectsPage = () => {
    window.location.href = "/projects";
  };

  return (
    <div className={`frame-parent12 ${className}`}>
      <div className="parent12">
        <h2 className="h25">Реализованные проекты</h2>
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
          button="Смотреть еще"
          buttonColor="rgba(49, 49, 49, 0.7)"
          iconoirnavArrowRight="./iconoir-nav-arrow-right.svg"
          showIconoirnavArrowRight
          iconoirnavArrowRightHeight="24px"
          iconoirnavArrowRightMaxHeight="unset"
          onClick={openProjectsPage}
        />
      </div>
      <div className="frame-parent13">
        <FrameComponent
          image19="./image-19@2x.png"
          prop="Производство и поставка КТП для объектов нефтегазовой отрасли"
          prop1="ПАО «Роснефть»"
          prop2="2022"
        />
        <FrameComponent
          image19="./image-16@2x.png"
          prop="Объект электроснабжения для газовой отрасли"
          prop1="ООО «Томскгазпром»"
          prop2="2019"
        />
        <FrameComponent
          image19="./image-17@2x.png"
          image19IconBorderRadius="16px"
          prop="Производство и поставка КТП для объектов транспортной инфраструктуры"
          prop1="РЖД"
          prop2="2020"
        />
      </div>
    </div>
  );
};
Component7.propTypes = {
  className: PropTypes.string,
};
export default Component7;
