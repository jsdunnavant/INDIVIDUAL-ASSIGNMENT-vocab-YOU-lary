import { createVocab, updateVocab } from '../../api/vocabData';
import { showVocab } from '../components/pages/vocab';

const formEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();

    if (e.target.id.includes('submit-vocab')) {
      const vocabObj = {
        category: document.querySelector('#category').value,
        definition: document.querySelector('#definition').value,
        timeSubmitted: Math.floor(Date.now() / 1000),
        word: document.querySelector('#word').value,
        uid
      };
      createVocab(vocabObj).then((vocabArray) => showVocab(vocabArray));
    }

    if (e.target.id.includes('update-vocab')) {
      const [, firebaseKey] = e.target.id.split('--');
      const vocabObj = {
        category: document.querySelector('#category').value,
        definition: document.querySelector('#definition').value,
        timeSubmitted: Math.floor(Date.now() / 1000),
        word: document.querySelector('#word').value,
        uid,
        firebaseKey
      };
      updateVocab(vocabObj).then(showVocab);
    }
  });
};

export default formEvents;
