import './App.css';
import { Footer } from './component/footer';
import HomePage from "./pages/Home"
import {FromBlog} from "./pages/Home/FromBlog/"

function App() {
  return (
    <div className="App">
      <HomePage />
      <FromBlog />
      <Footer />
    </div>
  );
}

export default App;
