import React from 'react';
import Calculator from './components/Calculator';
import ButtonBox from './components/ButtonBox';
import Screen from './components/Screen';
import Quotes from './components/Quotes';
import './App.css';

function App() {
  const [displayValue, setDisplayValue] = React.useState('0');

  const handleButtonClick = (calculatorData) => {
    const { total, next } = calculatorData;
    setDisplayValue(next || total || '0');
  };

  return (
    <>
      <Calculator>
        <Screen value={displayValue} />
        <ButtonBox onButtonClick={handleButtonClick} />
      </Calculator>
      <Quotes />
    </>
  );
}

export default App;
