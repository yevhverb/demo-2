import { TemplateSearch } from './TemplateSearch.js';

export class ViewSearch {
  constructor() {
    this.templater = new TemplateSearch();

    this.root = document.querySelector('.root');
    this.search = this.root.querySelector('.search');
  }

  addListenersSearch(handleSearch) {
    const form = this.search.querySelector('form');
    const input = this.search.querySelector('input');

    input.addEventListener('blur', () => {
      this.root.scrollTo({ top: 0, behavior: 'smooth' });
      handleSearch(input.value);
    });

    form.addEventListener('submit', event => {
      event.preventDefault();
      input.blur();
    });
  }

  render() {
    this.search.insertAdjacentHTML('beforeend', this.templater.getTemplateSearch());
  }
}
