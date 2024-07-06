import { FC } from 'react'
import "./hero.scss";
import heroChina from '../../assets/heroChina.svg'
import girl from "../../assets/girl.svg";
import k from "../../assets/24k.svg";
import { FaPlay } from 'react-icons/fa';


const Hero:FC = () => {
  return (
    <section className="hero container">
      <div className="hero__left">
        <img src={heroChina} alt="" />
      </div>
      <div className="hero__right">
        <div className="hero__right__top">
          <h1>Feel the taste of Japanese foods</h1>
          <p>
            Feel the taste of most populars Japanese foods from anywhere and
            anytime.
          </p>
          <div className="hero__right__top__btns">
            <button className="order-now">Order Now</button>
            <button className="order-how">
              <span>
                <FaPlay />
              </span>
              <p>How to order</p>
            </button>
          </div>
        </div>
        <div className="hero__right__bottom">
          <img src={k} alt="" />
          <div className="profile">
            <img  src={girl} alt="" />
            <p>
              “This is the best Japanese food <br /> delivery service that ever exist”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero