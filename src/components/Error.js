import React from 'react';
import PropTypes from 'prop-types';

const Error = ({ tryAgain }) => {
  return (
    <div data-testid="error" className="alert alert-danger" role="alert">
      An error occurred!: <button data-testid="error-callback" className="btn btn-link" onClick={tryAgain}>Please try again</button>
    </div>
  )
}

Error.propTypes = {
  tryAgain: PropTypes.func.isRequired
};

export default Error
