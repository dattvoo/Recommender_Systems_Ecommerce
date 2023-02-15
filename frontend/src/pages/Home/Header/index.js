import "./style.css";
import "../../../general/css/grid.css";
import "../../../general/fontawesome-free-6.2.0-web/css/all.min.css";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { HeaderStyle } from "./style";
import { CartItem } from "../../../component/CartItem";
import { MainCategory } from "./MainCategory";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export const Header = ({refresh, setRefresh}) => {
  console.log("🚀 ~ file: index.js:15 ~ Header ~ refresh", refresh)
  const user = useSelector(state => state.user)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const productData = useSelector((state) => state.product);
  const { pathname } = useLocation();
  const handleInOut = () => {
    if (user) {
      Cookies.set("user", null);
      dispatch({ type: "LOGOUT" });
    } else {
      navigate("/login");
    }
  };


  const [cartItems, setCartItems] = useState([]);
  const getCartItem = async () => {
    try {
      const { data } = await axios.post(`http://localhost:8000/getCartItems`, {
        user_id: user.id,
      });
      if (data) {
        setCartItems(data);
        setRefresh(false);
      }
      else {
        setCartItems([]);
        setRefresh(false);
      }
    } catch (error) {
      // console.log({ message: error.message });
    }
  };
  useEffect(() => {
    getCartItem();
    console.log("Nhay vao day");
  }, [refresh]);
  return (
    <HeaderStyle>
      <>
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
              <li className="header__navbar-item" onClick={handleInOut}>
                <i className="fa-solid fa-power-off"></i>
                <Link className="item__link">{user ? "Logout" : "Login"} </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="header-bottom">
          <div className="header-with-search">
            <div className="header__logo">
              <img
                src={require("../../../general/img/logo.png")}
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
                  <i className="btn_icon fa-solid fa-magnifying-glass"></i>
                </button>
              </div>
            </div>

            <ul className="header__right">
              <li className="right__item">
                <a href="#" className="right__item-link">
                  <i className="fa-regular fa-heart"></i>
                </a>
              </li>

              <li className="right__item">
                <a href="#" className="right__item-link">
                  <i className="fa-solid fa-circle-user"></i>
                </a>
              </li>

              <li className="right__item item__cart">
                <a href="#" className="right__item-link">
                  <i className="fa-solid fa-cart-shopping"></i>
                </a>
                <span className="cart__quality">
                  {cartItems.length === 0 ? 0 :  cartItems?.cartItem?.cartItems?.length}
                </span>
                <CartItem  cartItems ={cartItems}/>
              </li>
            </ul>
          </div>
        </div>

        <div className="header__menu-bottom">
          <div className="header__menu">
            <div className="header__menu-top">
              <div className="menu__category">
                <i className="fa-solid fa-list"></i>
                <span>CATEGORIES</span>
              </div>

              <ul className="menu__list">
                <li className="menu__item">
                  <Link className="menu-item__link" to="/">
                    Home
                  </Link>
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
                  <ul className="sub__list">
                    <li
                      className="shop__item"
                      onClick={() => {
                        navigate("/cart");
                      }}
                    >
                      <a href="#">Cart</a>
                    </li>
                    <li
                      className="shop__item"
                      onClick={() => {
                        navigate("/checkout");
                      }}
                    >
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

            <div className="header__menu-bottom"></div>
          </div>
        </div>
        {pathname === "/" && <MainCategory />}
      </>
    </HeaderStyle>
  );
};
