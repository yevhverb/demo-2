import { TemplatePetDetails } from './TemplatePetDetails.js';

export class ViewPetDetails {
  constructor() {
    this.templater = new TemplatePetDetails();

    this.main = document.querySelector('.main');
    this.container = this.main.querySelector('.container');
  }

  addListeners(handleReturnBack, handlePetToCart) {
    this.container.querySelector('.btn-back')
      .addEventListener('click', () => handleReturnBack());

    this.container.querySelector('.btn-buy')
      .addEventListener('click', event => {
        event.target.classList.toggle('is-danger');
        event.target.textContent = event.target.classList.contains('is-danger') ? 'REMOVE' : 'BUY';
        handlePetToCart(event.target.textContent !== 'BUY');
      });
  }

  render(primary, secondary, scrollTo, isAnimate) {
    secondary = secondary.map((field, idx) => this.templater.getTemplatePetDetailsSecondary(field, idx, isAnimate)).join('');

    this.container.innerHTML = this.templater.getTemplatePetDetails(primary, secondary, isAnimate);

    this.main.scrollTo({ top: scrollTo, behavior: 'auto' });
    this.main.dataset.page = 'pet-details';
  }

  get mainScrollTop() {
    return this.main.scrollTop;
  }
}
