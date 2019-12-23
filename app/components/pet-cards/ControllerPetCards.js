import { ModelPetCards } from './ModelPetCards.js';
import { ViewPetCards } from './ViewPetCards.js';

export class ControllerPetCards {
  constructor({ subscribe, publish }) {
    this.model = new ModelPetCards();
    this.view = new ViewPetCards();
    
    this.subscribe = subscribe;
    this.publish = publish;
    
    this.subscribe('onUpdatePetsData', pets => {
      this.model.updatePetsData(pets);
      this.handlePetsData(true);
    });

    this.subscribe('onHiddenPetDetails', scrollTo => {
      this.handlePetsData(null, scrollTo);
    });
  }

  handlePetsData(isMore, scrollTo = 0) {   
    this.view.render(
      this.model.getSlicePetsData(isMore), 
      this.model.calcPaginationPetsData(),
      scrollTo
    );

    if (this.model.lengthPetsData) {
      this.view.addListenersPagination(this.handlePetsData.bind(this));
      this.view.addListenersBtnsDetails(this.requestPetDetails.bind(this));
    }
  }

  requestPetDetails(id) {
    if (id) this.publish('onRequestPetDetails', id);
  }
}
