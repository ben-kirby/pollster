import constants from './../constants';
const {
  firebaseConfig
} = constants;
import firebase from 'firebase';

firebase.initializeApp(firebaseConfig);
const polls = firebase.database().ref('polls');

export function addPoll(_info){
  return () => polls.push({
    name: _info.savePollName,
    options: _info.saveOptions,
    id: _info.saveShortID,
  });

}