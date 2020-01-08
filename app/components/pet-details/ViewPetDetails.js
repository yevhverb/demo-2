import { TemplatePetDetails } from './TemplatePetDetails.js';

export class ViewPetDetails {
  constructor() {
    this.templater = new TemplatePetDetails();

    this.main = document.querySelector('.main');
    this.container = this.main.querySelector('.container');
  }

  addListeners(handleOnReturnBack, handleOnBuyPet) {
    this.container.querySelector('.btn-back').addEventListener('click', handleOnReturnBack);
    this.container.querySelector('.btn-buy').addEventListener('click', handleOnBuyPet);
  }

  render(primary, secondary, scrollTo, isAnimate) {
    secondary = secondary.map((field, idx) => 
      this.templater.getTemplateSecondaryDetails(field, idx, isAnimate)).join('');

    this.container.innerHTML = this.templater.getTemplateAllDetails(primary, secondary, isAnimate);

    this.main.dataset.page = 'pet-details';
    this.main.scrollTo({ top: scrollTo, behavior: 'auto' });
  }

  get mainScrollTop() {
    return this.main.scrollTop;
  }
}
