import { Form as AntForm } from "antd";
import styled from "styled-components";

export const HeaderStyle = styled.div`
  max-width: 1200px;
  margin: auto;
  .header-top {
    padding: 4px 0;
    border-bottom: 1px solid rgb(215, 215, 215);
  }

  .header__navbar {
    display: flex;
    justify-content: space-between;
  }

  .header__navbar-list {
    display: flex;
    list-style: none;
    padding-left: 0;
  }

  .header__navbar-item {
    padding: 0 16px;
    border-right: 1px solid rgb(194, 192, 192);
  }

  .header__navbar-item:last-child {
    border-right: none;
  }

  .header__navbar-item i {
    color: #f7941d;
    padding-right: 8px;
  }

  .item__link {
    text-decoration: none;
    color: #333;
    font-weight: 400;
  }

  .header-bottom {
    margin-top: 40px;
  }

  .header-with-search {
    display: flex;
    justify-content: space-between;
  }

  .header__logo {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .header__logo-img {
    cursor: pointer;
  }

  .header__search {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .header__select {
    border: 1px solid rgb(171, 169, 169);
    border-radius: 6px 0 0 6px;
    height: 45px;
    width: 150px;
    cursor: pointer;
    position: relative;
  }

  .header__select::after {
    position: absolute;
    content: "";
    width: 152px;
    height: 6px;
    top: 44px;
    left: 0;
  }

  .header__select:hover .select__list {
    display: block;
  }

  .select__list {
    position: absolute;
    list-style: none;
    border: 1px solid #918f8d;
    z-index: 1;
    background-color: #fff;
    padding: 0;
    display: none;
    top: 46px;
    border-radius: 3px;
  }

  .select__item {
    padding: 4px 0 4px 12px;
    text-align: left;
    width: 152px;
  }

  .select__item:hover {
    background-color: #f7941d;
  }

  .header__select span {
    line-height: 45px;
    font-weight: 400;
    padding-right: 12px;
  }

  .header__input-search {
    margin: auto;
    height: 45px;
    width: 400px;
    border: 1px solid rgb(171, 169, 169);
    border-left: none;
    border-right: none;
    font-size: 16px;
    padding-left: 20px;
    transform: translateY(-1px);
  }

  .btn__search {
    height: 45px;
    width: 60px;
    border-radius: 0 6px 6px 0;
    border: none;
    color: #fff;
    background-color: #f7941d;
    cursor: pointer;
    transform: translateY(1px);
  }

  .btn_icon {
    font-size: 18px;
  }

  .header__right {
    display: flex;
    list-style: none;
  }

  .right__item {
    padding: 8px 12px;
  }

  .right__item-link i {
    color: #f7941d;
    font-size: 24px;
  }

  .item__cart {
    position: relative;
  }

  .cart__quality {
    position: absolute;
    content: "";
    width: 22px;
    height: 22px;
    right: -1px;
    top: -5px;
    border-radius: 50%;
    color: #fff;
    background-color: #f7941d;
  }

  .item__cart::after {
    position: absolute;
    content: "";
    width: 150px;
    height: 60px;
    right: 0;
    top: 29px;
  }

  .item__cart:hover .shopping-cart {
    display: block;
  }

  .shopping-cart {
    width: 310px;
    padding: 16px;
    position: absolute;
    right: 0;
    top: 188%;
    /* display: none; */
    border: 1px solid #bcbcbc;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    z-index: 10;
  }

  .shopping-title {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgb(172, 172, 172);
    font-weight: 600;
    padding-bottom: 12px;
  }

  .shopping-list {
  }

  .shopping-item {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgb(172, 172, 172);
    padding: 16px 0;
  }

  .shopping-item__content {
    text-align: left;
  }

  .shopping-item__name {
    font-weight: 500;
  }

  .shopping-item__quality {
    color: #918f8d;
    padding-bottom: 10px;
  }

  .shopping-btn__remove {
    width: 20px;
    height: 20px;
    border: 1px solid rgb(172, 172, 172);
    text-align: center;
    line-height: 20px;
    font-size: 14px;
  }

  .shopping-bottom {
    padding-top: 16px;
  }

  .shopping-sum {
    display: flex;
    justify-content: space-between;
    font-weight: 500;
    padding-bottom: 18px;
  }

  .btn-shopping {
    height: 44px;
    width: 100%;
    background-color: rgb(25, 25, 25);
    color: #fff;
    font-weight: 500;
    line-height: 44px;
    cursor: pointer;
  }

  .btn-shopping:hover {
    background-color: #f7941d;
  }

  .header__menu {
    /* padding-top: 40px; */
  }

  .header__menu-top {
    background-color: #504f4e;
    display: flex;
    align-items: center;
    height: 60px;
  }

  .menu__category {
    padding: 0 36px 10px;
    font-size: 24px;
    color: #fff;
    height: 100%;
    width: 250px;
    background-color: #f7941d;
    line-height: 60px;
  }

  .menu__category span {
    padding-left: 12px;
  }

  .menu__list {
    list-style: none;
    display: flex;
    height: 100%;
    line-height: 60px;
    margin-left: 0;
  }

  .menu__item {
    padding: 0 6px;
    /* width: 95px; */
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .menu-item__link {
    color: #fff;
    /* font-size: 18px; */
    text-decoration: none;
    font-weight: 500;
  }

  .menu__item:hover {
    background-color: #f7941d;
  }

  .menu__item i {
    padding-left: 6px;
    font-size: 14px;
  }

  .item__blog,
  .item__shop {
    /* position: relative; */
  }

  .best-seller {
    list-style: none;
    z-index: 12;
    background-color: #fff;
    height: 420px;
    position: absolute;
    left: 250px;
    top: 0;
    padding-left: 20px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    border-left: 3px solid #f7941d;
    display: none;
  }

  .seller-type {
    margin: 0 15px;
  }

  .seller-bar:hover .best-seller {
    display: flex;
  }

  .seller-btn {
    color: #fff;
    background-color: #f7941d;
    min-width: 100px;
    height: 30px;
    border-radius: 3px;
    text-align: center;
    line-height: 30px;
    margin-top: 30px;
  }

  .seller-img {
    margin-top: 20px;
  }

  .seller-list {
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
  }

  .seller-item {
    margin-top: 15px;
    text-decoration: none;
    color: #333;
    font-weight: 400;
    transition: transform 0.5s, filter 1.5s ease-in-out;
    filter: grayscale(100%);
  }

  .seller-item:hover {
    filter: grayscale(0);
    transform: translateX(10px);
  }

  .seller-img {
    transition: transform 0.5s, filter 1.5s ease-in-out;
    filter: grayscale(100%);
    overflow: hidden;
  }

  .seller-img:hover {
    filter: grayscale(0);
    transform: scale(1.1);
  }

  .sub__list {
    position: absolute;
    list-style: none;
    border: 1px solid #918f8d;
    z-index: 1;
    background-color: #fff;
    padding: 0;
    display: none;
    top: 64px;
    left: 0;
    border-radius: 4px;
  }

  .shop__item {
    padding: 4px 0 0px 12px;
    text-align: left;
    /* width: 120px; */
    line-height: 25px;
  }

  .blog__item a,
  .shop__item a {
    text-decoration: none;
    color: #333;
  }

  .list-menu-shop__item:hover,
  .category__item:hover,
  .blog__item:hover,
  .shop__item:hover {
    background-color: #f7941d;
  }

  .blog__item::after,
  .shop__item::after {
    position: absolute;
    content: "";
    width: 134px;
    height: 6px;
    top: -6px;
    left: -1px;
  }

  .item__shop:hover .sub__list {
    display: block;
    min-width: 150px;
  }

  .blog__item {
    padding: 4px 0 4px 12px;
    text-align: left;
    width: 180px;
    line-height: 25px;
  }

  .blog__list {
    position: absolute;
    list-style: none;
    border: 1px solid #918f8d;
    z-index: 1;
    background-color: #fff;
    padding: 0;
    display: none;
    top: 64px;
    left: 0;
    border-radius: 4px;
  }

  .item__blog:hover .blog__list {
    display: block;
  }

  .main-category {
    /* background-image: url("https://images.asos-media.com/products/ugg-classic-mini-boots-in-black-suede/9961521-2"); */
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
  }

  .category__list {
    width: 250px;
    background-color: #fff;
    list-style: none;
    text-align: left;
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 0;
  }

  .category__item {
    padding: 8px 0 15px 18px;
    border-top: 1px solid #f0f0f0;
    position: relative;
  }

  .category__link-item {
    text-decoration: none;
    color: #333;
  }

  .category__link-item i {
    font-size: 12px;
    float: right;
    transform: translateX(-12px) translateY(4px);
  }

  .category__promote {
    /* max-width: 300px; */
    padding: 0px 0 0 30px;
    /* text-align: left; */
  }

  .category__promote h4 {
    font-size: 25px;
    margin: 0 0 10px 0;
  }

  .category__promote h5 {
    font-size: 40px;
    color: #f7941d;
    margin: 0;
  }

  .btn__shop {
    width: 150px;
    height: 50px;
    background-color: #333;
    text-align: center;
    margin-top: 25px;
    border-radius: 3px;
  }

  .btn__shop:hover {
    background-color: #f7941d;
  }

  .btn__link {
    text-decoration: none;
    color: #fff;
    font-size: 20px;
    line-height: 50px;
  }
  .menu__shop {
    position: relative;
  }

  .menu__shop:hover .list-menu-shop {
    display: block;
  }

  .list-menu-shop {
    position: absolute;
    list-style: none;
    width: 180px;
    border: 1px solid #918f8d;
    z-index: 333;
    background-color: #fff;
    padding: 0;
    display: none;
    top: 0px;
    left: calc(100%);
    border-left: 4px solid #f7941d;
  }

  .list-menu-shop__item {
    padding: 8px 0 8px 18px;
    border-top: 1px solid #f0f0f0;
  }

  .shop__link-item {
    text-decoration: none;
    color: #333;
  }
  .img-nodata{
    object-fit: cover;
    object-position: center;
  }
`;

export const WrapForm = styled.div``;

export const FormStyle = styled(AntForm)`
  width: 500px;
  height: 500px;
  margin: 0 auto;
  padding-top: 40vh;
`;
