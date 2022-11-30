import "./style.css"
import "../../general/css/grid.css"
import "../../general/fontawesome-free-6.2.0-web/css/all.min.css"
import { Header } from "../Home/Header"
import { Footer } from "../../component/footer"
export const Cart = () => {
    return (
        <>
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
                                                <i class="fa-solid fa-arrow-right"></i>
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
                                                <i class="fa-solid fa-trash"></i>
                                            </th>
                                        </tr>

                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="image" data-title="No">
                                                <img src={require("../../general/img/shop-list1.jpg")} alt="" />
                                            </td>
                                            <td className="product-desc" data-title="No">
                                                <p className="product-name">
                                                    <a href="#">Women Dress</a>
                                                </p>
                                                <p className="product-desc">
                                                    Maboriosam in a tonto nesciung eget distingy magndapibus.
                                                </p>
                                            </td>
                                            <td className="price">
                                                <span>$110.00</span>
                                            </td>
                                            <td className="quantity">
                                                <div className="input-group">
                                                    <div className="button-btn minuts">
                                                        <button className="btn btn-primary btn-number" type="button" datatype="minus" data-field="quant[1]" disabled="disabled">
                                                            <i class="fa-solid fa-minus"></i>
                                                        </button>
                                                    </div>
                                                    <input type="text" className="input-number "
                                                        data-min={1} data-max={100} value={1} name="quant[1]" />
                                                    <div className="button-btn plus">
                                                        <button className="btn btn-primary btn-number" type="button" datatype="minus" data-field="quant[1]" >
                                                            <i class="fa-solid fa-plus"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="total-amout">
                                                <span>$220.88</span>
                                            </td>
                                            <td className="action">
                                                <a href="#">
                                                    <i class="fa-solid fa-trash"></i>
                                                </a>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="image" data-title="No">
                                                <img src={require("../../general/img/shop-list2.jpg")} alt="" />
                                            </td>
                                            <td className="product-desc" data-title="No">
                                                <p className="product-name">
                                                    <a href="#">Women Dress</a>
                                                </p>
                                                <p className="product-desc">
                                                    Maboriosam in a tonto nesciung eget distingy magndapibus.
                                                </p>
                                            </td>
                                            <td className="price">
                                                <span>$110.00</span>
                                            </td>
                                            <td className="quantity">
                                                <div className="input-group">
                                                    <div className="button-btn minuts">
                                                        <button className="btn btn-primary btn-number" type="button" datatype="minus" data-field="quant[1]" disabled="disabled">
                                                            <i class="fa-solid fa-minus"></i>
                                                        </button>
                                                    </div>
                                                    <input type="text" className="input-number "
                                                        data-min={1} data-max={100} value={1} name="quant[1]" />
                                                    <div className="button-btn plus">
                                                        <button className="btn btn-primary btn-number" type="button" datatype="minus" data-field="quant[1]" >
                                                            <i class="fa-solid fa-plus"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="total-amout">
                                                <span>$220.88</span>
                                            </td>
                                            <td className="action">
                                                <a href="#">
                                                    <i class="fa-solid fa-trash"></i>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="image" data-title="No">
                                                <img src={require("../../general/img/shop-list3.jpg")} alt="" />
                                            </td>
                                            <td className="product-desc" data-title="No">
                                                <p className="product-name">
                                                    <a href="#">Women Dress</a>
                                                </p>
                                                <p className="product-desc">
                                                    Maboriosam in a tonto nesciung eget distingy magndapibus.
                                                </p>
                                            </td>
                                            <td className="price">
                                                <span>$110.00</span>
                                            </td>
                                            <td className="quantity">
                                                <div className="input-group">
                                                    <div className="button-btn minuts">
                                                        <button className="btn btn-primary btn-number" type="button" datatype="minus" data-field="quant[1]" disabled="disabled">
                                                            <i class="fa-solid fa-minus"></i>
                                                        </button>
                                                    </div>
                                                    <input type="text" className="input-number "
                                                        data-min={1} data-max={100} value={1} name="quant[1]" />
                                                    <div className="button-btn plus">
                                                        <button className="btn btn-primary btn-number" type="button" datatype="minus" data-field="quant[1]" >
                                                            <i class="fa-solid fa-plus"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="total-amout">
                                                <span>$220.88</span>
                                            </td>
                                            <td className="action">
                                                <a href="#">
                                                    <i class="fa-solid fa-trash"></i>
                                                </a>
                                            </td>
                                        </tr>


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
                                                        <span>$330.00</span>
                                                    </li>
                                                    <li>
                                                        Shipping
                                                        <span>Free</span>
                                                    </li>
                                                    <li>
                                                        You Save
                                                        <span>$20.00</span>
                                                    </li>
                                                    <li class="last">
                                                        You Pay
                                                        <span>$310.00</span>
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
            <Footer/>
        </>

    )
}