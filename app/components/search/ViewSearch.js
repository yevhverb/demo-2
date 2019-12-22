import { TemplateSearch } from './TemplateSearch.js';

export class ViewSearch {
  constructor() {
    this.templater = new TemplateSearch();
    this.searchContainer = document.querySelector('.search');
    this.searchForm = document.querySelector('.search form');
  }

  addSearchListener(handleSearch) {
    const form = this.searchContainer.querySelector('form');
    const input = this.searchContainer.querySelector('input');

    input.addEventListener('blur', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      handleSearch(input.value);
    });

    form.addEventListener('submit', event => {
      event.preventDefault();
      input.blur();
    });
  }

  render() {
    this.searchContainer.insertAdjacentHTML('beforeend', this.templater.getTemplateSearch());
  }
}
