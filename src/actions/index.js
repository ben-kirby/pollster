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

export function watchFirebasePolls() {
  return function(dispatch) {
    polls.on('polls' , data => {
      console.log(data);
      
    })
  }
}