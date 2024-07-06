import { FC } from "react";
import Header from "../../components/header/Header";
import Hero from "../../components/hero/Hero";
import About from "../../components/about/About";
import Popular from "../../components/popular/Popular";
import Discover from "../../components/discover/Discover";
import Offers from "../../components/offers/Offers";
import Footer from "../../components/footer/Footer";

const Home: FC = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Popular />
      <Discover />
      <Offers />
      <Footer />
    </div>
  );
};

export default Home;
