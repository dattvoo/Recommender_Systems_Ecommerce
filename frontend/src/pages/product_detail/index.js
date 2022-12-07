import React from 'react'
import "./style.css"
import "../../general/css/grid.css"
import "../../general/fontawesome-free-6.2.0-web/css/all.min.css"
import { Footer } from '../../component/footer'
import { Content5 } from '../../component/content5'
import derivative from 'antd/es/theme/themes/default'

export const Product__Detail = () =>{
    return(
        <div className="product-detail">
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
                                            <a href="#">
                                                Home
                                                <i class="fa-solid fa-arrow-right"></i>
                                            </a>

                                        </li>
                                        <li className="active">
                                            <a href="#">
                                                Product
                                                <i class="fa-solid fa-arrow-right"></i>
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
                        <div className="col l-7 m-12 c-12">
                            <div className="product__left">
                                <div className="product__left-main">
                                    <img src={require("../../general/img/img_product1.jfif")} alt="" className='product-main__img' />
                                </div>

                                <ul className="product__left-item">
                                    <li>
                                        <img src={require("../../general/img/img_product5.jfif")} alt="" className='product-item__img' />
                                    </li>
                                    <li>
                                        <img src={require("../../general/img/img_product2.jfif")} alt="" className='product-item__img' />
                                    </li>
                                    <li>
                                        <img src={require("../../general/img/img_product3.jfif")} alt="" className='product-item__img' />
                                    </li>
                                    <li>
                                        <img src={require("../../general/img/img_product4.jfif")} alt="" className='product-item__img' />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col l-5 m-12 c-12">
                            <div className="product__right">
                                <div className="product__right-title">
                                    <h2 className='product__name'>Woman Ring</h2>
                                    <ul className='product__right-state'>
                                        <li>
                                            Mã sản phẩm: <span className="product__id strong">AV00153</span>
                                        </li>
                                        <li>
                                            Tình trạng: <span className="product__status strong">AV00153</span>
                                        </li> 
                                    </ul>
                                    <h3 className="product__price">$600.000</h3>
                                </div>


                                <div className="product__option">
                                    <div className="row">
                                        <div className="col l-6">
                                            <div className="product__color">
                                                <p className="product__color-title strong">Màu sắc:</p>
                                                <ul className="product-list">
                                                    <li className="product-item color-red">
                                                    </li>
                                                    <li className="product-item color-green">
                                                    </li>
                                                    <li className="product-item color-blue">
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="col l-6">
                                            <div className="product__size">
                                                <p className="product__size-title strong">Size:</p>
                                                <ul className="product-list">
                                                    <li className="product-item">S
                                                    </li>
                                                    <li className="product-item">M
                                                    </li>
                                                    <li className="product-item">L
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="product__quality"> 
                                        <div className="product__quality-title strong">Số lượng: </div>
                                        <div className="product__quality-option">
                                            <button class="btn_quality" id="minus-btn"><i class="fa fa-minus"></i></button>
                                            <input type="text" class="input-quality" value="1" min="1"/>
                                            <button class="btn_quality" id="plus-btn"><i class="fa fa-plus"></i></button>      
                                        </div>
                                    </div>
                                </div>
                                    
                                <div className="product__btn-add">
                                    <div className="row">
                                        <div className="col l-9">
                                            <div className="btn btn__add">THÊM VÀO GIỎ HÀNG</div>
                                        </div>
                                        <div className="col l-3">
                                            <div className="btn btn__heart">
                                                <i class="fa-regular fa-heart"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='product__buy'>
                                    <div className="btn btn__buy">
                                        MUA NGAY
                                    </div>
                                </div>

                                <div className="product__info">
                                    <h3 className="product__info-title strong">
                                        THÔNG TIN SẢN PHẨM
                                    </h3>
                                    <p>
                                    - Chất liệu:  kim loại <br />
                                    - Nhẫn hở, có thể bóp và điều chỉnh hình dáng kích thước theo tay từng người <br />
                                    </p>
                                    <p>
                                    LƯU Ý: <br />
                                    - Kích thước có thể có sai số 1-3cm <br />
                                    - Màu sắc thực của sản phẩm có thể có chút khác biệt so vs hình tuỳ vào điều kiện ánh sáng (đèn điện, mặt trời,…), màn hình hiển thị của điện thoại, máy tính…
                                    </p>
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