import { TemplateSearch } from './TemplateSearch.js';

export class ViewSearch {
  constructor() {
    this.templater = new TemplateSearch();

    this.root = document.querySelector('.root');
    this.search = this.root.querySelector('.search');
  }

  addListenersSearch(handleOnSubmit, handleOnSearch) {
    this.search.querySelector('form').addEventListener('submit', handleOnSubmit);
    this.search.querySelector('input').addEventListener('blur', handleOnSearch);
  }

  render() {
    this.search.insertAdjacentHTML('beforeend', this.templater.getTemplateSearch());
  }
}
