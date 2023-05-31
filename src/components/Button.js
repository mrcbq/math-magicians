import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ className, value, onClick }) => (
  <button className={className} onClick={onClick} type="button">
    {value}
  </button>
);

Button.propTypes = {
  className: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
