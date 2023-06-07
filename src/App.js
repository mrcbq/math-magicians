import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import ButtonBox from './components/ButtonBox';
import Screen from './components/Screen';
import Quotes from './components/Quotes';
import Home from './components/Home';
import NotFoundPage from './components/NotFound';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  const [displayValue, setDisplayValue] = React.useState('0');

  const handleButtonClick = (calculatorData) => {
    const { total, next } = calculatorData;
    setDisplayValue(next || total || '0');
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={(
            <Calculator>
              <Screen value={displayValue} />
              <ButtonBox onButtonClick={handleButtonClick} />
            </Calculator>
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
