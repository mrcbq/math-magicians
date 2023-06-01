import PropTypes from 'prop-types';
import './Calculator.css';

const Calculator = ({ children }) => <div className="calculator">{children}</div>;

Calculator.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Calculator;
