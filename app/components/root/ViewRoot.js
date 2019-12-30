import { TemplateRoot } from './TemplateRoot.js';

export class ViewRoot {
  constructor() {
    this.templater = new TemplateRoot();
    this.root = document.querySelector('.root');
  }

  addListeners(handlePetsBySpecies) {
    const mainSection = this.root.querySelector('.main.section');
    const dropSpecies = this.root.querySelector('.drop-species');
    const btnSpecies = dropSpecies.querySelector('button span');

    window.addEventListener('resize', () => {
      this.root.clientWidth <= 1024
        ? this.root.classList.add('on-mobile')
        : this.root.classList.remove('on-mobile');
    });

    this.root.addEventListener('click', () => {
      dropSpecies.classList.remove('is-active');
      mainSection.classList.remove('drop-filter');
    });

    dropSpecies.addEventListener('click', event => {
      event.stopPropagation();
      dropSpecies.classList.toggle('is-active');
      mainSection.classList.toggle('drop-filter');

      if (event.target.classList.contains('drop-species-btn')) {
        handlePetsBySpecies(event.target.dataset.species);
        btnSpecies.textContent = event.target.dataset.species.toUpperCase() || 'ALL';
        btnSpecies.parentElement.classList.toggle('is-success', btnSpecies.textContent !== 'ALL');  
      }
    });
  }

  render() {
    this.root.insertAdjacentHTML('beforeend', this.templater.getTemplateRoot());
  }
}
