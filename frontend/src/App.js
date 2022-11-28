import './App.css';
import HomePage from "./pages/Home";
import { Routes, Route } from 'react-router-dom'
import { Login } from './pages/Login';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/homepage' element={<HomePage />} />
        <Route path='/' element={<HomePage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
