import { products } from "./products";
import { projects } from "./projects";

const pages = [
  {
    type: "Страница",
    title: "Главная",
    description:
      "Производство электротехнического оборудования, продукция, проекты, сертификаты, контакты и форма заявки.",
    url: "/",
    keywords: "сибэл заявка производство электрощитовое оборудование",
  },
  {
    type: "Страница",
    title: "Продукция",
    description:
      "Каталог продукции: КТП, ЩО70, ЩЭ, КСО, ВРУ, шкафы, пункты и ячейки распределительных устройств.",
    url: "/products",
    keywords: "каталог оборудование ктп що70 щэ ксо вру шкафы",
  },
  {
    type: "Страница",
    title: "О компании",
    description:
      "Информация о компании СИБЭЛ, производстве, опыте, качестве и направлениях работы.",
    url: "/about",
    keywords: "о компании опыт производство качество",
  },
  {
    type: "Страница",
    title: "Сертификаты",
    description:
      "Сертификаты и разрешительные документы на выпускаемое электротехническое оборудование.",
    url: "/certificates",
    keywords: "сертификат разрешение промбезопасность ктп ксо нку",
  },
  {
    type: "Страница",
    title: "Проекты",
    description:
      "Реализованные проекты для нефтегазовой, газовой, транспортной и энергетической отраслей.",
    url: "/projects",
    keywords: "реализованные проекты роснефть томскгазпром ржд",
  },
  {
    type: "Страница",
    title: "Контакты",
    description:
      "Адрес, телефон, почта и карта расположения компании в Томске.",
    url: "/contacts",
    keywords: "адрес телефон почта томск пролетарская карта",
  },
  {
    type: "Документ",
    title: "Политика конфиденциальности",
    description:
      "Порядок обработки и защиты персональных данных пользователей сайта.",
    url: "/privacy-policy",
    keywords: "персональные данные конфиденциальность политика согласие",
  },
  {
    type: "Документ",
    title: "Пользовательское соглашение",
    description:
      "Правила использования сайта, материалов и форм обратной связи.",
    url: "/user-agreement",
    keywords: "соглашение правила сайт пользователь",
  },
];

const certificates = [
  "Сертификат промбезопасности",
  "Разрешение на применение ЯКНО, ЯКУ, КРУН, КРУПЭ",
  "Свидетельство на товарный знак",
  "Сертификат КСО",
  "Сертификат НКУ",
  "Сертификат КТП",
  "Сертификат ЯКНО",
  "Сертификат Таврида",
].map((title) => ({
  type: "Сертификат",
  title,
  description: "Сертификат доступен для просмотра в разделе сертификатов.",
  url: "/certificates",
  keywords: title,
}));

const productItems = products.map((product) => ({
  type: "Продукция",
  title: product.title,
  description: product.description,
  url: `/products/${product.slug}`,
  keywords: [
    product.shortTitle,
    product.note,
    ...(product.characteristics || []),
    ...(product.gallery || []).map((item) => item.title),
  ].join(" "),
}));

const projectItems = projects.map((project) => ({
  type: "Проект",
  title: project.title,
  description: `${project.product}. Заказчик: ${project.customer}. Год: ${project.year}.`,
  url: `/projects/${project.slug}`,
  keywords: [
    project.product,
    project.customer,
    project.year,
    project.yearLabel,
    project.description,
  ].join(" "),
}));

export const searchItems = [
  ...pages,
  ...productItems,
  ...projectItems,
  ...certificates,
];
