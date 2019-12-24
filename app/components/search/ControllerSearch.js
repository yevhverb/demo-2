import { ModelSearch } from './ModelSearch.js';
import { ViewSearch } from './ViewSearch.js';

export class ControllerSearch {
  constructor({ publish }) {
    this.model = new ModelSearch();
    this.view = new ViewSearch();

    this.publish = publish;

    this.view.render();
    this.view.addListenersSearch(this.handleSearch.bind(this));
  }

  handleSearch(search) {
    this.model.saveSearchCurrent(search); 

    if (this.model.isSearchDifferent) {
      this.publish('onSearch', search.toLowerCase().trim());
    }
  }
}
