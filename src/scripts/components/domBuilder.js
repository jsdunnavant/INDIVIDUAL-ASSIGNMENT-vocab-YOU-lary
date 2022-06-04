import renderToDOM from '../helpers/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="navigation"></div>
  <div id="main-container">
    <div id=""></div>
    <div id=""></div>
    <div id=""></div>
    <div id=""></div>
  </div>`;

  renderToDOM('#app', domString);
};

export default domBuilder;
