import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Component1 from "./pages/Component1";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Certificates from "./pages/Certificates";
import Contacts from "./pages/Contacts";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import UserAgreement from "./pages/UserAgreement";
import Search from "./pages/Search";
import "./responsive.css";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/products":
      case "/production":
        title = "Продукция";
        metaDescription =
          "Продукция производственной электротехнической компании";
        break;
      case "/certificates":
        title = "Сертификаты";
        metaDescription =
          "Сертификаты производственной электротехнической компании";
        break;
      case "/about":
        title = "О компании";
        metaDescription =
          "О производственной электротехнической компании Сибэл";
        break;
      case "/projects":
        title = "Реализованные проекты";
        metaDescription =
          "Реализованные проекты производственной электротехнической компании";
        break;
      case "/contacts":
        title = "Контакты";
        metaDescription =
          "Адрес, телефон и почта производственной электротехнической компании";
        break;
      case "/privacy-policy":
        title = "Политика конфиденциальности";
        metaDescription =
          "Политика конфиденциальности и порядок обработки персональных данных";
        break;
      case "/user-agreement":
        title = "Пользовательское соглашение";
        metaDescription =
          "Пользовательское соглашение и правила использования сайта";
        break;
      case "/search":
        title = "Поиск по сайту";
        metaDescription = "Поиск по продукции, проектам и разделам сайта";
        break;
      default:
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]',
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Component1 />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:productSlug" element={<ProductDetail />} />
      <Route path="/production" element={<Products />} />
      <Route path="/certificates" element={<Certificates />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:projectSlug" element={<ProjectDetail />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/user-agreement" element={<UserAgreement />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  );
}

export default App;
