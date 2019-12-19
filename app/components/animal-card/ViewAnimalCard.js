import { TemplateAnimalCard } from './TemplateAnimalCard.js';

export class ViewAnimalCard {
  constructor() {
    this.cards = document.querySelector('.animal-cards');
    this.templater = new TemplateAnimalCard();
  }

  render(animals) {
    let result = '';
    
    animals.forEach(animal => { 
      result += this.templater.getAnimalCardTemplate(animal); 
    });
    
    this.cards.innerHTML = result;
  }
}
