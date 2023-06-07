import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';

import Quotes from './components/Quotes';
import Home from './components/Home';
import NotFoundPage from './components/NotFound';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={(
            <Calculator />
          )}
        />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
