import "./style.css"
import "../../general/css/grid.css"
import "../../general/fontawesome-free-6.2.0-web/css/all.min.css"

export const Checkout = () =>{
    return(
        <div className="checkout-page">
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
        </div>
    )
}