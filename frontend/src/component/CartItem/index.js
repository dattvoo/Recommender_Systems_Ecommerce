import { useState } from "react";
import { useSelector } from "react-redux"
import "./style.css"
export const CartItem = () => {

    const cartItem = useSelector(state => state.product);
    console.log("🚀 ~ file: index.js:6 ~ CartItem ~ cartItem", cartItem)
    let total = 0;
    for (let i = 0; i < cartItem.length; i++) {
        total += cartItem[i].quantity * cartItem[i].price
    }
    console.log("🚀 ~ file: index.js:8 ~ CartItem ~ total", total)
    return (
        <>
            <div className="shopping-cart">
                <div className="shopping-title">
                    <span>{cartItem?.length} ITEMS</span>
                    <span>VIEW CART</span>
                </div>

                <ul className="shopping-list">
                    {cartItem?.map((item, index) => (
                        <li className="shopping-item" key={index}>
                            <div className="shopping-item__content">
                                <p className="shopping-item__name">Woman Ring</p>
                                <p className="shopping-item__quality">{item.quantity}x - {item.price}$</p>
                                {/* <div className="shopping-btn__remove">
                                    <i className="fa-solid fa-x"></i>
                                </div> */}
                            </div>
                            <div className="shopping-item__img">
                                <img
                                    src={`https://images.asos-media.com/products/ugg-classic-mini-boots-in-black-suede/${item.id}-2`}
                                    alt=""
                                />
                            </div>
                        </li>
                    ))}

                </ul>

                <div className="shopping-bottom">
                    <div className="shopping-sum">
                        <span className="sum-title">TOTAL</span>
                        <span className="sum-price">{total.toFixed(2)}$</span>
                    </div>
                    <div className="btn-shopping">CHECKOUT</div>
                </div>
            </div>
        </>)
}
