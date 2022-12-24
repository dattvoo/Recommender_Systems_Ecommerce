import React from 'react'
import "./style.css"
import "../../general/css/grid.css"
import "../../general/fontawesome-free-6.2.0-web/css/all.min.css"
import { Footer } from '../../component/footer'
import { Content5 } from '../../component/content5'

export const Checkout = () =>{
    return(
        <div className="checkout-page">
                <div className="header__checkout">
                    <div className="header_12">
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
                                <a href='#' className='item__link' ></a>
                            </li>
                        </ul>
                        </nav>
                    </div>

                    <div className="header-bottom">
                        <div className="header-with-search">
                        <div className="header__logo">
                            <img src={require("../../general/img/logo.png")} className='header__logo-img' />
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
                            <div className="header-shopping-cart">
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
                                    <img src={require("../../general/img/product-1.jpg")} alt="" />
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
                                    <img src={require("../../general/img/product-2.jpg")} alt="" />
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
                    </div>


                <div className="header__menu-bottom">
                <div className="grid wide">
                    <div className="header__menu">
                        <div className="header__menu-top">
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
                                        <li className="shop__item"><a href='#'>Car</a></li>
                                        <li className="shop__item"><a href='#'>Checkout</a></li>
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
                    </div>
                </div>
                </div>
            </div>

            <div className="breadcrumbs">
                    <div className="grid wide">
                        <div className="row">
                            <div className="col l-12">
                                <div className="bread-inner">
                                    <ul className="bread-list">
                                        <li>
                                            <a href="#">Home
                                                <i class="fa-solid fa-arrow-right"></i>
                                            </a>

                                        </li>
                                        <li className="active">
                                            <a href="#">Check out</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            <section className="shop checkout section">
                <div className="grid wide">
                    <div className="row">
                        <div className="col l-8 m-12 c-12">
                            <div className="checkout-form">
                                <h2>Make Your Checkout Here</h2>
                                <p>Please register in order to checkout more quickly</p>
                                <form action="">
                                    <div className="row">
                                        <div className="col l-6 m-6 c-12">
                                            <div className="form-group">
                                                <label htmlFor="">
                                                    Frist Name
                                                    <span>*</span>
                                                </label>
                                                <input type="text" placeholder=""/>
                                            </div>
                                        </div>
                                        <div className="col l-6 m-6 c-12">
                                            <div className="form-group">
                                                <label htmlFor="">
                                                Last Name
                                                    <span>*</span>
                                                </label>
                                                <input type="text" placeholder=""/>
                                            </div>
                                        </div>
                                        <div className="col l-6 m-6 c-12">
                                            <div className="form-group">
                                                <label htmlFor="">
                                                Email Address
                                                    <span>*</span>
                                                </label>
                                                <input type="text" placeholder=""/>
                                            </div>
                                        </div>
                                        <div className="col l-6 m-6 c-12">
                                            <div className="form-group">
                                                <label htmlFor="">
                                                Phone Number
                                                    <span>*</span>
                                                </label>
                                                <input type="text" placeholder=""/>
                                            </div>
                                        </div>
                                        <div className="col l-6 m-6 c-12">
                                            <div className="form-group">
                                                <label htmlFor="">
                                                Country

                                                    <span>*</span>
                                                </label>
                                                <div className="nice-select" tabIndex={0}>
                                                    <span className="current">Viet Nam
                                                        
                                                    </span>
                                                    <ul className="list">
                                                        <li className="option">China</li>
                                                        <li className="option">United State</li>
                                                        <li className="option">Korea</li>
                                                        <li className="option">Japan</li>
                                                        <li className="option">France</li>
                                                        <li className="option">EngLand</li>
                                                    </ul>
                                                    <i class="fa-solid fa-angle-down"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col l-6 m-6 c-12">
                                            <div className="form-group">
                                                <label htmlFor="">
                                                State / Divition
                                                    <span>*</span>
                                                </label>
                                                <div className="nice-select" tabIndex={0}>
                                                    <span className="current">Ha Noi
                                                        
                                                    </span>
                                                    <ul className="list">
                                                        <li className="option">Bac Kinh</li>
                                                        <li className="option">New York</li>
                                                        <li className="option">Seoul</li>
                                                        <li className="option">ToKyo</li>
                                                        <li className="option">Paris</li>
                                                        <li className="option">London</li>
                                                    </ul>
                                                    <i class="fa-solid fa-angle-down"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col l-6 m-6 c-12">
                                            <div className="form-group">
                                                <label htmlFor="">
                                                Address Line 
                                                    <span>*</span>
                                                </label>
                                                <input type="text" placeholder=""/>
                                            </div>
                                        </div>
                                        <div className="col l-6 m-6 c-12">
                                            <div className="form-group">
                                                <label htmlFor="">
                                                Address Line 2
                                                    <span>*</span>
                                                </label>
                                                <input type="text" placeholder=""/>
                                            </div>
                                        </div>
                                        <div className="col l-6 m-6 c-12">
                                            <div className="form-group">
                                                <label htmlFor="">
                                                Postal Code
                                                    <span>*</span>
                                                </label>
                                                <input type="text" placeholder=""/>
                                            </div>
                                        </div>
                                        <div className="col l-6 m-6 c-12">
                                            <div className="form-group">
                                                <label htmlFor="">
                                                Company
                                                    <span>*</span>
                                                </label>
                                                <input type="text" placeholder=""/>
                                            </div>
                                        </div>
                                        <div className="col l-12">
                                            <div className="form-group create-account">
                                                <input type="checkbox" className="check-input" />
                                                <label htmlFor="">Create an account</label>
                                            </div>
                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>
                        <div className="col l-4 m-12 c-12">
                            <div className="order-details">
                                <div className="single-widget">
                                    <h2>Cart Totals</h2>
                                    <div className="content">
                                        <ul>
                                            <li>
                                                Sub Total
                                                <span>$330.00</span>
                                            </li> <li>
                                            (+) Shipping
                                                <span>$10.00</span>
                                            </li> 
                                            <li className="last">
                                                Total
                                                <span>$340.00</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="single-widget">
                                    <h2>PAYMENTS</h2>
                                    <div className="content">
                                        <div className="checkbox">
                                            <label htmlFor="" className="checkbox-inline">
                                                <input type="checkbox" />Check Payments
                                            </label>
                                            <label htmlFor="" className="checkbox-inline">
                                                <input type="checkbox" />Cash On Delivery
                                            </label>
                                            <label htmlFor="" className="checkbox-inline">
                                                <input type="checkbox" />PayPal
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-widget">                          
                                    <div className="content">
                                        <img src={require("../../general/img/payment.png")} alt="" />
                                    </div>
                                </div>
                                <div className="single-widget">
                                    <div className="content">
                                        <div className="single-widget-button">
                                            <a href="#" className="single-widget-btn">Proceed to checkout</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Content5 />
            <Footer />
        </div>
    )
}