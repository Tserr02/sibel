import IconoirnavArrowLeft from "./IconoirnavArrowLeft";
import PropTypes from "prop-types";
import { publicAsset } from "../utils/publicAsset";
import "./Component9.css";
const Component9 = ({ className = "" }) => {
  const openRequestForm = () => {
    if (window.location.pathname === "/") {
      document.getElementById("project-contact-form")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      return;
    }

    window.location.href = "/#project-contact-form";
  };

  const openPath = (path) => {
    window.location.href = path;
  };

  const handleFooterClick = (event) => {
    if (event.target.closest("a[href]")) {
      return;
    }

    if (event.target.closest(".vector-icon2")) {
      openPath("/");
      return;
    }

    if (event.target.closest(".column-1")) {
      openPath("/contacts");
      return;
    }

    const contactItem = event.target.closest(".iconoirphone-parent");

    if (contactItem) {
      const contactItems = Array.from(contactItem.parentElement.children);
      const contactIndex = contactItems.indexOf(contactItem);
      window.location.href =
        contactIndex === 0 ? "tel:+73822593193" : "mailto:sibel.tomsk@mail.ru";
      return;
    }

    const footerItem = event.target.closest(
      ".div26 .b4, .div26 .b5, .div26 .div27, .div26 .div33, .div26 .div39",
    );

    if (!footerItem) {
      return;
    }

    const footerSection = footerItem.closest(".div26");
    const footerSections = Array.from(event.currentTarget.children).filter(
      (child) => child.classList.contains("div26"),
    );
    const sectionIndex = footerSections.indexOf(footerSection);

    if (sectionIndex === 0) {
      const productSlugs = ["ktp", "sho70", "she", "kso", "sho70"];
      const productItems = Array.from(footerSection.querySelectorAll(".btns > .div27"));
      const productIndex = productItems.indexOf(footerItem);

      openPath(
        productIndex >= 0
          ? `/products/${productSlugs[productIndex]}`
          : "/products",
      );
      return;
    }

    if (sectionIndex === 1) {
      openPath("/certificates");
      return;
    }

    if (sectionIndex === 2) {
      const projectSlugs = ["ktp-oil-gas", "gas-power-supply", "transport-ktp"];
      const projectItems = Array.from(footerSection.querySelectorAll(".btns > *"));
      const projectIndex = projectItems.indexOf(footerItem);

      openPath(
        projectIndex >= 0
          ? `/projects/${projectSlugs[projectIndex]}`
          : "/projects",
      );
    }
  };

  return (
    <div className={`column-1-parent ${className}`} onClick={handleFooterClick}>
      <div className="column-1">
        <img
          className="vector-icon2"
          loading="lazy"
          alt=""
          src={publicAsset("./Vector.svg")}
        />
        <div className="div23">
          634009, Россия, г.Томск,
          <br />
          ул.Пролетарская, 62/2
        </div>
      </div>
      <div className="div24">
        <div className="frame-parent16">
          <div className="iconoirphone-parent">
            <img
              className="iconoirphone"
              alt=""
              src={publicAsset("./iconoir-phone.svg")}
            />
            <div className="footer-phone-list">
              <a className="footer-phone-link" href="tel:+73822593193">
                +7(3822) 593-193
              </a>
              <a className="footer-phone-link" href="tel:+73822404802">
                +7(3822) 40-48-02
              </a>
            </div>
          </div>
          <div className="iconoirphone-parent">
            <img
              className="iconoirphone"
              alt=""
              src={publicAsset("./iconoir-mail.svg")}
            />
            <div className="div23">sibel.tomsk@mail.ru</div>
          </div>
        </div>
        <IconoirnavArrowLeft
          iconoirnavArrowLeftBackgroundColor="#e65100"
          iconoirnavArrowLeftGap="10px"
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
          button="Оставить заявку"
          buttonColor="#fcfcfc"
          iconoirnavArrowRight={publicAsset("./iconoir-nav-arrow-right.svg")}
          showIconoirnavArrowRight={false}
          iconoirnavArrowRightHeight="24px"
          iconoirnavArrowRightMaxHeight="unset"
          onClick={openRequestForm}
        />
      </div>
      <div className="div26">
        <b className="b4">Продукция</b>
        <div className="btns">
          <div className="div27">КТП</div>
          <div className="div27">ЩО70</div>
          <div className="div27">ЩЭ</div>
          <div className="div27">КСО</div>
          <div className="div27">ЩО70</div>
        </div>
      </div>
      <div className="div26">
        <div className="heading">
          <b className="b5">Сертификаты</b>
        </div>
        <div className="btns2">
          <div className="div33">Сертификат промбезопасности</div>
          <div className="div27">Разрешение на применение</div>
          <div className="div27">Сертификат КСО</div>
          <div className="div27">Сертификат НКУ</div>
          <div className="div27">Сертификат КТП</div>
        </div>
      </div>
      <div className="div26">
        <b className="b4">Проекты</b>
        <div className="btns">
          <div className="div39">ПАО «Роснефть»</div>
          <div className="div27">ООО «Томскгазпром»</div>
          <div className="div27">РЖД</div>
        </div>
      </div>
    </div>
  );
};
Component9.propTypes = {
  className: PropTypes.string,
};
export default Component9;
