import { ModelRoot } from './ModelRoot.js';
import { ViewRoot } from './ViewRoot.js';

export class ControllerRoot {
  constructor(psApi) {
    this.model = new ModelRoot(psApi);
    this.view = new ViewRoot();

    this.view.render();
    this.view.addListeners(
      this.model.handlePetsBySpecies.bind(this.model),
      this.model.handlePetsBySort.bind(this.model)
    );
  }
}
