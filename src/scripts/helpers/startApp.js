import { getVocab } from '../../api/vocabData';
import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';
import { showVocab } from '../components/pages/vocab';
import navigationEvents from '../events/navigationEvents';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';

const startApp = (user) => {
  domBuilder();
  domEvents(user.uid);
  formEvents(user.uid);
  navBar();
  logoutButton();
  navigationEvents(user.uid);

  getVocab(user.uid).then((vocabArray) => showVocab(vocabArray));
};

export default startApp;
