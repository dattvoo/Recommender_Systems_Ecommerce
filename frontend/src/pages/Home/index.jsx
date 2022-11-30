
import { useSelector } from "react-redux";
import { Content2 } from "../../component/content2";
import { Cart } from "../Cart";
import { Content7 } from "../Content7";
import { Content1 } from "./Content1";
import { Content6 } from "./Content6";
import { FromBlog } from "./FromBlog";
import { Header } from "./Header";
import { TrendingItem } from "./TrendingItem";

const HomePage = () => {
  const user = useSelector(state => state.user)
  return (
    <>
      <Header user={user}/>
      <Content1 />
      <TrendingItem />
      <FromBlog />
      <Content2 />
      <Content6/>
      <Content7/>
    </>
  );
};
export default HomePage;
