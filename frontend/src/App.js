import './App.css';
import HomePage from "./pages/Home";
import { Routes, Route } from 'react-router-dom'
import { Login } from './pages/Login/index.js';
import { LoggedInRoutes } from './router/LoggedInRoutes';
import { NotLoggedInRoutes } from './router/NotLoggedInRoutes';
import { useSelector } from 'react-redux';
import { Cart } from './pages/Cart';
import { Checkout } from './pages/Checkout';
import { Product__Detail } from './pages/product_detail';
import { Login1 } from './pages/login1/index.js';
import { Register } from './pages/register';
function App() {
  const user = useSelector((state) => state.user);
  
  return (
    <div className="App">
       
      <Routes>
        <Route element={<LoggedInRoutes />}>
          <Route path='/homepage' element={<HomePage />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/product/:id' element={<Product__Detail />} />
          <Route path='/product' element={<HomePage />} />
          <Route path='/' element={<HomePage />} />
        </Route>
        <Route element={<NotLoggedInRoutes />}>
          <Route path="/login" element={<Login />} />
          <Route path="/login1" element={<Login1 />} />
          <Route path="/register" element={<Register />} />

        </Route>
      </Routes>
    </div>
  );
}

export default App;
