import { TemplateRoot } from './TemplateRoot.js';

export class ViewRoot {
  constructor(handleCheckOnMobile) {
    this.templater = new TemplateRoot();
    this.root = document.querySelector('.root');

    handleCheckOnMobile(this.root);
  }

  addListeners(handleCheckOnMobile, handleOnResetDrop, handleOnChangeSpecies, handleOnChangeSort) {
    const { dropSpecies, dropSort } = this.elements;

    window.addEventListener('resize', () => handleCheckOnMobile(this.root));
    dropSpecies.addEventListener('click', event => handleOnChangeSpecies(event));
    dropSort.addEventListener('click', event => handleOnChangeSort(event));
    this.root.addEventListener('click', () => handleOnResetDrop());
  }

  render() {
    this.root.insertAdjacentHTML('beforeend', this.templater.getTemplateRoot());
  }

  get elements() {
    return {
      main: this.root.querySelector('.main.section'),
      dropSpecies: this.root.querySelector('.drop-species'),
      dropSort: this.root.querySelector('.drop-sort'),
      btnSpecies: this.root.querySelector('.drop-species button span'),
      btnSort: this.root.querySelector('.drop-sort button span'),
    }
  }
}
