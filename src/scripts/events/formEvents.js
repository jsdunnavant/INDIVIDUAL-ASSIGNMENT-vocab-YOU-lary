import { createVocab, getVocab, updateVocab } from '../../api/vocabData';
import { showVocab } from '../components/pages/vocab';

const formEvents = (uid) => {
  document.querySelector('main-container').addEventListener('submit', (e) => {
    e.preventDefault();

    if (e.target.id.includes('submit-vocab')) {
      const vocabObj = {
        category: document.querySelector('#category').value,
        definition: document.querySelector('#definition').value,
        timeSubmitted: new Date(),
        word: document.querySelector('#word').value,
        uid,
      };
      createVocab(vocabObj, uid).then((vocabArray) => {
        showVocab(vocabArray);
      });
    }

    if (e.target.id.includes('update-vocab')) {
      const [, firebaseKey] = e.target.id.split('--');
      const vocabObj = {
        category: document.querySelector('#category').value,
        definition: document.querySelector('#definition').value,
        timeSubmitted: new Date(),
        word: document.querySelector('#word').value,
        uid,
        firebaseKey
      };
      updateVocab(vocabObj, uid).then(() => {
        getVocab(uid).then((vocabArray) => showVocab(vocabArray));
      });
    }
  });
};

export default formEvents;
