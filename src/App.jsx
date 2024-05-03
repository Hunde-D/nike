import {
  Hero,
  PopularProducts,
  Services,
  Subscribe,
  SpecialOffer,
  SuperQuality,
  CustomerReviews,
  Footer,
} from "./sections";
import Nav from "./components/Nav";

const App = () => {
  return (
    <main>
      <Nav />
      <section>
        <Hero />
      </section>
      <section>
        <PopularProducts />
      </section>
      <SuperQuality />
      <section>
        <Services />
      </section>
      <section>
        <SpecialOffer />
      </section>
      <section>
        <CustomerReviews />
      </section>
      <section>
        <Subscribe />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
};

export default App;
