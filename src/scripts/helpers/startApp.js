import getVocab from '../../api/vocab';
import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';
import { showVocab } from '../components/pages/vocab';

const startApp = () => {
  domBuilder();
  // domEvents();
  // formEvents();
  navBar();
  logoutButton();
  // navigationEvents();

  getVocab().then((vocabArray) => showVocab(vocabArray));
};

export default startApp;
