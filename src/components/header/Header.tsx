import { CiSearch } from "react-icons/ci";
import "./header.scss";
import { FC } from "react";
const Header:FC = () => {
  return (
    <header className="header">
      <nav className="header__nav container">
        <div className="header__nav__left">
          <h1 className="header__nav__left__logo ">SUSHIMAN</h1>
        </div>
        <div className="header__nav__right ">
          <ul className="header__nav__right__list">
            <a href="#">MENU</a>
            <a href="#">FOODS</a>
            <a href="#">SERVICES</a>
            <a href="#">ABOUT US</a>
            <a href="/login">ACCOUNT</a>
          </ul>
          <button>
            <CiSearch />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
