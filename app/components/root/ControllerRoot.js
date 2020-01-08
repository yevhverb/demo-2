import { ModelRoot } from './ModelRoot.js';
import { ViewRoot } from './ViewRoot.js';

export class ControllerRoot {
  constructor(psApi) {
    this.model = new ModelRoot(psApi);
    this.view = new ViewRoot(this.handleCheckOnMobile.bind(this));

    this.view.render();
    this.view.addListeners(
      this.handleCheckOnMobile.bind(this),
      this.handleOnResetDrop.bind(this),
      this.handleOnChangeSpecies.bind(this),
      this.handleOnChangeSort.bind(this)
    );
  }

  handleCheckOnMobile(root) {
    root.clientWidth <= 1024
      ? root.classList.add('on-mobile')
      : root.classList.remove('on-mobile');
  }

  handleOnResetDrop() {
    const { dropSort, dropSpecies, main } = this.view.elements;

    main.classList.remove('drop-filter');
    dropSort.classList.remove('is-active');
    dropSpecies.classList.remove('is-active');
  }

  handleOnChangeSpecies(event) {
    event.stopPropagation();
    const { dropSort, dropSpecies, btnSpecies, main } = this.view.elements;

    const isNotDrop = !event.target.closest('.drop-species').classList.contains('is-active');

    main.classList.toggle('drop-filter', isNotDrop);
    dropSort.classList.remove('is-active');
    dropSpecies.classList.toggle('is-active');

    if (event.target.classList.contains('drop-species-btn')) {
      btnSpecies.innerHTML = event.target.innerHTML;
      btnSpecies.parentElement.classList.toggle('is-success', 
        btnSpecies.innerHTML.trim() !== '<i class="fas fa-paw is-events-none has-margin-right-5"></i> ALL');

      this.model.handleOnPetsBySpecies(event.target.dataset.species);
      this.onChangeSort(event, false);
    }
  }

  handleOnChangeSort(event) {
    event.stopPropagation();
    const { dropSort, dropSpecies, main } = this.view.elements;

    const isNotDrop = !event.target.closest('.drop-sort').classList.contains('is-active');

    main.classList.toggle('drop-filter', isNotDrop);
    dropSort.classList.toggle('is-active');
    dropSpecies.classList.remove('is-active');

    if (event.target.classList.contains('drop-sort-btn')) this.onChangeSort(event);
  }

  onChangeSort(event, isUpdate = true) {    
    const { btnSort } = this.view.elements;

    btnSort.innerHTML = isUpdate ? event.target.innerHTML : 'NO SORT';
    btnSort.parentElement.classList.toggle('is-success', btnSort.innerHTML.trim() !== 'NO SORT');
    
    this.model.handleOnPetsBySort(event.target.dataset.sort);
  }
}
