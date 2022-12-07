import React from 'react'
import "./style.css"
import "../../../general/css/grid.css"
import '../../../general/fontawesome-free-6.2.0-web/css/all.min.css'
import { useDispatch } from 'react-redux'
import Cookies from "js-cookie"
import { useNavigate } from 'react-router-dom'
export const Header = ({ user }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleInOut = () => {
    if (user) {
      Cookies.set("user", null);
      dispatch({ type: "LOGOUT" });
    } else {
      navigate("/login");
    }
  }
  return (

    <div className="header">
      <div class="header-top">
        <nav className='header__navbar'>
          <ul className="header__navbar-list">
            <li className="header__navbar-item">
              <i class="fa-solid fa-headset"></i>
              <a href='#' className='item__link'>+060 (800) 801-582</a>
            </li>
            <li className="header__navbar-item">
              <i class="fa-regular fa-envelope"></i>
              <a href='#' className='item__link'>support@shophub.com</a>
            </li>
          </ul>

          <ul className="header__navbar-list">
            <li className="header__navbar-item">
              <i class="fa-solid fa-location-dot"></i>
              <a href='#' className='item__link'>Store location</a>
            </li>
            <li className="header__navbar-item">
              <i class="fa-regular fa-bell"></i>
              <a href='#' className='item__link'>Daily deal</a>
            </li>
            <li className="header__navbar-item">
              <i class="fa-solid fa-user"></i>
              <a href='#' className='item__link'>My Acount</a>
            </li>
            <li className="header__navbar-item" onClick={handleInOut}>
              <i class="fa-solid fa-power-off"></i>
              <a href='#' className='item__link' >{user ? "Logout" : "Login"} </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="header-bottom">
        <div className="header-with-search">
          <div className="header__logo">
            <img src={require("../../../general/img/logo.png")} className='header__logo-img' />
          </div>

          <div className="header__search">
            <div className="header__select">
              <span>All Category</span>
              <i class="fa-solid fa-chevron-down"></i>
              <ul className="select__list">
                <li className="select__item">All Category</li>
                <li className="select__item">Watch</li>
                <li className="select__item">Mobile</li>
                <li className="select__item">Kid's Item</li>
              </ul>
            </div>
            <div className="header__search-12">
              <input type="search" name="" id="" className='header__input-search' placeholder='Search Products Here....' />
              <button className='btn__search'><i class="btn_icon fa-solid fa-magnifying-glass"></i></button>
            </div>
          </div>

          <ul className="header__right">
            <li className="right__item">
              <a href='#' className='right__item-link'><i class="fa-regular fa-heart"></i></a>
            </li>

            <li className="right__item">
              <a href='#' className='right__item-link'><i class="fa-solid fa-circle-user"></i></a>
            </li>

            <li className="right__item item__cart">
              <a href='#' className='right__item-link'><i class="fa-solid fa-cart-shopping"></i></a>
              <span className='cart__quality'>3</span>
              <div className="shopping-cart">
                <div className="shopping-title">
                  <span>2 ITEMS</span>
                  <span>VIEW CART</span>
                </div>

                <ul className="shopping-list">
                  <li className="shopping-item">
                    <div className="shopping-item__content">
                      <p className='shopping-item__name'>Woman Ring</p>
                      <p className='shopping-item__quality'>1x - $99.00</p>
                      <div className='shopping-btn__remove'>
                        <i class="fa-solid fa-x"></i>
                      </div>
                    </div>
                    <div className="shopping-item__img">
                      <img src={require("../../../general/img/product-1.jpg")} alt="" />
                    </div>
                  </li>
                  <li className="shopping-item">
                  <div className="shopping-item__content">
                      <p className='shopping-item__name'>Woman Necklace</p>
                      <p className='shopping-item__quality'>1x - $35.00</p>
                      <div className='shopping-btn__remove'>
                        <i class="fa-solid fa-x"></i>
                      </div>
                    </div>
                    <div className="shopping-item__img">
                      <img src={require("../../../general/img/product-2.jpg")} alt="" />
                    </div>
                  </li>
                </ul>

                <div className="shopping-bottom">
                  <div className="shopping-sum">
                    <span className="sum-title">TOTAL</span>
                    <span className="sum-price">$134.00</span>
                  </div>
                  <div className="btn-shopping">
                    CHECKOUT
                  </div>
                </div>
              </div>
            </li>
          </ul>

        </div>
      </div>


      <div className="header__menu-bottom">
        <div className="header__menu">
          <div className="header__menu-top">
            <div className="menu__category">
              <i class="fa-solid fa-list"></i>
              <span>CATEGORIES</span>
            </div>

            <ul className="menu__list">
              <li className="menu__item"><a className='menu-item__link' href='#'>Home</a></li>
              <li className="menu__item"><a className='menu-item__link' href='#'>Product</a></li>
              <li className="menu__item"><a className='menu-item__link' href='#'>Service</a></li>
              <li className="menu__item item__shop">
                <a className='menu-item__link' href='#'>
                  Shop
                  <i class="fa-solid fa-chevron-down"></i>
                </a>
                <ul className="shop__list">
                  <li className="shop__item" onClick= { () => {navigate("/cart")}}><a href='#'>Car</a></li>
                  <li className="shop__item" onClick= { () => {navigate("/checkout")}}><a href='#'>Checkout</a></li>
                </ul>
              </li>
              <li className="menu__item"><a className='menu-item__link' href='#'>Pages</a></li>
              <li className="menu__item item__blog">
                <a className='menu-item__link' href='#'>
                  Blog
                  <i class="fa-solid fa-chevron-down"></i>
                </a>
                <ul className="blog__list">
                  <li className="blog__item"><a href='#'>Blog Single Sidebar</a></li>
                </ul>
              </li>
              <li className="menu__item"><a className='menu-item__link' href='#'>Contact Us</a></li>
            </ul>
          </div>

          <div className="header__menu-bottom">

          </div>
        </div>
      </div>

      <div className="main-category">
        <ul className="category__list">
          <li className="category__item menu__shop">
            <a href="" className="category__link-item">
              New Arrivals
              <i class="fa-solid fa-chevron-right"></i>
            </a>
            <ul className="list-menu-shop">
              <li className="list-menu-shop__item"><a href="" className="shop__link-item">Accessories</a></li>
              <li className="list-menu-shop__item"><a href="" className="shop__link-item">Top 100 Offer</a></li>
              <li className="list-menu-shop__item"><a href="" className="shop__link-item">Sunglass</a></li>
              <li className="list-menu-shop__item"><a href="" className="shop__link-item">Watch</a></li>
              <li className="list-menu-shop__item"><a href="" className="shop__link-item">Man's Product</a></li>
              <li className="list-menu-shop__item"><a href="" className="shop__link-item">Ladies</a></li>
              <li className="list-menu-shop__item"><a href="" className="shop__link-item">Westrn Dress</a></li>
              <li className="list-menu-shop__item"><a href="" className="shop__link-item">Denim</a></li>
            </ul>
          </li>
          <li className="category__item seller-bar">
            <a href="" className="category__link-item ">
              Best Selling
              <i class="fa-solid fa-chevron-right"></i>
            </a>
            <ul className="best-seller">
              <li className="seller-type">
                <div className="seller-btn">
                  Shop Kid's
                </div>
                <img src={require('../../../general/img/mega-menu1.jpg')} className="seller-img" />
                <div className="seller-list">
                  <a href="#" className="seller-item">Kids Toys</a>
                  <a href="#" className="seller-item">Kids Travel Car</a>
                  <a href="#" className="seller-item">Kids Color Shape</a>
                  <a href="#" className="seller-item">Kids Tent</a>
                </div>
              </li>

              <li className="seller-type">
                <div className="seller-btn">
                  Shop Men's
                </div>
                <img src={require('../../../general/img/mega-menu2.jpg')} className="seller-img" />
                <div className="seller-list">
                  <a href="#" className="seller-item">Watch</a>
                  <a href="#" className="seller-item">T-Shirt</a>
                  <a href="#" className="seller-item">Hoodies</a>
                  <a href="#" className="seller-item">Formal Pant</a>
                </div>
              </li>

              <li className="seller-type">
                <div className="seller-btn">
                  Shop Women's
                </div>
                <img src={require('../../../general/img/mega-menu3.jpg')} className="seller-img" />
                <div className="seller-list">
                  <a href="#" className="seller-item">Ladies Shirt</a>
                  <a href="#" className="seller-item">Ladies Frog</a>
                  <a href="#" className="seller-item">Ladies Sun Glass</a>
                  <a href="#" className="seller-item">Ladies Watch</a>
                </div>
              </li>


            </ul>


          </li>
          <li className="category__item"><a href="" className="category__link-item">Accessories</a></li>
          <li className="category__item"><a href="" className="category__link-item">Top 100 Offer</a></li>
          <li className="category__item"><a href="" className="category__link-item">Sunglass</a></li>
          <li className="category__item"><a href="" className="category__link-item">Watch</a></li>
          <li className="category__item"><a href="" className="category__link-item">Man's Product</a></li>
          <li className="category__item"><a href="" className="category__link-item">Ladies</a></li>
          <li className="category__item"><a href="" className="category__link-item">Westrn Dress</a></li>
          <li className="category__item"><a href="" className="category__link-item">Denim</a></li>
        </ul>

        <div className="category__promote">
          <h4>UP TO 50% OFF</h4>
          <h5>Shirt For Man</h5>
          <p>Maboriosam in a nesciung eget magnae dapibus disting tloctio in the find it pereri odiy maboriosm.</p>
          <div className="btn__shop"><a href="#" className="btn__link">SHOP NOW</a></div>
        </div>
      </div>


    </div >

  )
}
