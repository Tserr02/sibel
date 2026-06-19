import Header2 from "../components/Header2";
import Footer from "../components/Footer";
import "./Contacts.css";

function Contacts() {
  return (
    <div className="contacts-page">
      <Header2 activePage="contacts" />
      <main className="contacts-main">
        <section className="contacts-hero">
          <div className="contacts-breadcrumbs">
            <a href="/">Главная</a>
            <span>/</span>
            <span>Контакты</span>
          </div>
          <h1>Контакты</h1>
        </section>

        <section className="contacts-layout" aria-label="Адрес и контакты">
          <div className="contacts-map">
            <iframe
              title="Сибэл на карте"
              src="https://yandex.ru/map-widget/v1/?z=18&mode=search&text=%D0%A1%D0%B8%D0%B1%D1%8D%D0%BB%2C%20%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D1%8F%2C%20%D0%A2%D0%BE%D0%BC%D1%81%D0%BA%2C%20%D1%83%D0%BB.%20%D0%9F%D1%80%D0%BE%D0%BB%D0%B5%D1%82%D0%B0%D1%80%D1%81%D0%BA%D0%B0%D1%8F%2C%2062%2F2"
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
            />
          </div>
          <aside className="contacts-info">
            <h2>Адрес и контакты</h2>
            <div className="contacts-info-list">
              <div className="contacts-info-item">
                <span>Адрес</span>
                <p>
                  634009, Россия, г. Томск,
                  <br />
                  ул. Пролетарская, 62/2
                </p>
              </div>
              <div className="contacts-info-item">
                <span>Телефон</span>
                <a href="tel:+73822593193">+7 (3822) 593-193</a>
                <a href="tel:+73822404802">+7 (3822) 40-48-02</a>
              </div>
              <div className="contacts-info-item">
                <span>Почта</span>
                <a href="mailto:sibel.tomsk@mail.ru">sibel.tomsk@mail.ru</a>
              </div>
            </div>
          </aside>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Contacts;
