import { useMemo } from "react";
import PropTypes from "prop-types";
import "./FrameComponent.css";
const FrameComponent = ({
  className = "",
  image19,
  image19IconBorderRadius,
  prop,
  prop1,
  prop2,
}) => {
  const image19IconStyle = useMemo(() => {
    return {
      borderRadius: image19IconBorderRadius,
    };
  }, [image19IconBorderRadius]);
  return (
    <section className={`image-19-parent ${className}`}>
      <img
        className="image-19-icon"
        loading="lazy"
        alt=""
        src={image19}
        style={image19IconStyle}
      />
      <div className="frame-parent11">
        <div className="parent10">
          <b className="b2">{prop}</b>
          <div className="div15">Комплектная трансформаторная подстанция</div>
        </div>
        <div className="parent11">
          <div className="div16">{prop1}</div>
          <div className="div16">{prop2}</div>
        </div>
      </div>
    </section>
  );
};
FrameComponent.propTypes = {
  className: PropTypes.string,
  image19: PropTypes.string,
  prop: PropTypes.string,
  prop1: PropTypes.string,
  prop2: PropTypes.string,
  /** Style props */
  image19IconBorderRadius: PropTypes.string,
};
export default FrameComponent;
