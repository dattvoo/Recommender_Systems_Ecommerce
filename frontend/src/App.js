import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Cart } from './pages/Cart';
import { Checkout } from './pages/Checkout';
import HomePage from "./pages/Home";
import { Login } from './pages/Login/index.js';
import { Product__Detail } from './pages/product_detail';
import { LoggedInRoutes } from './router/LoggedInRoutes';
import { NotLoggedInRoutes } from './router/NotLoggedInRoutes';
import { Login1 } from './pages/login1/index.js';
import { Register } from './pages/register';
import { AdminPage } from './pages/AdminPage';
function App() {
  const dispatch = useDispatch();

  const [cart, setCart] = useState([]);
  const hanldeAddToCart = (product, quantity) => {
    // Update cart item quantity if already in cart
    if (cart.some((item) => item?.id === product?.id)) {
      setCart((cart) =>
        cart.map((item) =>
          item?.id === product?.id
            ? {
              ...item,
              quantity: item.quantity + quantity,
            }
            : item
        )
      );
      return;
    }

    // Add to cart
    setCart((cart) => [
      ...cart,
      { ...product, quantity: quantity }, // <-- initial amount 1
    ]);
  };

  useEffect(() => {
    console.log("Dispathed");
    console.log("🚀 ~ file: index.js:21 ~ cart", cart);
    dispatch({ type: "ADD_PRODUCT_TO_CART", payload: cart });

  }, [cart]);



  return (
    <div className="App">

      <Routes>
        <Route element={<LoggedInRoutes />}>
          <Route path='/homepage' element={<HomePage />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/product/:id' element={<Product__Detail hanldeAddToCart={hanldeAddToCart} />} />
          <Route path='/product' element={<HomePage />} />
          <Route path='/admin' element={<AdminPage />} />
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
