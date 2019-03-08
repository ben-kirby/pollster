import constants from './../constants';
const { firebaseConfig } = constants;
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
  return () => polls.on('value', function(snap) {
    console.log(snap);
    
    let pollInfo = {
      name: snap.val;
    }
    
  });
}

// export function watchFirebasePolls(_pollId) {
//   const polls = firebase.database().ref('polls/' + _pollId);
//   return polls.on('child_changed', function(data))
// }