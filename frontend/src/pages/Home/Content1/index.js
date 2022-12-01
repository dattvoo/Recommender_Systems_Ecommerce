import "./style.css"
import "../../../general/css/grid.css"
import '../../../general/fontawesome-free-6.2.0-web/css/all.min.css'
export const Content1 = () => {
    return (
        <div className="header">
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

                <div className="header__menu-bottom">

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
                    <li className="category__item"><a href="" className="category__link-item">
                        Best Selling
                        <i class="fa-solid fa-chevron-right"></i>
                    </a></li>
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
        </div>
    )
}
