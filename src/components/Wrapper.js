import PropTypes from 'prop-types';
import './Wrapper.css';

const Wrapper = ({ children }) => <div className="wrapper">{children}</div>;

Wrapper.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Wrapper;
