import { ModelCart } from './ModelCart.js';
import { ViewCart } from './ViewCart.js';

export class ControllerCart {
  constructor({ subscribe, publish }) {
    this.model = new ModelCart();
    this.view = new ViewCart();

    this.subscribe = subscribe;
    this.publish = publish;

    this.view.addListenersCommon(
      this.handleShowItems.bind(this),
      this.handleCloseCart.bind(this)
    );

    this.view.renderNav();
    this.view.addListenersNav(
      this.handleShowItems.bind(this),
      this.handleShowOrder.bind(this)
    );

    this.handleShowItems();

    this.subscribe('onBuyPet', pet => this.model.addPetData(pet));
    this.subscribe('onDontBuyPet', pet => this.model.removePetData(pet));
  }

  handleShowItems() {
    this.model.scrollTo = this.view.main.scrollTop;
    
    this.view.renderItems(this.model.petsData);
    this.view.addListenersItems(this.handleRemoveItem.bind(this));
  }

  handleRemoveItem(id) {
    this.model.removePetData(id);
    this.view.renderItems(this.model.petsData);
    this.view.addListenersItems(this.handleRemoveItem.bind(this));

    this.publish('onUpdateCart', Number(id));
  }

  handleShowOrder() {
    this.view.renderOrder();
  }

  handleCloseCart(page) {
    if (page === 'pet-cards') this.publish('onReturnPetCards', { scrollTo: this.model.scrollTo, isAnim: false });
    if (page === 'pet-details') this.publish('onReturnPetDetails', { scrollTo: this.model.scrollTo, isAnim: false });
  }
}
