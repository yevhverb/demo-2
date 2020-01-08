import { TemplatePetCards } from './TemplatePetCards.js';

export class ViewPetCards {
  constructor() {
    this.templater = new TemplatePetCards();

    this.root = document.querySelector('.root');
    this.main = this.root.querySelector('.main');
    this.container = this.main.querySelector('.container');
  }

  addListeners(handleOnChangePage, handleOnBuyPet, handleOnDetailsPet) {
    ['.pag-prev', '.pag-next'].forEach((el, idx) => {
      this.container.querySelector(el).addEventListener('click', () => 
        handleOnChangePage(idx ? true : false));
    });

    this.container.querySelectorAll('.btn-buy').forEach(btn => {
      btn.addEventListener('click', () => handleOnBuyPet(btn));
    });

    this.container.querySelectorAll('.btn-details').forEach(btn => {
      btn.addEventListener('click', () => handleOnDetailsPet(btn));
    });
  }

  render(pets, pages, scrollTo, isAnim) {
    let html, cards, pagination;

    cards = pets.map((pet, idx) => this.templater.getTemplatePetCard(pet, idx, isAnim)).join('');
    pagination = this.templater.getTemplatePagination(pages);

    html = pets.length 
      ? cards + pagination 
      : this.templater.getTemplateNoData();

    this.container.innerHTML = this.templater.getTemplatePetCards(html);  

    this.main.scrollTo({ top: scrollTo, behavior: scrollTo ? 'auto' : 'smooth' });
    this.main.dataset.page = 'pet-cards';
  }
}
