import axios from "axios";
import { useSelector } from "react-redux";
import { Banner } from "../../component/banner";
import { Content2 } from "../../component/content2";
import { Content5 } from "../../component/content5";
import { Footer } from "../../component/footer";
import { Content7 } from "../Content7";
import { Content6 } from "./Content6";
import { FromBlog } from "./FromBlog";
import { Header } from "./Header";
import { TrendingItem } from "./TrendingItem";
import { useEffect, useState } from "react";
const HomePage = () => {
  const user = useSelector((state) => state.user);
  const [products, setProducts] = useState([]);

  const getData = async () => {
    try {
      const { data } = await axios.get("http://127.0.0.1:8000/test");
      return data;        
    } catch (error) {
      console.log(error);
    }
  };
  // useEffect( () => {
  //  setProducts(() => getData());
  // })
  return (
    <>
      <Header user={user} />
      {/* <Content1 /> */}
      <Banner />
      <TrendingItem />
      <FromBlog />
      <Content2 />

      <Content6 />
      <Content7 />
      {/* <Checkout/> */}
      <Content5 />
      <Footer />
    </>
  );
};
export default HomePage;
