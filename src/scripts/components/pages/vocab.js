import clearDom from '../../helpers/clearDom';
import renderToDOM from '../../helpers/renderToDom';

const emptyVocab = () => {
  document.querySelector('#store').innerHTML = '<h1>No Items</h1>';
};

const showVocab = (array) => {
  clearDom();
  // const vocString = '<button class="btn btn-success btn-lg mb-4" id="add-vocab-btn">Add Vocab Word</button>';
  // renderToDOM('#add-vocab-btn', vocString);
  if (array.length) {
    let domString = '';
    array.forEach((item) => {
      domString += `
      <div class="card">
        <div class="card-body" style="height: 180px;">
          <h5 class="card-title">${item.word}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${item.category}</h6>
          <p class="card-text">${item.definition}.</p>
            <i class="btn btn-success fas fa-eye" id="view-vocab-btn--${item.firebaseKey}"></i>
            <i id="edit-vocab-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info"></i>
            <i id="delete-vocab--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
        </div>
      </div>
      `;
    });
    renderToDOM('#store', domString);
  } else {
    emptyVocab();
  }
};

export { emptyVocab, showVocab };
