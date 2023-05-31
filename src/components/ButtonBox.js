import PropTypes from 'prop-types';

const ButtonBox = ({ children }) => <div className="buttonBox">{children}</div>;

ButtonBox.propTypes = {
  children: PropTypes.string.isRequired,
};

export default ButtonBox;
