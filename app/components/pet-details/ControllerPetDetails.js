import { ModelPetDetails } from './ModelPetDetails.js';
import { ViewPetDetails } from './ViewPetDetails.js';

export class ControllerPetDetails {
  constructor({ subscribe, publish }) {
    this.model = new ModelPetDetails();
    this.view = new ViewPetDetails();

    this.subscribe = subscribe;
    this.publish = publish;

    this.subscribe('onShowPetDetails', pet => { 
      const scrollTo = this.view.mainScrollTop;

      this.model.saveData(pet, scrollTo);
      this.handleShowPetDetails();
    });

    this.subscribe('onReturnPetDetails', ({ scrollTo, isAnimate }) => {
      this.handleShowPetDetails(scrollTo, isAnimate);
    });
  }

  handleShowPetDetails(scrollTo = 0, isAnimate = true) {
    this.view.render(this.model.primaryData, this.model.secondaryData, scrollTo, isAnimate);
    this.view.addListeners(this.handleReturnBack.bind(this), this.handlePetInCart.bind(this));
  }

  handleReturnBack() {
    const context = ({ scrollTo: this.model.scrollTo, isAnimate: true });

    this.publish('onReturnPetCards', context);
  }

  handlePetInCart(isBuy) {
    const pet = this.model.petDetailsData;
    const id = pet.id;

    this.publish('onUpdateCart', { pet, isBuy })
    this.publish('onChangePetsData', id);
  }
}
