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
      this.handleOnChangePage(true);
    });

    this.subscribe('onSortPets', type => {
      this.model.petsSortType = type;
      this.model.resetCurIdxPetsData();
      this.handleOnChangePage(true);
    });

    this.subscribe('onReturnPetCards', ({ scrollTo, isAnimate }) => 
      this.handleOnChangePage(null, scrollTo, isAnimate));
  }

  handleOnChangePage(isMore, scrollTo = 0, isAnimate = true) {
    this.view.render(
      this.model.getPagePetsData(isMore), 
      this.model.calcPages(),
      scrollTo,
      isAnimate
    );

    if (this.model.lengthPetsData) {
      this.view.addListeners(
        this.handleOnChangePage.bind(this),
        this.handleOnBuyPet.bind(this),
        this.handleOnDetailsPet.bind(this)
      );
    }
  }

  handleOnDetailsPet(btn) {
    const pet = this.model.getPetDetails(Number(btn.dataset.id));
    this.publish('onShowPetDetails', pet);
  }

  handleOnBuyPet(btn) {
    btn.classList.toggle('is-danger');
    btn.textContent = btn.classList.contains('is-danger') 
      ? 'IN CART' 
      : 'BUY';
    
    const id = Number(btn.dataset.id);
    const pet = this.model.getPetDetails(id);
    const isBuy = btn.textContent !== 'BUY';

    this.publish('onUpdateCart', { pet, isBuy })
    this.publish('onChangePetsData', id);
  }
}
