import "./footer.scss";
import logo from "../../assets/footerLogo.svg";
import facebook from "../../assets/facebook.svg";
const Footer = () => {
  return (
    <footer className="container">
      <img width={125} src={logo} alt="" />
      <ul>
        <a href="#">MENU</a>
        <a href="#">FOODS</a>
        <a href="#">SERVICES</a>
        <a href="#">ABOUT US</a>
      </ul>
      <ul>
        <img width={40} src={facebook} alt="" />
        <img width={40} src={facebook} alt="" />
        <img width={40} src={facebook} alt="" />
      </ul>
    </footer>
  );
};

export default Footer;
