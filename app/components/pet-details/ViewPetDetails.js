import { TemplatePetDetails } from './TemplatePetDetails.js';

export class ViewPetDetails {
  constructor() {
    this.templater = new TemplatePetDetails();
    this.mainContainer = document.querySelector('.main .container');
  }

  addListenersBack(handleBack) {
    document.querySelector('.btn-back')
      .addEventListener('click', () => handleBack());
  }

  render(primary, secondary) {
    let subs = secondary.map((field, idx) => this.templater.getTemplatePetSub(field, idx)).join('');

    this.mainContainer.innerHTML = '';
    this.mainContainer.insertAdjacentHTML('beforeend', this.templater.getTemplatePetDetails(primary, subs));

    window.scrollTo({ top: 0, behavior: 'auto' });
  }
}
