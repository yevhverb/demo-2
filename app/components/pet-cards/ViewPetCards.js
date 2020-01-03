import { TemplatePetCards } from './TemplatePetCards.js';

export class ViewPetCards {
  constructor() {
    this.templater = new TemplatePetCards();

    this.root = document.querySelector('.root');
    this.main = this.root.querySelector('.main');
    this.container = this.main.querySelector('.container');
  }

  addListeners(handlePetsData, handlePetInCart, handlePetDetails) {
    ['.pag-prev', '.pag-next'].forEach((el, idx) => {
      this.container.querySelector(el).addEventListener('click', () => {
        handlePetsData(idx ? true : false);
      });
    });

    this.container.querySelectorAll('.btn-buy').forEach(btn => {
      btn.addEventListener('click', () => {
        btn.classList.toggle('is-danger');
        btn.textContent = btn.classList.contains('is-danger') ? 'IN CART' : 'BUY';
        handlePetInCart(Number(btn.dataset.id), btn.textContent !== 'BUY');
      });
    });

    this.container.querySelectorAll('.btn-details').forEach(btn => {
      btn.addEventListener('click', () => {
        handlePetDetails(Number(btn.dataset.id));
      });
    });
  }

  render(pets, pages, scrollTo, isAnim) {
    let html, cards, pagination, categorie;

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
