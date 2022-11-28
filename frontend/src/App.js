import './App.css';
import HomePage from "./pages/Home";
import { Routes, Route } from 'react-router-dom'
import { Login } from './pages/Login/index.js';
import { LoggedInRoutes } from './router/LoggedInRoutes';
import { NotLoggedInRoutes } from './router/NotLoggedInRoutes';
import { useSelector } from 'react-redux';
function App() {
  const user = useSelector((state) => state.user);
  console.log("🚀 ~ file: App.js ~ line 10 ~ App ~ user", user)
  return (
    <div className="App">
      <Routes>
        <Route element={<LoggedInRoutes />}>
          <Route path='/homepage' element={<HomePage />} />
          <Route path='/' element={<HomePage />} />
        </Route>
        <Route element={<NotLoggedInRoutes />}>
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
