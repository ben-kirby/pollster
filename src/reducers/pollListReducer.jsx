import constants from './../constants';
const { c } = constants;


function PollReducer (initialState = {}, action) {
  let newState;
  switch (action.type) {
  case 'RECEIVE_POLL':
    newState = {...initialState, poll: action.poll}
    return newState;
  default:
    return initialState;
  }
};

export default PollReducer;