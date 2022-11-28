import React from 'react'
import "./style.css"
import "../../../general/css/grid.css"
import '../../../general/fontawesome-free-6.2.0-web/css/all.min.css'
export const Header = () => {
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
            <li className="header__navbar-item">
              <i class="fa-solid fa-power-off"></i>
              <a href='#' className='item__link'>Login</a>
            </li>
          </ul>
        </nav>  
      </div>
      
      <div className="header-bottom">
        <div className="header-with-search">
          <div className="header__logo">
            <img src={require("../../../general/img/logo.png")} className='header__logo-img'/>
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
            </li>
          </ul>

        </div>
      </div>

    

    </div>

  )
}
