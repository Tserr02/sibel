import { useState } from "react";
import IconoirnavArrowLeft from "./IconoirnavArrowLeft";
import PropTypes from "prop-types";
import "./ContactForm.css";

const initialFormData = {
  name: "",
  company: "",
  phone: "",
  consent: false,
};

const getPhoneDigits = (phone) => {
  const digits = phone.replace(/\D/g, "");

  if (digits.startsWith("8")) {
    return digits.slice(1, 11);
  }

  if (digits.startsWith("7")) {
    return digits.slice(1, 11);
  }

  return digits.slice(0, 10);
};

const formatPhone = (phone) => {
  const digits = getPhoneDigits(phone);
  const parts = [];

  if (digits.length > 0) {
    parts.push(`(${digits.slice(0, 3)}`);
  }

  if (digits.length >= 3) {
    parts[0] = `(${digits.slice(0, 3)})`;
  }

  if (digits.length > 3) {
    parts.push(` ${digits.slice(3, 6)}`);
  }

  if (digits.length > 6) {
    parts.push(`-${digits.slice(6, 8)}`);
  }

  if (digits.length > 8) {
    parts.push(`-${digits.slice(8, 10)}`);
  }

  return digits.length ? `+7${parts.join("")}` : "";
};

const isValidPhone = (phone) => {
  return getPhoneDigits(phone).length === 10;
};

const ContactForm = ({ className = "" }) => {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [statusMessage, setStatusMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = (field, value) => {
    setFormData((currentFormData) => ({
      ...currentFormData,
      [field]: field === "phone" ? formatPhone(value) : value,
    }));
    setErrors((currentErrors) => ({
      ...currentErrors,
      [field]: "",
      form: "",
    }));
    setStatusMessage("");
  };

  const handlePhoneFocus = () => {
    if (!formData.phone) {
      setFormData((currentFormData) => ({
        ...currentFormData,
        phone: "+7(",
      }));
    }
  };

  const handlePhoneBlur = () => {
    if (!getPhoneDigits(formData.phone).length) {
      setFormData((currentFormData) => ({
        ...currentFormData,
        phone: "",
      }));
    }
  };

  const toggleConsent = () => {
    setFormData((currentFormData) => ({
      ...currentFormData,
      consent: !currentFormData.consent,
    }));
    setErrors((currentErrors) => ({
      ...currentErrors,
      consent: "",
      form: "",
    }));
    setStatusMessage("");
  };

  const validateForm = () => {
    const nextErrors = {};

    if (!formData.name.trim()) {
      nextErrors.name = "Укажите имя";
    }

    if (!formData.company.trim()) {
      nextErrors.company = "Укажите компанию";
    }

    if (!formData.phone.trim()) {
      nextErrors.phone = "Укажите телефон";
    } else if (!isValidPhone(formData.phone)) {
      nextErrors.phone = "Введите корректный телефон";
    }

    if (!formData.consent) {
      nextErrors.consent = "Нужно согласие на обработку данных";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSubmitting || !validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          company: formData.company.trim(),
          phone: formData.phone.trim(),
          consent: formData.consent,
        }),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok || !result.ok) {
        throw new Error(result.message || "Не удалось отправить заявку.");
      }

      setFormData(initialFormData);
      setStatusMessage("Заявка отправлена. Мы свяжемся с вами.");
    } catch (error) {
      setErrors({
        form:
          error.message || "Не удалось отправить заявку. Попробуйте позже.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="project-contact-form" className={`section ${className}`}>
      <div className="child" />
      <div className="txt-parent">
        <div className="txt2">
          <h2 className="h24">
            <span className="span7">Связаться</span>
            <span className="span8"> по проекту</span>
          </h2>
          <div className="div9">
            Оставьте контакт — мы перезвоним и ответим на ваши вопросы
          </div>
        </div>
        <form className="frame-form" onSubmit={handleSubmit} noValidate>
          <div className="input-parent">
            <label className={`input ${errors.name ? "input-error" : ""}`}>
              <img
                className="iconarrow-down-01-sharp"
                alt=""
                src="./icon-search-1.svg"
              />
              <span className="text">
                <span className="div10">Имя</span>
                <input
                  className="input2"
                  placeholder="Вячеслав"
                  type="text"
                  value={formData.name}
                  onChange={(event) => updateField("name", event.target.value)}
                  aria-invalid={!!errors.name}
                />
              </span>
              <img
                className="iconarrow-down-01-sharp"
                alt=""
                src="./icon-arrow-down-01-sharp.svg"
              />
            </label>
            <label className={`input ${errors.company ? "input-error" : ""}`}>
              <img
                className="iconarrow-down-01-sharp"
                alt=""
                src="./icon-search-1.svg"
              />
              <span className="text">
                <span className="div10">Название компании</span>
                <input
                  className="input2"
                  placeholder="Северсталь"
                  type="text"
                  value={formData.company}
                  onChange={(event) =>
                    updateField("company", event.target.value)
                  }
                  aria-invalid={!!errors.company}
                />
              </span>
              <img
                className="iconarrow-down-01-sharp"
                alt=""
                src="./icon-arrow-down-01-sharp.svg"
              />
            </label>
            <label className={`input ${errors.phone ? "input-error" : ""}`}>
              <img
                className="iconarrow-down-01-sharp"
                alt=""
                src="./icon-search-1.svg"
              />
              <span className="text">
                <span className="div10">Номер телефона</span>
                <input
                  className="input2"
                  placeholder="+7(913) 745-74-26"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  maxLength="17"
                  value={formData.phone}
                  onChange={(event) => updateField("phone", event.target.value)}
                  onFocus={handlePhoneFocus}
                  onBlur={handlePhoneBlur}
                  aria-invalid={!!errors.phone}
                />
              </span>
              <img
                className="iconarrow-down-01-sharp"
                alt=""
                src="./icon-arrow-down-01-sharp.svg"
              />
            </label>
            <IconoirnavArrowLeft
              iconoirnavArrowLeftBackgroundColor={
                isSubmitting ? "#737373" : "#e65100"
              }
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
              button={isSubmitting ? "Отправляем" : "Оставить запрос"}
              buttonColor="#fcfcfc"
              iconoirnavArrowRight="./iconoir-nav-arrow-right.svg"
              showIconoirnavArrowRight={false}
              iconoirnavArrowRightHeight="24px"
              iconoirnavArrowRightMaxHeight="unset"
              disabled={isSubmitting}
              onClick={handleSubmit}
            />
          </div>
          {(errors.name || errors.company || errors.phone || errors.form) && (
            <div className="form-error" role="alert">
              {errors.name || errors.company || errors.phone || errors.form}
            </div>
          )}
          {statusMessage && (
            <div className="form-success" role="status">
              {statusMessage}
            </div>
          )}
          <div className="div13">
            <button
              className={`custom-checkbox${
                formData.consent ? " custom-checkbox-checked" : ""
              }`}
              type="button"
              aria-pressed={formData.consent}
              aria-invalid={!!errors.consent}
              aria-label="Согласие на обработку персональных данных"
              onClick={toggleConsent}
            />
            <span className="div14">
              Согласен на обработку персональных данных в соответствии с{" "}
              <span className="span9">Политикой конфиденциальности</span>
            </span>
          </div>
          {errors.consent && (
            <div className="form-error" role="alert">
              {errors.consent}
            </div>
          )}
        </form>
      </div>
      <img
        className="item"
        loading="lazy"
        alt=""
        src="./Frame-1410085907@2x.png"
      />
    </section>
  );
};

ContactForm.propTypes = {
  className: PropTypes.string,
};

export default ContactForm;
