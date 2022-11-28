import './App.css';
import HomePage from "./pages/Home";
import { Routes, Route } from 'react-router-dom'
import { Login } from './pages/Login';
import { Layout } from './component/Layout';
function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path='/homepage' element={<HomePage />} />
          <Route path='/' element={<HomePage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
