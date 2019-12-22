import { ModelRoot } from './ModelRoot.js';
import { ViewRoot } from './ViewRoot.js';

export class ControllerRoot {
  constructor(api) {
    this.model = new ModelRoot(api);
    this.view = new ViewRoot();

    this.view.render();
  }
}
