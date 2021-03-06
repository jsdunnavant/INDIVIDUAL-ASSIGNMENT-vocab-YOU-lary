import clearDom from '../../helpers/clearDom';
import renderToDOM from '../../helpers/renderToDom';

const createVocabForm = (obj = {}) => {
  clearDom();
  const domString = `
  <form id="${obj.firebaseKey ? `update-vocab--${obj.firebaseKey}` : 'submit-vocab'}" class="mb-4">
  <div class="form-group">
    <label for="title">Vocab Word</label>
    <input type="text" class="form-control" id="word" aria-describedby="vocabWord" placeholder="Enter Vocab Word" value="${obj.word || ''}" required>
  </div>
  <div class="form-group">
    <label for="definition">Definition</label>
    <textarea class="form-control" placeholder="Vocab Definition" id="definition" style="height: 100px">${obj.definition || ''}</textarea>
  </div>
  <br>
  <select class="form-select" aria-label="Default select example" id="category">
    <option selected>Select a category</option>
    <option value="javascript">javascript</option>
    <option value="HTML">HTML</option>
    <option value="CSS">CSS</option>
    <option value="python">python</option>
  </select>
  <br>
  <button type="submit" class="btn btn-primary">Submit Vocab
  </button>
</form>
  `;

  renderToDOM('#form-container', domString);
};

export default createVocabForm;
