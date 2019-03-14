import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const styles = {
  inputField: styled.input`
    margin-top: 5px;
    border: none;
    padding: 3%;
    border-radius: 25rem;
    font-size: 2.25rem;
    box-shadow: inset 4px 4px 0 0 rgba(17, 17, 31, 0.25);
    text-align: center;
    background-color: #FCF6EF;
    color: #275DAD;
  `,
};

function InputField(props) {
  return (
    <styles.inputField
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