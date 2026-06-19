import PropTypes from "prop-types";
import "./Component4.css";

const partners = [
  {
    wrapperClassName: "image-8-wrapper",
    imageClassName: "image-8-icon",
    src: "./image-8@2x.png",
    alt: "",
  },
  {
    wrapperClassName: "image-8-wrapper",
    imageClassName: "image-14-icon",
    src: "./image-14@2x.png",
    alt: "",
  },
  {
    wrapperClassName: "image-8-wrapper",
    imageClassName: "rzd-logo-1-icon",
    src: "./rzd-logo-1.svg",
    alt: "",
  },
  {
    wrapperClassName: "image-15-wrapper",
    imageClassName: "image-15-icon",
    src: "./image-15@2x.png",
    alt: "",
  },
  {
    wrapperClassName: "image-8-wrapper",
    imageClassName: "suenko-photoroom-1-icon",
    src: "./suenko-Photoroom-1@2x.png",
    alt: "",
  },
  {
    wrapperClassName: "image-8-wrapper",
    imageClassName: "alrosa-logo-icon",
    src: "./alrosa-seeklogo.png",
    alt: "ALROSA",
  },
  {
    wrapperClassName: "image-8-wrapper",
    imageClassName: "polymetal-logo-icon",
    src: "./polymetal.svg",
    alt: "Polymetal",
  },
];

const repeatedPartners = [...partners, ...partners];

const Component4 = ({ className = "" }) => {
  return (
    <section className={`parent8 ${className}`}>
      <h2 className="h23">Нам доверяют</h2>
      <div className="frame-parent8">
        <div className="partners-track">
          {repeatedPartners.map((partner, index) => (
            <div className={partner.wrapperClassName} key={`${partner.src}-${index}`}>
              <img
                className={partner.imageClassName}
                loading="lazy"
                alt={partner.alt}
                src={partner.src}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

Component4.propTypes = {
  className: PropTypes.string,
};

export default Component4;
