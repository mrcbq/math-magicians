import { HashRouter, Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Quotes from './components/Quotes';
import Home from './components/Home';
import NotFoundPage from './components/NotFound';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Calculator />} basename="/https://mrcbq.github.io/math-magicians/" />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
