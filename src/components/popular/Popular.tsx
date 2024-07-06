import { FC, useEffect, useState } from "react";
import "./popular.scss";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import star from "../../assets/star.svg";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper/modules";

interface Category {
  slug: string;
  name: string;
}

interface Product {
  id: number;
  title: string;
  rating: number;
  price: number;
  thumbnail: string;
}

const Popular: FC = () => {
  const [categories, setCategories] = useState<Category[] | null>(null);
  const [products, setProducts] = useState<Product[] | null>(null);
  const [category, setCategory] = useState<string>("");

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((res) => setCategories(res?.data));
  }, []);

  useEffect(() => {
    if (category) {
      axios
        .get(`https://dummyjson.com/products/category/${category}`)
        .then((res) => setProducts(res?.data?.products));
    } else {
      axios
        .get(`https://dummyjson.com/products`)
        .then((res) => setProducts(res?.data?.products));
    }
  }, [category]);

  return (
    <div className="popular__section container">
      <div className=" popular">
        <h2>Popular Foods / 人気 </h2>
        <div className="popular__categories">
          <ul>
            <li onClick={() => setCategory("")} value="">
              <p>All</p>
            </li>
            {categories?.map((category) => (
              <li
                onClick={() => setCategory(category.slug)}
                value={category.slug}
                key={category.name}
              >
                <p>{category.name}</p>
              </li>
            ))}
          </ul>
        </div>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          slidesPerView={3}
          spaceBetween={10}
          centeredSlides={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper popular__cards"
        >
          {products?.map((product) => (
            <SwiperSlide className="popular__cards__card" key={product.id}>
              <img width={210} src={product.thumbnail} alt={product.title} />
              <div className="popular__cards__card__info">
                <h3>{product.title}</h3>
                <div className="popular__cards__card__info__rating">
                  <div className="rating">
                    <img width={30} src={star} alt="Star" />
                    <p>{product.rating}</p>
                  </div>
                  <p>${product.price}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button className="popular__button">Explore Foods</button>
      </div>
    </div>
  );
};

export default Popular;
