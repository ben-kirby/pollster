import constants from './../constants';
const { firebaseConfig, c } = constants;
import firebase from 'firebase';

firebase.initializeApp(firebaseConfig);

export function addPoll(_info){
  return () => firebase.database().ref('polls/').child(_info.id).set({
    name: _info.name,
    options: _info.options,
  }, function(error) {
    if (error) {
      return 'error';
    } else {
      return _info.id;
    }
  });
}

export function getFirebasePoll(_pollId) {
  return function(dispatch) {
    firebase.database().ref('polls/' + _pollId).on('value', function (snap) {
      dispatch(receivePoll(JSON.parse(JSON.stringify(snap.val()))));
    });
  };
}

export function receivePoll(_pollFromFirebase) {
  return {
    type: 'RECEIVE_POLL',
    poll: _pollFromFirebase
  };
}

export function updatePoll(_updates) {
  return () => firebase.database().ref().child('polls').child(_updates.id).update({
    name: _updates.name,
    options: _updates.options
  });
}

// export function watchFirebasePolls(_pollId) {
//   const polls = firebase.database().ref('polls/' + _pollId);
//   return polls.on('child_changed', function(data))
// }