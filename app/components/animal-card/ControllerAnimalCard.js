import { ModelAnimalCard } from './ModelAnimalCard.js';
import { ViewAnimalCard } from './ViewAnimalCard.js';

export class ControllerAnimalCard {
  constructor() {
    this.model = new ModelAnimalCard();
    this.view = new ViewAnimalCard();

    this.getAnimalCards();
  }

  getAnimalCards() {
    this.model.getData()
      .then(animals => this.view.render(animals));
  }
}
