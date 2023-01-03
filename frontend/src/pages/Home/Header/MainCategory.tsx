import SimpleImageSlider from "react-simple-image-slider";

export const MainCategory = () => {
  const images = [
    {
      url: "https://skymegamart.in/wp-content/uploads/2021/07/blog-image03.jpg",
    },
    {
      url: "https://images.template.net/22999/Free-Christmas-Holiday-Sale-Twitter-Post.jpg",
    },

    {
      url: "https://thietke6d.com/wp-content/uploads/2020/12/banner13-1.jpg",
    },

    {
      url: "https://aristino.com/Data/upload/images/1200x629(3).jpg",
    },
  ];
  return (
    <div className="main-category">
      <ul className="category__list">
        <li className="category__item menu__shop">
          <a href="" className="category__link-item">
            New Arrivals
            <i className="fa-solid fa-chevron-right"></i>
          </a>
          <ul className="list-menu-shop">
            <li className="list-menu-shop__item">
              <a href="" className="shop__link-item">
                Accessories
              </a>
            </li>
            <li className="list-menu-shop__item">
              <a href="" className="shop__link-item">
                Top 100 Offer
              </a>
            </li>
            <li className="list-menu-shop__item">
              <a href="" className="shop__link-item">
                Sunglass
              </a>
            </li>
            <li className="list-menu-shop__item">
              <a href="" className="shop__link-item">
                Watch
              </a>
            </li>
            <li className="list-menu-shop__item">
              <a href="" className="shop__link-item">
                Man's Product
              </a>
            </li>
            <li className="list-menu-shop__item">
              <a href="" className="shop__link-item">
                Ladies
              </a>
            </li>
            <li className="list-menu-shop__item">
              <a href="" className="shop__link-item">
                Westrn Dress
              </a>
            </li>
            <li className="list-menu-shop__item">
              <a href="" className="shop__link-item">
                Denim
              </a>
            </li>
          </ul>
        </li>
        <li className="category__item seller-bar">
          <a href="" className="category__link-item ">
            Best Selling
            <i className="fa-solid fa-chevron-right"></i>
          </a>
          <ul className="best-seller">
            <li className="seller-type">
              <div className="seller-btn">Shop Kid's</div>
              <img
                src={require("../../../general/img/mega-menu1.jpg")}
                className="seller-img"
              />
              <div className="seller-list">
                <a href="#" className="seller-item">
                  Kids Toys
                </a>
                <a href="#" className="seller-item">
                  Kids Travel Car
                </a>
                <a href="#" className="seller-item">
                  Kids Color Shape
                </a>
                <a href="#" className="seller-item">
                  Kids Tent
                </a>
              </div>
            </li>

            <li className="seller-type">
              <div className="seller-btn">Shop Men's</div>
              <img
                src={require("../../../general/img/mega-menu2.jpg")}
                className="seller-img"
              />
              <div className="seller-list">
                <a href="#" className="seller-item">
                  Watch
                </a>
                <a href="#" className="seller-item">
                  T-Shirt
                </a>
                <a href="#" className="seller-item">
                  Hoodies
                </a>
                <a href="#" className="seller-item">
                  Formal Pant
                </a>
              </div>
            </li>

            <li className="seller-type">
              <div className="seller-btn">Shop Women's</div>
              <img
                src={require("../../../general/img/mega-menu3.jpg")}
                className="seller-img"
              />
              <div className="seller-list">
                <a href="#" className="seller-item">
                  Ladies Shirt
                </a>
                <a href="#" className="seller-item">
                  Ladies Frog
                </a>
                <a href="#" className="seller-item">
                  Ladies Sun Glass
                </a>
                <a href="#" className="seller-item">
                  Ladies Watch
                </a>
              </div>
            </li>
          </ul>
        </li>
        <li className="category__item">
          <a href="" className="category__link-item">
            Accessories
          </a>
        </li>
        <li className="category__item">
          <a href="" className="category__link-item">
            Top 100 Offer
          </a>
        </li>
        <li className="category__item">
          <a href="" className="category__link-item">
            Sunglass
          </a>
        </li>
        <li className="category__item">
          <a href="" className="category__link-item">
            Watch
          </a>
        </li>
        <li className="category__item">
          <a href="" className="category__link-item">
            Man's Product
          </a>
        </li>
        <li className="category__item">
          <a href="" className="category__link-item">
            Ladies
          </a>
        </li>
        <li className="category__item">
          <a href="" className="category__link-item">
            Westrn Dress
          </a>
        </li>
        <li className="category__item">
          <a href="" className="category__link-item">
            Denim
          </a>
        </li>
      </ul>

      <div className="category__promote">
        <SimpleImageSlider
          width={920}
          height={440}
          images={images}
          showBullets={true}
          showNavs={true}
          slideDuration={0.5}
          loop
          autoPlay={true}
          style={{borderRadius: "8px"}}
        />
      </div>
    </div>
  );
};
