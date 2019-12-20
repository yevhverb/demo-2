import { ModelPetCards } from './ModelPetCards.js';
import { ViewPetCards } from './ViewPetCards.js';

export class ControllerPetCards {
  constructor({ on }) {
    this.model = new ModelPetCards();
    this.view = new ViewPetCards();
    
    this.on = on;
    
    this.on('fetchedPetsData', (pets) => {
      this.model.petsData = pets;
      this.splitPetsData();
    });
  }

  splitPetsData(isMore = true) {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    this.model.petsCnt += isMore ? 20 : -20;

    let cur = this.model.petsCnt / 20 + 1;
    let all = Math.ceil(this.model.petsData.length / 20);
    
    this.view.render(this.model.petsData.slice(this.model.petsCnt, this.model.petsCnt + 20), { cur, all });

    this.view.addListeners(this.splitPetsData.bind(this));
  }
}
