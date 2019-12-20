import { TemplatePetCards } from './TemplatePetCards.js';

export class ViewPetCards {
  constructor() {
    this.templater = new TemplatePetCards();
    this.cards = document.querySelector('.pet-cards');
  }

  addListeners(splitPetsData) {
    document.querySelector('.pag-next').addEventListener('click', () => splitPetsData(true));
    document.querySelector('.pag-prev').addEventListener('click', () => splitPetsData(false));
  }

  render(pets, pages) {
    this.cards.innerHTML = '';

    const html = pets.map((pet, idx) => this.templater.getTemplatePetCard(pet, idx)).join('');
    
    this.cards.insertAdjacentHTML('beforeend', html);
    this.cards.insertAdjacentHTML('beforeend', this.templater.getTemplatePagination(pages));
  }
}
