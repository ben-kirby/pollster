import constants from './../constants';
const { firebaseConfig } = constants;
import firebase from 'firebase';

firebase.initializeApp(firebaseConfig);

export function addPoll(_info){
  const polls = firebase.database().ref('polls/' + _info.id);
  return () => polls.push({
    name: _info.name,
    options: _info.options,
  });

}