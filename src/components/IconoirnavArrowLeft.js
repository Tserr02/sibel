import { useMemo } from "react";
import PropTypes from "prop-types";
import { publicAsset } from "../utils/publicAsset";
import "./IconoirnavArrowLeft.css";
const IconoirnavArrowLeft = ({
  className = "",
  iconoirnavArrowLeftBackgroundColor,
  iconoirnavArrowLeftGap,
  iconoirnavArrowLeftBorder,
  iconoirnavArrowLeftPadding,
  iconoirnavArrowLeftHeight,
  iconoirnavArrowLeftBorderRadius,
  iconoirnavArrowLeftWidth,
  iconoirnavArrowLeftMargin,
  iconoirnavArrowLeftPosition,
  iconoirnavArrowLeftTop,
  iconoirnavArrowLeftLeft,
  iconoirnavArrowLeftBackdropFilter,
  showTxt,
  button,
  buttonColor,
  iconoirnavArrowRight,
  showIconoirnavArrowRight,
  iconoirnavArrowRightHeight,
  iconoirnavArrowRightMaxHeight,
  onClick,
  disabled,
}) => {
  const iconoirnavArrowLeftStyle = useMemo(() => {
    return {
      backgroundColor: iconoirnavArrowLeftBackgroundColor,
      gap: iconoirnavArrowLeftGap,
      border: iconoirnavArrowLeftBorder,
      padding: iconoirnavArrowLeftPadding,
      height: iconoirnavArrowLeftHeight,
      borderRadius: iconoirnavArrowLeftBorderRadius,
      width: iconoirnavArrowLeftWidth,
      margin: iconoirnavArrowLeftMargin,
      position: iconoirnavArrowLeftPosition,
      top: iconoirnavArrowLeftTop,
      left: iconoirnavArrowLeftLeft,
      backdropFilter: iconoirnavArrowLeftBackdropFilter,
    };
  }, [
    iconoirnavArrowLeftBackgroundColor,
    iconoirnavArrowLeftGap,
    iconoirnavArrowLeftBorder,
    iconoirnavArrowLeftPadding,
    iconoirnavArrowLeftHeight,
    iconoirnavArrowLeftBorderRadius,
    iconoirnavArrowLeftWidth,
    iconoirnavArrowLeftMargin,
    iconoirnavArrowLeftPosition,
    iconoirnavArrowLeftTop,
    iconoirnavArrowLeftLeft,
    iconoirnavArrowLeftBackdropFilter,
  ]);
  const buttonStyle = useMemo(() => {
    return {
      color: buttonColor,
    };
  }, [buttonColor]);
  const iconoirnavArrowRightStyle = useMemo(() => {
    return {
      height: iconoirnavArrowRightHeight,
      maxHeight: iconoirnavArrowRightMaxHeight,
    };
  }, [iconoirnavArrowRightHeight, iconoirnavArrowRightMaxHeight]);
  return (
    <button
      className={`btn ${className}`}
      style={iconoirnavArrowLeftStyle}
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      <img
        className="iconoirnav-arrow-left"
        alt=""
        src={publicAsset("./iconoir-nav-arrow-left.svg")}
      />
      {!!showTxt && (
        <div className="txt">
          <div className="button" style={buttonStyle}>
            {button}
          </div>
        </div>
      )}
      {!!showIconoirnavArrowRight && (
        <img
          className="iconoirnav-arrow-right"
          alt=""
          src={publicAsset(iconoirnavArrowRight)}
          style={iconoirnavArrowRightStyle}
        />
      )}
    </button>
  );
};
IconoirnavArrowLeft.propTypes = {
  className: PropTypes.string,
  showTxt: PropTypes.bool,
  button: PropTypes.string,
  iconoirnavArrowRight: PropTypes.string,
  showIconoirnavArrowRight: PropTypes.bool,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  /** Style props */
  iconoirnavArrowLeftBackgroundColor: PropTypes.string,
  iconoirnavArrowLeftGap: PropTypes.string,
  iconoirnavArrowLeftBorder: PropTypes.string,
  iconoirnavArrowLeftPadding: PropTypes.string,
  iconoirnavArrowLeftHeight: PropTypes.string,
  iconoirnavArrowLeftBorderRadius: PropTypes.string,
  iconoirnavArrowLeftWidth: PropTypes.string,
  iconoirnavArrowLeftMargin: PropTypes.string,
  iconoirnavArrowLeftPosition: PropTypes.string,
  iconoirnavArrowLeftTop: PropTypes.string,
  iconoirnavArrowLeftLeft: PropTypes.string,
  iconoirnavArrowLeftBackdropFilter: PropTypes.string,
  buttonColor: PropTypes.string,
  iconoirnavArrowRightHeight: PropTypes.string,
  iconoirnavArrowRightMaxHeight: PropTypes.string,
};
export default IconoirnavArrowLeft;
