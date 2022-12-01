
import { useSelector } from "react-redux";
import { Content2 } from "../../component/content2";
import { Content5 } from "../../component/content5";
import { Footer } from "../../component/footer";
import { Content7 } from "../Content7";
import { Content6 } from "./Content6";
import { FromBlog } from "./FromBlog";
import { Header } from "./Header";
import { TrendingItem } from "./TrendingItem";

const HomePage = () => {
  const user = useSelector(state => state.user)
  return (
    <>
      <Header user={user}/>
      {/* <Content1 /> */}
      <TrendingItem />
      <FromBlog />
      <Content2 />
      <Content5/>
      <Content6/>
      <Content7/>
      {/* <Checkout/> */}
      <Footer/>
    </>
  );
};
export default HomePage;
