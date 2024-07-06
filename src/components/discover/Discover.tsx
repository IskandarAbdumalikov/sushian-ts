import "./discover.scss";
import truImg from "../../assets/true.svg";
import sushi from "../../assets/sushi.svg";
import sushi2 from "../../assets/sushi2.svg";

const Discover = () => {
  return (
    <div className="container discover">
      <div className="discover__top__left">
        <h3>What’s Trending / トレンド</h3>
        <h2>Japanese Sushi</h2>
        <p>Feel the taste of most delicious Sushi here.</p>
        <div className="trues">
          <span>
            <img src={truImg} alt="" />
            <p>Maki Sushi</p>
          </span>
          <span>
            <img src={truImg} alt="" />
            <p>Temaki Sushi</p>
          </span>
          <span>
            <img src={truImg} alt="" />
            <p>Nigiri Sushi</p>
          </span>
          <span>
            <img src={truImg} alt="" />
            <p>Uramaki Sushi</p>
          </span>
          <span>
            <img src={truImg} alt="" />
            <p>Oshizushi</p>
          </span>
          <span>
            <img src={truImg} alt="" />
            <p>Inari Sushi</p>
          </span>
        </div>
      </div>
      <div className="discover__top__right">
        <img width={260} src={sushi} alt="" />
      </div>
      <div className="discover__top__right">
        <img width={260} src={sushi2} alt="" />
      </div>
      <div className="discover__top__left">
        <h3>What’s Trending / トレンド</h3>
        <h2>Japanese Drinks</h2>
        <p>Feel the taste of most delicious Sushi here.</p>
        <div className="trues">
          <span>
            <img src={truImg} alt="" />
            <p>Maki Sushi</p>
          </span>
          <span>
            <img src={truImg} alt="" />
            <p>Temaki Sushi</p>
          </span>
          <span>
            <img src={truImg} alt="" />
            <p>Nigiri Sushi</p>
          </span>
          <span>
            <img src={truImg} alt="" />
            <p>Uramaki Sushi</p>
          </span>
          <span>
            <img src={truImg} alt="" />
            <p>Oshizushi</p>
          </span>
          <span>
            <img src={truImg} alt="" />
            <p>Inari Sushi</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Discover;
