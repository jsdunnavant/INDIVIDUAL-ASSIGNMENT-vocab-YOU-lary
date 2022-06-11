import { getVocab } from '../../api/vocabData';
import createVocabForm from '../components/forms/addVocabForm';
import { showVocab } from '../components/pages/vocab';
import signOut from '../helpers/auth/signOut';

const navigationEvents = (uid) => {
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  document.querySelector('#all-vocab').addEventListener('click', () => {
    getVocab(uid).then((vocabArray) => showVocab(vocabArray));
  });

  document.querySelector('#submit-vocab').addEventListener('click', () => {
    createVocabForm(uid);
  });
};

export default navigationEvents;
