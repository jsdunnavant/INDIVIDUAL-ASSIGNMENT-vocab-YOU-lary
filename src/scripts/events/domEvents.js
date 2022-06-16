import { deleteVocab, getSingleVocab, getVocab } from '../../api/vocabData';
import createVocabForm from '../components/forms/addVocabForm';
import viewVocab from '../components/pages/viewVocab';
import { showVocab } from '../components/pages/vocab';
import clearDom from '../helpers/clearDom';

const domEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-vocab')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to Delete')) {
        const [, firebaseKey] = e.target.dispatchEvent.split('--');
        deleteVocab(firebaseKey, uid).then((vocabArray) => showVocab(vocabArray));
      }
    }
    if (e.target.id.includes('add-vocab-btn')) {
      createVocabForm(uid);
    }
    if (e.target.id.includes('edit-vocab-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleVocab(firebaseKey).then((vocabObj) => createVocabForm(vocabObj, uid));
    }
    if (e.target.id.includes('view-vocab-btn')) {
      const [, vocabFirebaseKey] = e.target.id.split('--');
      viewVocab(vocabFirebaseKey).then((vocabObject) => viewVocab(vocabObject));
    }
    if (e.target.id.includes('all')) {
      getVocab(uid).then((vocabArray) => {
        showVocab(vocabArray);
      });
    }

    const catFilter = (category) => {
      if (e.target.id.includes(`${category}`)) {
        clearDom();
        const catArray = [];
        getVocab(uid).then((vocabArray) => {
          vocabArray.array.forEach((vocab) => {
            if (vocab.category.toLowerCase() === `${category}`) {
              catArray.push(vocab);
              showVocab(catArray);
            }
          });
        });
      }
    };

    catFilter('javascript');
    catFilter('python');
    catFilter('css');
    catFilter('html');
  });
};

export default domEvents;
