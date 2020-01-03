import { ModelPetCards } from './ModelPetCards.js';
import { ViewPetCards } from './ViewPetCards.js';

export class ControllerPetCards {
  constructor({ subscribe, publish }) {
    this.model = new ModelPetCards();
    this.view = new ViewPetCards();
    
    this.subscribe = subscribe;
    this.publish = publish;
    
    this.subscribe('onUpdatePetCards', pets => {
      this.model.updatePetsData(pets);
      this.handlePetsData(true);
    });

    this.subscribe('onReturnPetCards', ({ scrollTo, isAnimate }) => {
      this.handlePetsData(null, scrollTo, isAnimate);
    });

    this.subscribe('onSortPets', type => {
      this.model.petsSort = type;
      this.model.petsCurIdx = -20;
      this.handlePetsData(true);
    });
  }

  handlePetsData(isMore, scrollTo = 0, isAnimate = true) {
    this.view.render(
      this.model.getSlicePetsData(isMore), 
      this.model.calcPagination(),
      scrollTo,
      isAnimate
    );

    if (this.model.lengthPetsData) {
      this.view.addListeners(
        this.handlePetsData.bind(this),
        this.handlePetInCart.bind(this),
        this.handlePetDetails.bind(this)
      );
    }
  }

  handlePetDetails(id) {
    this.publish('onShowPetDetails', this.model.getPetDetails(id));
  }

  handlePetInCart(id, isBuy) {
    const pet = this.model.getPetDetails(id);

    this.publish('onUpdateCart', { pet, isBuy })
    this.publish('onChangePetsData', id);
  }
}
