import './App.css';
import { Content2 } from './component/content2';
import { Footer } from './component/footer';
import TrendingItems from './pages/Home';
import HomePage from "./pages/Home"
import { Content3 } from './pages/Home/Content3';
import {FromBlog} from "./pages/Home/FromBlog/"

function App() {
  return (
    <div className="App">
      <HomePage />
      <FromBlog />
      <Content2 />
      <Content3/>
      <Footer />
      
    </div>
  );
}

export default App;
