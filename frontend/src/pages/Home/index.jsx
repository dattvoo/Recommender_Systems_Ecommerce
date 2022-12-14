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
const HomePage = () => {
  const user = useSelector((state) => state.user);

  return (
    <>
      <Header user={user} />
      <Banner />
      <TrendingItem />
      <FromBlog />
      <Content2 />
      <Content6 />
      <Content7 />
      <Content5 />
      <Footer />
    </>
  );
};
export default HomePage;
