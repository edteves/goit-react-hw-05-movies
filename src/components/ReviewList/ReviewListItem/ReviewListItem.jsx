import PropTypes from 'prop-types';
import css from './ReviewListItem.module.css';

export const ReviewListItem = ({ author, content }) => {
  return (
    <li>
      <p className={css.author}>Author: {author}</p>
      <p>{content}</p>
    </li>
  );
};

ReviewListItem.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
