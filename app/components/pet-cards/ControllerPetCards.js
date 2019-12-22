import { ModelPetCards } from './ModelPetCards.js';
import { ViewPetCards } from './ViewPetCards.js';

export class ControllerPetCards {
  constructor({ subscribe }) {
    this.model = new ModelPetCards();
    this.view = new ViewPetCards();
    
    this.subscribe = subscribe;
    
    this.subscribe('onUpdatePetsData', pets => {
      this.model.updatePetsData(pets);
      this.handlePetsData(true);
    });
  }

  handlePetsData(isMore) {   
    this.view.render(
      this.model.getSlicePetsData(isMore), 
      this.model.calcPaginationPetsData()
    );

    if (this.model.lengthPetsData) {
      this.view.addListeners(this.handlePetsData.bind(this));
    }
  }
}
