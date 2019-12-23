import { TemplatePetCards } from './TemplatePetCards.js';

export class ViewPetCards {
  constructor() {
    this.templater = new TemplatePetCards();
    this.mainContainer = document.querySelector('.main .container');
  }

  addListenersPagination(handlePetsData) {
    ['.pag-prev', '.pag-next'].forEach((el, idx) => {
      document.querySelector(el).addEventListener('click', () => {
        handlePetsData(idx ? true : false);
      });
    });
  }

  addListenersBtnsDetails(requestPetDetails) {
    document.querySelectorAll('.btn-details').forEach(el => {
      el.addEventListener('click', () => {
        requestPetDetails(Number(el.dataset.id));
      });
    });
  }

  render(pets, pages, scrollTo) {
    let html, cards, pagination;

    cards = pets.map((pet, idx) => this.templater.getTemplatePetCard(pet, idx)).join('');
    pagination = this.templater.getTemplatePagination(pages);
    
    html = pets.length 
      ? cards + pagination 
      : this.templater.getTemplateNoneData();

    this.mainContainer.innerHTML = '';  
    this.mainContainer.insertAdjacentHTML('beforeend', this.templater.getTemplatePetCards(html));
    
    window.scrollTo({ top: scrollTo, behavior: scrollTo ? 'auto' : 'smooth' });
  }
}
