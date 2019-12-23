import { ModelPetDetails } from './ModelPetDetails.js';
import { ViewPetDetails } from './ViewPetDetails.js';

export class ControllerPetDetails {
  constructor({ subscribe, publish }) {
    this.model = new ModelPetDetails();
    this.view = new ViewPetDetails();

    this.subscribe = subscribe;
    this.publish = publish;

    this.subscribe('onShowPetDetails', pet => {
      const scrollTo = window.pageYOffset;

      this.model.savePetDetailsData(pet, scrollTo);
      this.handleShowPetDetails();
    });
  }

  handleShowPetDetails() {
    this.view.render(
      this.model.getPrimaryPetDetailsData(), 
      this.model.getSecondaryPetDetailsData()
    );

    this.view.addListenersBack(this.handleBack.bind(this));
  }

  handleBack() {
    this.publish('onHiddenPetDetails', this.model.scrollTo);
  }
}
