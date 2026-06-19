import Header2 from "../components/Header2";
import Footer from "../components/Footer";
import { publicAsset } from "../utils/publicAsset";
import "./About.css";

const advantages = [
  {
    value: "24",
    label: "года опыта",
    text: "Производим электротехническое оборудование для промышленных, городских и энергетических объектов.",
  },
  {
    value: "10 кВ",
    label: "класс оборудования",
    text: "Выпускаем комплектные трансформаторные подстанции и низковольтные комплектные устройства.",
  },
  {
    value: "100%",
    label: "контроль перед отгрузкой",
    text: "Каждое изделие проходит проверку сборки, комплектации и готовности к эксплуатации.",
  },
];

function About() {
  return (
    <div className="about-page">
      <Header2 activePage="about" />
      <main className="about-main">
        <section className="about-hero">
          <div className="about-breadcrumbs">
            <a href="/">Главная</a>
            <span>/</span>
            <a href="/about">О компании</a>
          </div>
          <div className="about-heading">
            <h1>О компании</h1>
            <p>
              «СИБЭЛ» производит электрощитовое оборудование и комплектные
              устройства для надежного электроснабжения промышленных,
              строительных, энергетических и коммунальных объектов.
            </p>
          </div>
        </section>

        <section className="about-intro">
          <img
            src={publicAsset("./20181226-183728-2@2x.png")}
            alt="Производство Сибэл"
            loading="lazy"
          />
          <div className="about-intro-text">
            <h2>Налаженное производство и четкие сроки</h2>
            <p>
              Продукция «СИБЭЛ» применяется в системах электроснабжения
              промышленных предприятий, на объектах городского и
              жилищно-коммунального хозяйства, в строительстве и энергетике.
            </p>
            <p>
              Все выпускаемые изделия имеют необходимые сертификаты
              соответствия. Особое внимание мы уделяем качеству сборки,
              конструктивным и монтажным решениям, чтобы оборудование было
              надежным, безопасным и удобным в эксплуатации.
            </p>
            <p>
              Каждое изделие проходит проверку и приемочный контроль перед
              отгрузкой. Важной частью нашей работы остается соблюдение
              согласованных сроков производства.
            </p>
          </div>
        </section>

        <section className="about-advantages" aria-label="Преимущества">
          {advantages.map((item) => (
            <article className="about-advantage" key={item.label}>
              <b>{item.value}</b>
              <h2>{item.label}</h2>
              <p>{item.text}</p>
            </article>
          ))}
        </section>

        <section className="about-quality">
          <div>
            <h2>Что мы делаем</h2>
            <p>
              Разрабатываем и производим КТП, ВРУ, распределительные панели,
              щиты этажные, силовые шкафы, пункты распределительные и ячейки
              комплектных распределительных устройств.
            </p>
          </div>
          <a href="/products">Смотреть продукцию</a>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default About;
