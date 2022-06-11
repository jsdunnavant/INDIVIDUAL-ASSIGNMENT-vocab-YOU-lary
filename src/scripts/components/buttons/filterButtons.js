import renderToDOM from '../../helpers/renderToDom';

const filterButtons = () => {
  const domString = `
  <div class="d-flex flex-wrap justify-content-center my-3">
    <button id="html-btn" class="btn btn-primary" type="button">HTML</button>
    <button id="css-btn" class="btn btn-primary" type="button">CSS</button>
    <button id="javascript-btn" class="btn btn-primary" type="button">JAVASCRIPT</button>
    <button id="clear-btn" class="btn btn-primary" type="button">ALL</button>
  </div>
  `;
  renderToDOM('#filter-container', domString);
};

export default filterButtons;
