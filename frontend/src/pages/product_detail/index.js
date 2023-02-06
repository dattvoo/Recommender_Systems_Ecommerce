import { Breadcrumb } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { CartItem } from "../../component/CartItem";
import { Content5 } from "../../component/content5";
import { Footer } from "../../component/footer";
import "../../general/css/grid.css";
import "../../general/fontawesome-free-6.2.0-web/css/all.min.css";
import { Header } from "../Home/Header";
import { TrendingItem } from "../Home/TrendingItem";
import "./style.css";

export const Product__Detail = ({ hanldeAddToCart, user }) => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [product, setProduct] = useState();
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const getRecommendProduct = async () => {
    try {
      const { data } = await axios.get(`http://127.0.0.1:8000/product/${id}`);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };
  const navigate = useNavigate();
  const getProduct = async () => {
    try {
      const { data } = await axios.post("http://localhost:8000/product", {
        product_id: id,
      });
      if (data) {
        setProduct(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
    getRecommendProduct();
    window.scrollTo(0, 0);
  }, [id]);

  

  return (
    <div className="product-detail">
      <Header user={user} />
      <div className="breadcrumbs">
     
        <div className="grid wide">
          <Breadcrumb>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="">Product</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Product Detail</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      <section className="product-detail section">
        <div className="grid wide">
          <div className="row">
            <div className="col l-5 m-12 c-12">
              <div className="product__left">
                <div className="product__left-main">
                  <img
                    src={`https://images.asos-media.com/products/ugg-classic-mini-boots-in-black-suede/${id}-2`}
                    alt=""
                    className="product-main__img"
                  />
                </div>

                <ul className="product__left-item">
                  <li>
                    <img
                      src={require("../../general/img/img_product5.jfif")}
                      alt=""
                      className="product-item__img"
                    />
                  </li>
                  <li>
                    <img
                      src={require("../../general/img/img_product2.jfif")}
                      alt=""
                      className="product-item__img"
                    />
                  </li>
                  <li>
                    <img
                      src={require("../../general/img/img_product3.jfif")}
                      alt=""
                      className="product-item__img"
                    />
                  </li>
                  <li>
                    <img
                      src={require("../../general/img/img_product4.jfif")}
                      alt=""
                      className="product-item__img"
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div className="col l-7 m-12 c-12">
              <div className="product__right">
                <div className="product__right-title">
                  <h2 className="product__name">Woman Ring</h2>
                  <ul className="product__right-state">
                    <li>
                      Product Id:{" "}
                      <span className="product__id strong">{product?.id}</span>
                    </li>
                    <li>
                      Status:{" "}
                      <span className="product__status strong">
                        {product?.status}
                      </span>
                    </li>
                  </ul>
                  <h3 className="product__price">Price: {product?.price}$</h3>
                </div>

                <div className="product__option">
                  <div className="row">
                    <div className="col l-6">
                      <div className="product__color">
                        <p className="product__color-title strong">Color:</p>
                        <ul className="product-list">
                          <li className="product-item color-red"></li>
                          <li className="product-item color-green"></li>
                          <li className="product-item color-blue"></li>
                        </ul>
                      </div>
                    </div>

                    <div className="col l-6">
                      <div className="product__size">
                        <p className="product__size-title strong">Size:</p>
                        <ul className="product-list">
                          <li className="product-item">S</li>
                          <li className="product-item">M</li>
                          <li className="product-item">L</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="product__quality">
                    <div className="product__quality-title strong">
                      Quantity:{" "}
                    </div>
                    <div className="product__quality-option">
                      <button
                        className="btn_quality"
                        id="minus-btn"
                        onClick={() => {
                          setQuantity(quantity - 1);
                        }}
                        disabled={quantity === 1 ? true : false}
                      >
                        <i class="fa fa-minus"></i>
                      </button>
                      <input
                        type="text"
                        class="input-quality"
                        value={quantity}
                        onChange={() => { }}
                        min={1}
                      />
                      <button
                        className="btn_quality"
                        id="plus-btn"
                        onClick={() => {
                          setQuantity(quantity + 1);
                        }}
                      >
                        <i class="fa fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="product__btn-add">
                  <div className="row">
                    <div className="col l-6">
                      <button
                        className={`btn btn__add ${product?.status === "Sold Out"
                            ? "soldout"
                            : "availability"
                          }`}
                        onClick={() => hanldeAddToCart(product, quantity)}
                        disabled={product?.status === "Sold Out" ? true : false}
                      >
                        Add To Card
                      </button>
                    </div>
                    <div className="col l-3">
                      <div className="btn btn__heart">
                        <i className="fa-regular fa-heart"></i>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="product__buy" onClick={() => navigate("/cart")}>
                  <div className="btn btn__buy">Buy Now</div>
                </div>

                <div className="product__info">
                  <h3 className="product__info-title strong">
                    Product Details:
                  </h3>
                  <p>{product?.product_details}</p>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TrendingItem title="Recommend Product" productRecId={data} />
      <Content5 />
      <Footer />
    </div>
  );
};
