import { TemplateRoot } from './TemplateRoot.js';

export class ViewRoot {
  constructor() {
    this.templater = new TemplateRoot();
    this.root = document.querySelector('.root');

    this.checkOnMobile();
  }

  checkOnMobile() {
    this.root.clientWidth <= 1024
      ? this.root.classList.add('on-mobile')
      : this.root.classList.remove('on-mobile');
  }

  addListeners(handlePetsBySpecies, handlePetsBySort) {
    const mainSection = this.root.querySelector('.main.section');
    const dropSpecies = this.root.querySelector('.drop-species');
    const btnSpecies = dropSpecies.querySelector('button span');
    const dropSort = this.root.querySelector('.drop-sort');
    const btnSort = dropSort.querySelector('button span');

    window.addEventListener('resize', () => {
      this.checkOnMobile();
    });

    this.root.addEventListener('click', () => {
      dropSort.classList.remove('is-active');
      dropSpecies.classList.remove('is-active');
      mainSection.classList.remove('drop-filter');
    });

    dropSpecies.addEventListener('click', event => {
      event.stopPropagation();

      const isNotDrop = !event.target.closest('.drop-species').classList.contains('is-active');

      dropSort.classList.remove('is-active');
      dropSpecies.classList.toggle('is-active');
      mainSection.classList.toggle('drop-filter', isNotDrop);

      if (event.target.classList.contains('drop-species-btn')) {
        handlePetsBySpecies(event.target.dataset.species);
        onChangeSort(event, false);

        btnSpecies.innerHTML = event.target.innerHTML;
        btnSpecies.parentElement.classList.toggle('is-success', 
          btnSpecies.innerHTML.trim() !== '<i class="fas fa-paw is-events-none has-margin-right-5"></i> ALL');
      }
    });

    dropSort.addEventListener('click', event => {
      event.stopPropagation();

      const isNotDrop = !event.target.closest('.drop-sort').classList.contains('is-active');

      dropSpecies.classList.remove('is-active');
      dropSort.classList.toggle('is-active');
      mainSection.classList.toggle('drop-filter', isNotDrop);  

      if (event.target.classList.contains('drop-sort-btn')) {
        onChangeSort(event);
      }
    });

    function onChangeSort(event, isUpdate = true) {
      handlePetsBySort(event.target.dataset.sort);
      
      btnSort.innerHTML = isUpdate ? event.target.innerHTML : 'NO SORT';
      btnSort.parentElement.classList.toggle('is-success', btnSort.innerHTML.trim() !== 'NO SORT');
    }
  }

  render() {
    this.root.insertAdjacentHTML('beforeend', this.templater.getTemplateRoot());
  }
}
