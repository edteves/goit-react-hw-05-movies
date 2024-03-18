import css from './Button.module.css';
import PropTypes from 'prop-types';

export const Button = ({ text }) => {
  return (
    <button className={css.button} type="button">
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
};
