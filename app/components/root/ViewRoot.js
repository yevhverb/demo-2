import { TemplateRoot } from './TemplateRoot.js';

export class ViewRoot {
  constructor() {
    this.templater = new TemplateRoot();
    this.root = document.querySelector('.root');
  }

  render() {
    this.root.insertAdjacentHTML('beforeend', this.templater.getTemplateRoot());
  }
}
