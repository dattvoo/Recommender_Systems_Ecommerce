import { Content2 } from "../../component/content2";
import { Content5 } from "../../component/content5";
import { Footer } from "../../component/footer";
import { Content1 } from "./Content1";
import { FromBlog } from "./FromBlog";
import { Header } from "./Header";
import { TrendingItem } from "./TrendingItem";

const HomePage = () => {
  return (
    <>
      <Content1 />
      <TrendingItem />
      <FromBlog />
      <Content2 />
    </>
  );
};
export default HomePage;
