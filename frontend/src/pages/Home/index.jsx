import { useSelector } from "react-redux";
import { Content2 } from "../../component/content2";
import { Content1 } from "./Content1";
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
    </>
  );
};
export default HomePage;
