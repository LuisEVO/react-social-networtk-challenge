import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({ comment }) => {
  return (
    <li className="list-group-item">
      <p className="fw-normal mb-0">{ comment.name }</p>
      <p className="fw-light mb-0">{ comment.body }</p>
      <p className="fst-italic mb-0">{comment.email}</p>
    </li>
  )
}

Comment.propTypes = {
  comment: PropTypes.shape({
    name: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export default Comment