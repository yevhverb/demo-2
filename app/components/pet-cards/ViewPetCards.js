import { TemplatePetCards } from './TemplatePetCards.js';

export class ViewPetCards {
  constructor() {
    this.templater = new TemplatePetCards();
    this.cards = document.querySelector('.pet-cards');
  }

  addListeners(splitPetsData) {
    document.querySelector('.pag-next').addEventListener('click', () => { 
      window.scrollTo({ top: 0, behavior: 'smooth' });

      splitPetsData(true);
    });
    document.querySelector('.pag-prev').addEventListener('click', () => { 
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
      splitPetsData(false);
    });
  }

  render(pets, pages) {
    this.cards.innerHTML = '';

    const html = pets.length 
      ? pets.map((pet, idx) => this.templater.getTemplatePetCard(pet, idx)).join('') 
      : this.templater.getTemplateNoneData();
    
    this.cards.insertAdjacentHTML('beforeend', html);
    
    if (pets.length) {
      this.cards.insertAdjacentHTML('beforeend', this.templater.getTemplatePagination(pages));
    }
  }
}
