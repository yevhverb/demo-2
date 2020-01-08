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

      this.model.saveDetails(pet, scrollTo);
      this.handleOnShowDetails();
    });

    this.subscribe('onReturnPetDetails', ({ scrollTo, isAnimate }) => 
      this.handleOnShowDetails(scrollTo, isAnimate));
  }

  handleOnShowDetails(scrollTo = 0, isAnimate = true) {
    this.view.render(
      this.model.primaryDetails, 
      this.model.secondaryDetails, 
      scrollTo, 
      isAnimate
    );

    this.view.addListeners(
      this.handleOnReturnBack.bind(this), 
      this.handleOnBuyPet.bind(this)
    );
  }

  handleOnReturnBack() {
    const context = ({ scrollTo: this.model.scrollTo, isAnimate: true });
    this.publish('onReturnPetCards', context);
  }

  handleOnBuyPet(event) {
    event.target.classList.toggle('is-danger');
    event.target.textContent = event.target.classList.contains('is-danger') 
      ? 'IN CART' 
      : 'BUY';

    const pet = this.model.allDetails;
    const id = pet.id;
    const isBuy = event.target.textContent !== 'BUY';

    this.publish('onUpdateCart', { pet, isBuy })
    this.publish('onChangePetsData', id);
  }
}
