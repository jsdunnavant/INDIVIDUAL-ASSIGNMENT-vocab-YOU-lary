import axios from 'axios';
import firebaseConfig from './apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getVocab = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/vocab.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    })
    .catch((error) => reject(error));
});
const createVocab = (vocabObj) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/vocab.json,`, vocabObj)
    .then((response) => {
      const payload = { firebaseKey: response.data.word };
      axios.patch(`${dbUrl}/vocab/${response.data.word}.json`, payload)
        .then(() => {
          getVocab(vocabObj).then(resolve);
        });
    }).catch(reject);
});

const getSingleVocab = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/cards/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const deleteVocab = (firebaseKey, uid) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/vocab/${firebaseKey}.json`, uid)
    .then(() => {
      getVocab(uid).then((vocabArray) => resolve(vocabArray));
    })
    .catch((error) => reject(error));
});

const updateVocab = (vocabObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/vocab/${vocabObj.firebaseKey}.json`, vocabObj)
    .then(() => getVocab(vocabObj).then(resolve))
    .catch((error) => reject(error));
});

export {
  getVocab,
  createVocab,
  getSingleVocab,
  deleteVocab,
  updateVocab,
};
