import renderToDOM from '../helpers/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="navigation"></div>
  <div id="main-container">
    <div id="view"></div>
    <div id="store"></div>
    <div id="filter-container"></div>
    <div id="form-container"></div>
  </div>`;

  renderToDOM('#app', domString);
};

export default domBuilder;
