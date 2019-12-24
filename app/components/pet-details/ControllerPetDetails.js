import { ModelPetDetails } from './ModelPetDetails.js';
import { ViewPetDetails } from './ViewPetDetails.js';

export class ControllerPetDetails {
  constructor({ subscribe, publish }) {
    this.model = new ModelPetDetails();
    this.view = new ViewPetDetails();

    this.subscribe = subscribe;
    this.publish = publish;

    this.subscribe('onShowPetDetails', pet => { 
      const scrollTo = this.view.main.scrollTop;

      this.model.savePetDetailsData(pet, scrollTo);
      this.handleShowPetDetails();
    });

    this.subscribe('onReturnPetDetails', ({scrollTo, isAnim}) => {
      this.handleShowPetDetails(scrollTo, isAnim);
    });
  }

  handleShowPetDetails(scrollTo = 0, isAnim = true) {
    this.view.render(
      this.model.getPrimaryPetDetailsData(), 
      this.model.getSecondaryPetDetailsData(),
      scrollTo,
      isAnim
    );

    this.view.addListenersBack(this.handleReturnBack.bind(this));
    this.view.addListenersBtnBuy(this.handlePetInCart.bind(this));
  }

  handleReturnBack() {
    this.publish('onReturnPetCards', { scrollTo: this.model.scrollTo });
  }

  handlePetInCart(isBuy) {
    isBuy 
    ? this.publish('onBuyPet', this.model.petDetailsData)
    : this.publish('onRemovePet', this.model.petDetailsData);
    
    this.publish('onUpdateCart', Number(this.model.petDetailsData.id));
  }
}
