import React from 'react';
import PropTypes from 'prop-types';


function Button(props) {
  return (
    <button
      style={props.style}
      type={props.type}
      onClick={props.onClick}
      onSubmit={props.onSubmit}
    >
      {props.text}
    </button>
  );
}

Button.propTypes = {
  style: PropTypes.object,
  type: PropTypes.string,
  text: PropTypes.string,
  onSubmit: PropTypes.func,
  onClick: PropTypes.func,
};

export default Button;