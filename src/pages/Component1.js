import ComponentFirst from "../components/ComponentFirst";
import Component2 from "../components/Component2";
import Component3 from "../components/Component3";
import Component4 from "../components/Component4";
import Component5 from "../components/Component5";
import ContactForm from "../components/ContactForm";
import Component7 from "../components/Component7";
import Component8 from "../components/Component8";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./Component1.css";
function Component1() {
  return (
    <div className="div">
      <ComponentFirst />
      <main className="frame-parent">
        <section className="frame-group">
          <Component2 />
          <Component3 />
          <Component4 />
          <Component5 />
          <ContactForm />
          <Component7 />
          <Component8 />
        </section>
        <Footer />
      </main>
      <Header />
    </div>
  );
}
export default Component1;
