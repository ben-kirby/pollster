import React from 'react';
import PropTypes from 'prop-types';

function VoteButton(props) {
  return (
    <button id={props.id} onClick={props.onClick}>
      {props.name}
      {props.votes}
    </button>
  );
}

VoteButton.propTypes = {
  onClick: PropTypes.func,
  name: PropTypes.string,
  votes: PropTypes.number,
  id: PropTypes.number,
};

export default VoteButton;