import { ModelSearch } from './ModelSearch.js';
import { ViewSearch } from './ViewSearch.js';

export class ControllerSearch {
  constructor({ publish }) {
    this.model = new ModelSearch();
    this.view = new ViewSearch();

    this.publish = publish;

    this.view.render();
    this.view.addListenersSearch(
      this.handleOnSubmit.bind(this),
      this.handleOnSearch.bind(this)
    );
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.view.search.querySelector('input').blur();
  }

  handleOnSearch(event) {
    const search = event.target.value;
    this.model.saveSearchCurrent(search); 

    if (this.model.isDiffSearch) {
      this.publish('onSearch', search.toLowerCase().trim());
    }
  }
}
