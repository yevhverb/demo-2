import { ModelCart } from './ModelCart.js';
import { ViewCart } from './ViewCart.js';

export class ControllerCart {
  constructor({ subscribe, publish }) {
    this.model = new ModelCart();
    this.view = new ViewCart();

    this.subscribe = subscribe;
    this.publish = publish;

    this.view.addListeners(
      this.handleShowItems.bind(this),
      this.handleShowOrder.bind(this),
      this.handleCloseCart.bind(this)
    );

    this.view.updateCartCounter(this.model.lengthPetsData);

    this.subscribe('onUpdateCart', ({ pet, isBuy }) => {
      this.model.updateCart({ pet, isBuy });
      this.view.updateCartCounter(this.model.lengthPetsData);
    });
  }

  handleShowItems(isAnimate = true) {
    this.model.scrollTo = this.view.mainScrollTop;
    
    this.view.renderItems(
      this.model.petsData, 
      this.model.summaryPetsData,
      isAnimate
    );

    this.view.addListenersItems(
      this.handleRemoveItem.bind(this), 
      this.handleDetailsItem.bind(this),
      this.handleClearCart.bind(this)
    );
  }

  handleRemoveItem(id) {
    this.publish('onUpdateCart', { pet: { id }, isBuy: false });
    this.publish('onChangePetsData', id);
    this.handleShowItems(false);
  }

  handleClearCart() {
    this.model.petsData.forEach(({ id }) => {
      this.handleRemoveItem(id);
    }); 
  }

  handleDetailsItem(id) {
    this.publish('onShowPetDetails', this.model.getPetDetails(id));
  }

  handleShowOrder() {
    this.view.renderOrder(this.model.summaryPetsData);
    this.view.addListenersOrder(
      this.model.petsData, 
      this.model.summaryPetsData,
      this.handleOrder.bind(this)
    );
  }

  handleOrder(detailsOrder) {
    this.model.sendOrder(detailsOrder);
  }

  handleCloseCart(page) {
    const context = { scrollTo: this.model.scrollTo, isAnimate: false };

    if (page === 'pet-cards') this.publish('onReturnPetCards', context);
    if (page === 'pet-details') this.publish('onReturnPetDetails', context);
  }
}
