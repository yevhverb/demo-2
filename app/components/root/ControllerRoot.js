import { ModelRoot } from './ModelRoot.js';
import { ViewRoot } from './ViewRoot.js';

export class ControllerRoot {
  constructor(props) {
    this.model = new ModelRoot(props);
    this.view = new ViewRoot();

    this.view.render();
  }
}
