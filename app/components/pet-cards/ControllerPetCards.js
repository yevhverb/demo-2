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

    this.subscribe('onReturnPetCards', ({scrollTo, isAnim}) => {
      this.handlePetsData(null, scrollTo, isAnim);
    });
  }

  handlePetsData(isMore, scrollTo = 0, isAnim = true) {
    this.view.render(
      this.model.getSlicePetsData(isMore), 
      this.model.calcPaginationPetsData(),
      scrollTo,
      isAnim
    );

    if (this.model.getLengthPetsData()) {
      this.view.addListenersPagination(this.handlePetsData.bind(this));
      this.view.addListenersBtnsDetails(this.handlePetDetails.bind(this));
      this.view.addListenersBtnsBuy(this.handlePetInCart.bind(this));
    }
  }

  handlePetDetails(id) {
    this.publish('onShowPetDetails', this.model.getPetDetails(id));
  }

  handlePetInCart(id, isBuy) {
    isBuy 
    ? this.publish('onBuyPet', this.model.getPetDetails(id))
    : this.publish('onRemovePet', this.model.getPetDetails(id));
    
    this.publish('onUpdateCart', id);
  }
}
