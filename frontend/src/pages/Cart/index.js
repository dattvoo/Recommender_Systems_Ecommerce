import axios from "axios"
import { useSelector } from "react-redux"
import { Footer } from "../../component/footer"
import "../../general/css/grid.css"
import "../../general/fontawesome-free-6.2.0-web/css/all.min.css"
import { Header } from "../Home/Header"
import "./style.css"
import { Breadcrumb } from 'antd';
import { Link } from "react-router-dom"
export const Cart = () => {
    const product = useSelector(state => state.product);
    const shipfee = 2;
    let total = 0;
    for (let i = 0; i < product.length; i++) {
        total += product[i].quantity * product[i].price
    }

    const handleConfirm = async () => {
        try {
            const { data } = await axios.post("http://localhost:8000/addtodata", {
                // product_id: id,
            });
        } catch (error) {

        }
    }

    return (
        <>
            <Header />
            <div className="cart-page">
                <div className="breadcrumbs">
                  
                    <div className="grid wide">

                        <Breadcrumb>
                            <Breadcrumb.Item>
                                    <Link to="/">Home</Link>                            
                            </Breadcrumb.Item>
                            <Breadcrumb.Item>Cart</Breadcrumb.Item>
                        </Breadcrumb>
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
                                                        <a href="" className="btn" onClick={handleConfirm}>Confirm Your Cart</a>
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