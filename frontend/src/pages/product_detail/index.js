import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { CartItem } from "../../component/CartItem";
import { Content5 } from "../../component/content5";
import { Footer } from "../../component/footer";
import "../../general/css/grid.css";
import "../../general/fontawesome-free-6.2.0-web/css/all.min.css";
import { Header } from "../Home/Header";
import { TrendingItem } from "../Home/TrendingItem";
import "./style.css";

export const Product__Detail = ({ hanldeAddToCart }) => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [product, setProduct] = useState();
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const getRecommendProduct = async () => {
    try {
      const { data } = await axios.get(`http://127.0.0.1:8000/product/${id}`);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };
  const navigate = useNavigate();
  const getProduct = async () => {
    try {
      const { data } = await axios.post("http://localhost:8000/product", {
        product_id: id,
      });
      if (data) {
        setProduct(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
    getRecommendProduct();
    window.scrollTo(0, 0);
  }, [id]);




  // useEffect(() => {
  //   console.log("Dispathed");
  //   console.log("🚀 ~ file: index.js:21 ~ cart", cart)
  // }, [cart]);


  return (
    <div className="product-detail">
      {/* <div className="header__checkout">
        <div className="header_12">
          <div className="header-top">
            <nav className="header__navbar">
              <ul className="header__navbar-list">
                <li className="header__navbar-item">
                  <i className="fa-solid fa-headset"></i>
                  <a href="#" className="item__link">
                    +060 (800) 801-582
                  </a>
                </li>
                <li className="header__navbar-item">
                  <i className="fa-regular fa-envelope"></i>
                  <a href="#" className="item__link">
                    support@shophub.com
                  </a>
                </li>
              </ul>

              <ul className="header__navbar-list">
                <li className="header__navbar-item">
                  <i className="fa-solid fa-location-dot"></i>
                  <a href="#" className="item__link">
                    Store location
                  </a>
                </li>
                <li className="header__navbar-item">
                  <i className="fa-regular fa-bell"></i>
                  <a href="#" className="item__link">
                    Daily deal
                  </a>
                </li>
                <li className="header__navbar-item">
                  <i className="fa-solid fa-user"></i>
                  <a href="#" className="item__link">
                    My Acount
                  </a>
                </li>
                <li className="header__navbar-item">
                  <i className="fa-solid fa-power-off"></i>
                  <a href="#" className="item__link"></a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="header-bottom">
            <div className="header-with-search">
              <div className="header__logo">
                <img
                  src={require("../../general/img/logo.png")}
                  className="header__logo-img"
                />
              </div>

              <div className="header__search">
                <div className="header__select">
                  <span>All Category</span>
                  <i className="fa-solid fa-chevron-down"></i>
                  <ul className="select__list">
                    <li className="select__item">All Category</li>
                    <li className="select__item">Watch</li>
                    <li className="select__item">Mobile</li>
                    <li className="select__item">Kid's Item</li>
                  </ul>
                </div>
                <div className="header__search-12">
                  <input
                    type="search"
                    name=""
                    id=""
                    className="header__input-search"
                    placeholder="Search Products Here...."
                  />
                  <button className="btn__search">
                    <i class="btn_icon fa-solid fa-magnifying-glass"></i>
                  </button>
                </div>
              </div>

              <ul className="header__right">
                <li className="right__item">
                  <a href="#" className="right__item-link">
                    <i class="fa-regular fa-heart"></i>
                  </a>
                </li>

                <li className="right__item">
                  <a href="#" className="right__item-link">
                    <i class="fa-solid fa-circle-user"></i>
                  </a>
                </li>

                <li className="right__item item__cart">
                  <a href="#" className="right__item-link">
                    <i class="fa-solid fa-cart-shopping"></i>
                  </a>
                  <span className="cart__quality">{cart.length}</span>
                  <CartItem />
                </li>

              </ul>
            </div>
          </div>
        </div>

        <div className="header__menu-bottom">
          <div className="grid wide">
            <div className="header__menu">
              <div className="header__menu-top">
                <ul className="menu__list">
                  <li className="menu__item">
                    <a className="menu-item__link" href="#">
                      Home
                    </a>
                  </li>
                  <li className="menu__item">
                    <a className="menu-item__link" href="#">
                      Product
                    </a>
                  </li>
                  <li className="menu__item">
                    <a className="menu-item__link" href="#">
                      Service
                    </a>
                  </li>
                  <li className="menu__item item__shop">
                    <a className="menu-item__link" href="#">
                      Shop
                      <i className="fa-solid fa-chevron-down"></i>
                    </a>
                    <ul className="shop__list">
                      <li className="shop__item">
                        <a href="#">Card</a>
                      </li>
                      <li className="shop__item">
                        <a href="#">Checkout</a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu__item">
                    <a className="menu-item__link" href="#">
                      Pages
                    </a>
                  </li>
                  <li className="menu__item item__blog">
                    <a className="menu-item__link" href="#">
                      Blog
                      <i className="fa-solid fa-chevron-down"></i>
                    </a>
                    <ul className="blog__list">
                      <li className="blog__item">
                        <a href="#">Blog Single Sidebar</a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu__item">
                    <a className="menu-item__link" href="#">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <Header />
      <div className="breadcrumbs">
        <div className="grid wide">
          <div className="row">
            <div className="col l-12">
              <div className="bread-inner">
                <ul className="bread-list">
                  <li>
                    <a href="#">
                      Home
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </li>
                  <li className="active">
                    <a href="#">
                      Product
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </li>
                  <li className="active">
                    <a href="#">Woman Ring</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="product-detail section">
        <div className="grid wide">
          <div className="row">
            <div className="col l-5 m-12 c-12">
              <div className="product__left">
                <div className="product__left-main">
                  <img
                    src={`https://images.asos-media.com/products/ugg-classic-mini-boots-in-black-suede/${id}-2`}
                    alt=""
                    className="product-main__img"
                  />
                </div>

                <ul className="product__left-item">
                  <li>
                    <img
                      src={require("../../general/img/img_product5.jfif")}
                      alt=""
                      className="product-item__img"
                    />
                  </li>
                  <li>
                    <img
                      src={require("../../general/img/img_product2.jfif")}
                      alt=""
                      className="product-item__img"
                    />
                  </li>
                  <li>
                    <img
                      src={require("../../general/img/img_product3.jfif")}
                      alt=""
                      className="product-item__img"
                    />
                  </li>
                  <li>
                    <img
                      src={require("../../general/img/img_product4.jfif")}
                      alt=""
                      className="product-item__img"
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div className="col l-7 m-12 c-12">
              <div className="product__right">
                <div className="product__right-title">
                  <h2 className="product__name">Woman Ring</h2>
                  <ul className="product__right-state">
                    <li>
                      Product Id:{" "}
                      <span className="product__id strong">{product?.id}</span>
                    </li>
                    <li>
                      Status:{" "}
                      <span className="product__status strong">
                        {product?.status}
                      </span>
                    </li>
                  </ul>
                  <h3 className="product__price">Price: {product?.price}$</h3>
                </div>

                <div className="product__option">
                  <div className="row">
                    <div className="col l-6">
                      <div className="product__color">
                        <p className="product__color-title strong">Color:</p>
                        <ul className="product-list">
                          <li className="product-item color-red"></li>
                          <li className="product-item color-green"></li>
                          <li className="product-item color-blue"></li>
                        </ul>
                      </div>
                    </div>

                    <div className="col l-6">
                      <div className="product__size">
                        <p className="product__size-title strong">Size:</p>
                        <ul className="product-list">
                          <li className="product-item">S</li>
                          <li className="product-item">M</li>
                          <li className="product-item">L</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="product__quality">
                    <div className="product__quality-title strong">
                      Quantity:{" "}
                    </div>
                    <div className="product__quality-option">
                      <button
                        className="btn_quality"
                        id="minus-btn"
                        onClick={() => {
                          setQuantity(quantity - 1);
                        }}
                      >
                        <i class="fa fa-minus"></i>
                      </button>
                      <input
                        type="text"
                        class="input-quality"
                        value={quantity}
                        onChange={() => { }}
                        min={1}
                      />
                      <button
                        className="btn_quality"
                        id="plus-btn"
                        onClick={() => {
                          setQuantity(quantity + 1);
                        }}
                      >
                        <i class="fa fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="product__btn-add">
                  <div className="row">
                    <div className="col l-6">
                      <button
                        className={`btn btn__add ${product?.status === "Sold Out"
                          ? "soldout"
                          : "availability"
                          }`}
                        onClick={() => hanldeAddToCart(product, quantity)}
                        disabled={product?.status === "Sold Out" ? true : false}
                      >
                        Add To Card
                      </button>
                    </div>
                    <div className="col l-3">
                      <div className="btn btn__heart">
                        <i className="fa-regular fa-heart"></i>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="product__buy" onClick={() => navigate("/cart")}>
                  <div className="btn btn__buy" >Buy Now</div>
                </div>

                <div className="product__info">
                  <h3 className="product__info-title strong">
                    Product Details:
                  </h3>
                  <p>{product?.product_details}</p>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TrendingItem title="Recommend Product" productRecId={data} />
      <Content5 />
      <Footer />
    </div>
  );
};
