import React from 'react';
import ButtonBox from './ButtonBox';
import Screen from './Screen';
import './Calculator.css';

const Calculator = () => {
  const [displayValue, setDisplayValue] = React.useState('0');

  const handleButtonClick = (calculatorData) => {
    const { total, next } = calculatorData;
    setDisplayValue(next || total || '0');
  };

  return (
    <div id="calcuContainer">
      <h2>Let&apos;s do some math!</h2>
      <div className="calculator">
        <Screen value={displayValue} />
        <ButtonBox onButtonClick={handleButtonClick} />
      </div>
    </div>
  );
};

export default Calculator;
