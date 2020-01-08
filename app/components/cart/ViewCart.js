import { isValidPhone, isValidEmail } from '../../share/helpers/index.js';
import { TemplateCart } from './TemplateCart.js';

export class ViewCart {
  constructor() {
    this.templater = new TemplateCart();
    this.root = document.querySelector('.root');
  }

  addListeners(handleOnShowItems, handleOnShowOrder, handleOnCloseCart) {
    const { cart, cartBtn, cartBtnItems, cartBtnOrder } = this.elements;

    cart.addEventListener('click', handleOnCloseCart);
    cartBtnOrder.addEventListener('click', handleOnShowOrder);
    cartBtnItems.addEventListener('click', () => handleOnShowItems(false));
    cartBtn.addEventListener('click', () => handleOnShowItems(true));
  }

  addListenersItems(handleOnRemoveItem, handleOnDetailsItem, handleOnClearCart) {
    const { cartMain } = this.elements;

    cartMain.querySelectorAll('.btn-remove').forEach(btn => 
      btn.addEventListener('click', () => handleOnRemoveItem(btn.dataset.id, true)));

    cartMain.querySelectorAll('.btn-details').forEach(btn => 
      btn.addEventListener('click', () => handleOnDetailsItem(btn.dataset.id)));
    
    cartMain.querySelector('.cart-btn-clear')
      .addEventListener('click', handleOnClearCart);
  }

  addListenersOrder(updateUserData, handleOnOrder) {
    const form = this.elements.cart.querySelector('form');

    form.querySelectorAll('input').forEach(input => 
      input.addEventListener('blur', () => updateUserData(input)));

    form.querySelectorAll('textarea').forEach(textarea => 
      textarea.addEventListener('blur', () => updateUserData(textarea)));

    form.addEventListener('submit', event => {
      event.preventDefault();

      const { getTemplateFieldHelp } = this.templater;
      const details = {};

      form.querySelectorAll('input').forEach(input => {
        const help = input.parentNode.nextElementSibling;
        const value = input.value;
        const name = input.dataset.order;

        help.innerHTML = '';

        if (!value) {
          help.innerHTML = getTemplateFieldHelp('This field is required.');
          return;
        }

        if (name === 'phone' && !isValidPhone(value)) {
          help.innerHTML = getTemplateFieldHelp('Not correctly. Example: +380123456789.');
          return;
        }
          
        if (name === 'email' && !isValidEmail(value)) {
          help.innerHTML = getTemplateFieldHelp('Not correctly. Example: dog@animal.com.');
          return;
        }

        details[name] = value;
      });

      form.querySelectorAll('textarea').forEach(textarea => {
        const value = textarea.value;
        const name = textarea.dataset.order;

        if (value) details[name] = value;
      });

      if (details.name && details.phone && details.email && details.address) {       
        handleOnOrder(details);
      }
    });
  }

  renderItems(data, { totalPrice, countItems }, isAnimate) {
    const { 
      getTemplateCartItem, 
      getTemplateCartNoItem, 
      getTemplateCartSummary, 
      getTemplateCartItems 
    } = this.templater;

    const items = data.length
      ? data.map((item, idx) => getTemplateCartItem(item, idx, isAnimate)).join('')
      : getTemplateCartNoItem();

    const summary = getTemplateCartSummary(countItems, totalPrice);

    this.elements.cartMain.innerHTML = getTemplateCartItems(items, summary);
  }

  renderOrder(sumPetsData, userData) {
    const { countItems, totalPrice } = sumPetsData;
    const { getTemplateCartSummary, getTemplateCartOrder } = this.templater;

    const summary = getTemplateCartSummary(countItems, totalPrice, false);

    this.elements.cartMain.innerHTML = getTemplateCartOrder(summary, countItems, userData);
  }

  textOrder(data, summary, details) {
    const { getTemplateOrder, getTemplateOrderItems } = this.templater;

    const items = data.map((pet, idx) => getTemplateOrderItems(pet, idx)).join('\n');

    return getTemplateOrder({summary, ...details}, items);
  }

  get mainScrollTop() {
    return this.elements.main.scrollTop;
  }

  get elements() {
    return {
      main: this.root.querySelector('.main'),
      cart: this.root.querySelector('.cart'),
      cartBtn: this.root.querySelector('.cart-btn'),
      cartMain: this.root.querySelector('.cart .cart-main'),
      cartBtnItems: this.root.querySelector('.cart .cart-btn-items'),
      cartBtnOrder: this.root.querySelector('.cart .cart-btn-order')
    }
  }
}
