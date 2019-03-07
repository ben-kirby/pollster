import React from 'react';
import PropTypes from 'prop-types';


function Button(props) {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      onSubmit={props.onSubmit}
    >
      {props.text}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  onSubmit: PropTypes.func,
  onClick: PropTypes.func,
};

export default Button;