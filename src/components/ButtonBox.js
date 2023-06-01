import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import calculate from '../logic/calculate';
import './ButtonBox.css';

const ButtonBox = ({ onButtonClick }) => {
  const [calculatorData, setCalculatorData] = React.useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleButtonClick = (buttonName) => {
    const updatedData = calculate(calculatorData, buttonName);
    setCalculatorData(updatedData);
    onButtonClick(updatedData);
  };

  return (
    <div className="buttonBox">
      <Button value="AC" onClick={() => handleButtonClick('AC')} />
      <Button onClick={() => handleButtonClick('+/-')} value="+/-" />
      <Button onClick={() => handleButtonClick('%')} value="%" />
      <Button
        onClick={() => handleButtonClick('÷')}
        className="bg-orange"
        value="÷"
      />
      <Button onClick={() => handleButtonClick('7')} value="7" />
      <Button onClick={() => handleButtonClick('8')} value="8" />
      <Button onClick={() => handleButtonClick('9')} value="9" />
      <Button
        onClick={() => handleButtonClick('x')}
        className="bg-orange"
        value="x"
      />
      <Button onClick={() => handleButtonClick('4')} value="4" />
      <Button onClick={() => handleButtonClick('5')} value="5" />
      <Button onClick={() => handleButtonClick('6')} value="6" />
      <Button
        onClick={() => handleButtonClick('-')}
        className="bg-orange"
        value="-"
      />
      <Button onClick={() => handleButtonClick('1')} value="1" />
      <Button onClick={() => handleButtonClick('2')} value="2" />
      <Button onClick={() => handleButtonClick('3')} value="3" />
      <Button
        onClick={() => handleButtonClick('+')}
        className="bg-orange"
        value="+"
      />
      <Button
        onClick={() => handleButtonClick('0')}
        className="zero"
        value="0"
      />
      <Button onClick={() => handleButtonClick('.')} value="." />
      <Button
        onClick={() => handleButtonClick('=')}
        className="bg-orange"
        value="="
      />
    </div>
  );
};

ButtonBox.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
};

export default ButtonBox;
