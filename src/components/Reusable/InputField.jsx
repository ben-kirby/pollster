import React from 'react';
import PropTypes from 'prop-types';

function InputField(props) {
  return (
    <input
      style={props.style}
      name={props.name}
      id={props.id}
      type={props.type}
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  );
}

InputField.propTypes = {
  name: PropTypes.string,
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  style: PropTypes.object,
};

export default InputField;