import constants from './../constants';
const { firebaseConfig, c } = constants;
import firebase from 'firebase';

firebase.initializeApp(firebaseConfig);

export function addPoll(_info){
  const polls = firebase.database().ref('polls/');
  return () => polls.child(_info.id).set({
    name: _info.name,
    options: _info.options,
  });
}

export function getFirebasePoll(_pollId) {
  const polls = firebase.database().ref('polls/' + _pollId);
  return function(dispatch) {
    polls.on('value', function (snap) {
      dispatch(JSON.parse(JSON.stringify(snap.val())));
    });
  };
}

function receivePoll(pollFromFirebase) {
  return {
    type: c.RECEIVE_POLL,
    poll: pollFromFirebase
  };
}

// export function watchFirebasePolls(_pollId) {
//   const polls = firebase.database().ref('polls/' + _pollId);
//   return polls.on('child_changed', function(data))
// }