import "./style.css";
export const CartItem = ({cartItems}) => {


    const cartItem = cartItems?.cartItem?.cartItems;
    // console.log("🚀 ~ file: index.js:6 ~ CartItem ~ cartItem", cartItem)
    let total = 0;
    for (let i = 0; i < cartItem?.length; i++) {
        total += cartItem[i]?.quantity * cartItem[i]?.id?.price
    }
    return (
        <>
            <div className="header-shopping-cart">
                <div className="shopping-title">
                    <span>VIEW CART</span>
                </div>
                {cartItem?.length === 0 && <img src="https://store.vtctelecom.com.vn/Content/images/no-data.png" style={{ width: "100%" }} />}
                {cartItem?.length > 0 && (
                    <>
                        <ul className="shopping-list">
                            {cartItem?.map((item, index) => (
                                <li className="shopping-item" key={index}>
                                    <div className="shopping-item__content">
                                        <p className="shopping-item__name">Woman Ring</p>
                                        <p className="shopping-item__quality">{item?.quantity}x - {item?.id?.price}$</p>
                                        
                                    </div>
                                    <div className="shopping-item__img">
                                        <img
                                            src={`https://images.asos-media.com/products/ugg-classic-mini-boots-in-black-suede/${item.product_id}-2`}
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
                        </div></>

                )}

            </div>
        </>)
}
