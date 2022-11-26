import './App.css';
import { Content2 } from './component/content2';
import { Content5 } from './component/content5';
import { Footer } from './component/footer';
import TrendingItems from './pages/Home';
import HomePage from "./pages/Home"
import {FromBlog} from "./pages/Home/FromBlog/"

function App() {
  return (
    <div className="App">
      <HomePage />
      <FromBlog />
      <Content2 />
      <Content5 />
      <Footer />
      
    </div>
  );
}

export default App;
