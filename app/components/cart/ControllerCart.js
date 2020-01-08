import { OrderService } from '../../services/OrderService.js';

import { ModelCart } from './ModelCart.js';
import { ViewCart } from './ViewCart.js';

export class ControllerCart {
  constructor({ subscribe, publish }) {
    this.model = new ModelCart();
    this.view = new ViewCart();
    this.orderService = new OrderService();

    this.subscribe = subscribe;
    this.publish = publish;

    this.view.addListeners(
      this.handleOnShowItems.bind(this),
      this.handleOnShowOrder.bind(this),
      this.handleOnCloseCart.bind(this)
    );

    this.updateCartCounter(this.model.lengthPetsData);

    this.subscribe('onUpdateCart', ({ pet, isBuy }) => {
      this.model.updateCartPetsData({ pet, isBuy });
      this.updateCartCounter(this.model.lengthPetsData);
    });
  }

  handleOnShowItems(isToggle, isAnimate = true) {
    isToggle && this.view.elements.cart.classList.toggle('is-invisible');

    this.model.scrollTo = this.view.mainScrollTop;
    this.model.isCloseCart = false;
    
    this.view.renderItems(
      this.model.petsData, 
      this.model.summaryPetsData,
      isAnimate
    );

    this.view.addListenersItems(
      this.handleOnRemoveItem.bind(this), 
      this.handleOnDetailsItem.bind(this),
      this.handleOnClearCart.bind(this)
    );
  }

  handleOnRemoveItem(id, isReshow) {
    this.publish('onUpdateCart', { pet: { id }, isBuy: false });
    this.publish('onChangePetsData', id);

    if (isReshow) this.handleOnShowItems(false, false);
  }

  handleOnClearCart(isClose = true, isReshow = true) {
    this.model.petsData.forEach(({ id }) => 
      this.handleOnRemoveItem(id, isReshow));

    this.model.clearUserData();
    
    if (isClose) this.handleOnCloseCart(null, true);
  }

  handleOnDetailsItem(id) {
    const pet = this.model.getPetDetails(id);
    this.publish('onShowPetDetails', pet);
    
    this.view.elements.cart.classList.toggle('is-invisible');
  }

  handleOnShowOrder() {
    this.model.isCloseCart = false;

    this.view.renderOrder(
      this.model.summaryPetsData, 
      this.model.userData
    );

    this.view.addListenersOrder(
      this.model.updateUserData.bind(this.model), 
      this.handleOnOrder.bind(this)
    );
  }

  handleOnOrder(details) {
    this.model.isCloseCart = true;

    const { cart } = this.view.elements;
    const form = cart.querySelector('form');

    const text = this.view.textOrder(
      this.model.petsData,
      this.model.summaryPetsData,
      details
    );

    this.orderService.sendOrder(text).then(([seller]) => 
      seller.then(res => {
        if (res.statusText && res.statusText === 'OK') {

          form.classList.add('cart-order-success');

          this.handleOnClearCart(false, false);
          this.returnToShop();
          
          setTimeout(() => this.model.isCloseCart
            ? this.handleOnCloseCart(null, true) : null, 5000);
        
        } else {

          form.classList.add('cart-order-error');
          setTimeout(() => form.classList.remove('cart-order-error'), 3000);
        
        }
      })
    );
  }

  handleOnCloseCart(event, isClear = false) {
    const { cart } = this.view.elements;

    this.model.isCloseCart = false;

    if (event && event.target.classList.contains('cart') || isClear) {
      cart.classList.add('is-invisible');
      this.returnToShop();      
    }
  }

  returnToShop() {
    const { main } = this.view.elements;

    const page = main.dataset.page;
    const context = { scrollTo: this.model.scrollTo, isAnimate: false };
  
    if (page === 'pet-cards') this.publish('onReturnPetCards', context);
    if (page === 'pet-details') this.publish('onReturnPetDetails', context);
  }

  updateCartCounter(number) {
    const { cartBtn } = this.view.elements;

    cartBtn.dataset.counter = number || '';
    cartBtn.classList.toggle('is-empty', number < 1);
  }
}
