import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { CartItem } from "../../component/CartItem"
import { Footer } from "../../component/footer"
import "../../general/css/grid.css"
import "../../general/fontawesome-free-6.2.0-web/css/all.min.css"
import { Header } from "../Home/Header"
import "./style.css"
export const Cart = () => {
    const product = useSelector(state => state.product);
    const shipfee = 2;
    const navigate = useNavigate();
    let total = 0;
    for (let i = 0; i < product.length; i++) {
        total += product[i].quantity * product[i].price
    }
    return (
        <>
            {/* <div className="header__checkout">
                <div className="header_12">
                    <div class="header-top">
                        <nav className='header__navbar'>
                            <ul className="header__navbar-list">
                                <li className="header__navbar-item">
                                    <i class="fa-solid fa-headset"></i>
                                    <a className='item__link'>+060 (800) 801-582</a>
                                </li>
                                <li className="header__navbar-item">
                                    <i class="fa-regular fa-envelope"></i>
                                    <a className='item__link'>support@shophub.com</a>
                                </li>
                            </ul>

                            <ul className="header__navbar-list">
                                <li className="header__navbar-item">
                                    <i class="fa-solid fa-location-dot"></i>
                                    <a className='item__link'>Store location</a>
                                </li>
                                <li className="header__navbar-item">
                                    <i class="fa-regular fa-bell"></i>
                                    <a className='item__link'>Daily deal</a>
                                </li>
                                <li className="header__navbar-item">
                                    <i class="fa-solid fa-user"></i>
                                    <a className='item__link'>My Acount</a>
                                </li>
                                <li className="header__navbar-item">
                                    <i class="fa-solid fa-power-off"></i>
                                    <a className='item__link' ></a>
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
                                    <a className='right__item-link'><i class="fa-regular fa-heart"></i></a>
                                </li>

                                <li className="right__item">
                                    <a className='right__item-link'><i class="fa-solid fa-circle-user"></i></a>
                                </li>

                                <li className="right__item item__cart">
                                    <a className='right__item-link'><i class="fa-solid fa-cart-shopping"></i></a>
                                    <span className='cart__quality'>{product.length}</span>

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
                                    <li className="menu__item"><a className='menu-item__link' onClick={() => navigate("/")}>Home</a></li>
                                    <li className="menu__item"><a className='menu-item__link'>Product</a></li>
                                    <li className="menu__item"><a className='menu-item__link'>Service</a></li>
                                    <li className="menu__item item__shop">
                                        <a className='menu-item__link'>
                                            Shop
                                            <i class="fa-solid fa-chevron-down"></i>
                                        </a>
                                        <ul className="shop__list">
                                            <li className="shop__item"><a>Car</a></li>
                                            <li className="shop__item"><a>Checkout</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu__item"><a className='menu-item__link'>Pages</a></li>
                                    <li className="menu__item item__blog">
                                        <a className='menu-item__link'>
                                            Blog
                                            <i class="fa-solid fa-chevron-down"></i>
                                        </a>
                                        <ul className="blog__list">
                                            <li className="blog__item"><a>Blog Single Sidebar</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu__item"><a className='menu-item__link'>Contact Us</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <Header />
            <div className="cart-page">
                <div className="breadcrumbs">
                    <div className="grid wide">
                        <div className="row">
                            <div className="col l-12">
                                <div className="bread-inner">
                                    <ul className="bread-list">
                                        <li>
                                            <a href="#">Home
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </a>

                                        </li>
                                        <li className="active">
                                            <a href="#">Cart</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shopping-cart section">
                    <div className="grid wide">
                        <div className="row">
                            <div className="col l-12">
                                <table className="table shopping-summer">
                                    <thead >
                                        <tr className="main-hading">
                                            <th>Product</th>
                                            <th>Name</th>
                                            <th className="text-center">Unit Price</th>
                                            <th className="text-center">Quantity</th>
                                            <th className="text-center">ToTal</th>
                                            <th className="text-center">
                                                <i className="fa-solid fa-trash"></i>
                                            </th>
                                        </tr>

                                    </thead>
                                    <tbody>
                                        {product.length === 0 && <img src="https://store.vtctelecom.com.vn/Content/images/no-data.png" className="img-nodata" />}

                                        {product.map((item, index) => (
                                            <tr key={index}>

                                                <td className="image" data-title="No">
                                                    <img src={`https://images.asos-media.com/products/ugg-classic-mini-boots-in-black-suede/${item.id}-2`} />
                                                </td>
                                                <td className="product-desc" data-title="No">
                                                    <p className="product-name">
                                                        <a href="#">Women Dress</a>
                                                    </p>
                                                    <p className="product-desc">
                                                        {item?.product_details}
                                                    </p>
                                                </td>
                                                <td className="price">
                                                    <span>{item.price}$</span>
                                                </td>
                                                <td className="quantity">
                                                    <div className="input-group">
                                                        {/* <div className="button-btn minuts">
                                                            <button className="btn btn-primary btn-number" type="button" datatype="minus" data-field="quant[1]" disabled="disabled">
                                                                <i className="fa-solid fa-minus"></i>
                                                            </button>
                                                        </div> */}
                                                        <input type="text" className="input-number "
                                                            data-min={1} data-max={100} name="quant[1]" value={item.quantity} onchange={() => { }} />
                                                        {/* <div className="button-btn plus">
                                                            <button className="btn btn-primary btn-number" type="button" datatype="minus" data-field="quant[1]" >
                                                                <i className="fa-solid fa-plus"></i>
                                                            </button>
                                                        </div> */}
                                                    </div>
                                                </td>
                                                <td className="total-amout">
                                                    <span>{item.quantity * item.price}$</span>
                                                </td>
                                                <td className="action">
                                                    <a href="#">
                                                        <i className="fa-solid fa-trash"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col l-12">
                                <div className="total-amount">
                                    <div className="row">
                                        <div className="col l-8 m-5 c-12">
                                            <div className="left">
                                                <div className="coupon">
                                                    <form action="">
                                                        <input name="Coupon" placeholder="Enter your coupon" />
                                                        <button className="btn btn-coupon">Apply</button>
                                                    </form>
                                                </div>
                                                <div className="checkbox ">
                                                    <label htmlFor="" className="checkbox-inline checked">
                                                        <input type="checkbox" />
                                                        Shipping (+10$)
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col l-4 m-7 c-12">
                                            <div className="right">
                                                <ul>
                                                    <li>
                                                        Cart Subtotal
                                                        <span>{total.toFixed(2)}$</span>
                                                    </li>
                                                    <li>
                                                        Shipping
                                                        <span>{shipfee}$</span>
                                                    </li>
                                                    <li className="last">
                                                        You Pay
                                                        <span>{(total + shipfee).toFixed(2)}</span>
                                                    </li>
                                                    <div className="button5">
                                                        <a href="" className="btn">Checkout</a>
                                                        <a href="" className="btn">Continue Shopping</a>
                                                    </div>
                                                </ul>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    )
}