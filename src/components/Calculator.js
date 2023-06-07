import React from 'react';
import ButtonBox from './ButtonBox';
import Screen from './Screen';
import './Calculator.css';
// import PropTypes from 'prop-types';

const Calculator = () => {
  const [displayValue, setDisplayValue] = React.useState('0');

  const handleButtonClick = (calculatorData) => {
    const { total, next } = calculatorData;
    setDisplayValue(next || total || '0');
  };

  return (
    <div className="calculator">
      <Screen value={displayValue} />
      <ButtonBox onButtonClick={handleButtonClick} />
    </div>
  );
};

// Calculator.propTypes = {
//   children: PropTypes.arrayOf(PropTypes.node).isRequired,
// };

export default Calculator;
