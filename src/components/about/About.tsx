import { FC } from "react";
import "./about.scss";
import aboutLeftTop from "../../assets/aboutLeftTop.svg";
import aboutLeftBottom from "../../assets/aboutLeftBottom.svg";
import aboutChina from "../../assets/aboutChina.svg";

const About: FC = () => {
  return (
    <section className="about container">
      <div className="about__left">
        <div className="about__left__top">
          <img src={aboutLeftTop} alt="" />
          <img src={aboutChina} alt="" />
        </div>
        <button>Learn more</button>
        <div className="about__left__bottom">
          <img src={aboutLeftBottom} alt="" />
          <img src={aboutChina} alt="" />
        </div>
      </div>
      <div className="about__right">
        <h3>About Us / 私たちに関しては</h3>
        <h2>Our mission is to bring true Japanese flavours to you.</h2>
        <p>
          We will continue to provide the experience of Omotenashi, the Japanese{" "}
          <br />
          mindset of hospitality, with our shopping and dining for our
          customers.
        </p>
      </div>
    </section>
  );
};

export default About;
