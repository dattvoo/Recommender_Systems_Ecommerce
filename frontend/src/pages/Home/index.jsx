import { Content2 } from "../../component/content2";
import { Content5 } from "../../component/content5";
import { Footer } from "../../component/footer";
import { FromBlog } from "./FromBlog";
import { Header } from "./Header";
import { TrendingItem } from "./TrendingItem";

const HomePage = () => {
  return (
    <>
      <Header />
      <TrendingItem />
      <FromBlog />
      <Content2 />
      <Content5 />
      <Footer />
    </>
  );
};
export default HomePage;
