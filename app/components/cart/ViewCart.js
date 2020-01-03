import { isValidPhone, isValidEmail } from '../../helpers/index.js';
import { TemplateCart } from './TemplateCart.js';

export class ViewCart {
  constructor() {
    this.templater = new TemplateCart();
    this.root = document.querySelector('.root');
    this.main = this.root.querySelector('.main');
    this.cart = this.root.querySelector('.cart');
    this.cartBtn = this.root.querySelector('.cart-btn');
    this.cartMain = this.cart.querySelector('.cart-main');
  }

  addListeners(handleShowItems, handleShowOrder, handleCloseCart) {
    this.cartBtn.addEventListener('click', () => {
      this.cart.classList.toggle('is-invisible');
      handleShowItems();
    });

    this.cart.addEventListener('click', event => {
      if (event.target.classList.contains('cart')) {
        this.cart.classList.toggle('is-invisible');
        handleCloseCart(this.main.dataset.page);
      }
    });

    this.cart.querySelector('.cart-btn-items')
      .addEventListener('click', () => handleShowItems());

    this.cart.querySelector('.cart-btn-order')
      .addEventListener('click', () => handleShowOrder());
  }

  addListenersItems(handleRemoveItem, handleDetailsItem, handleClearCart) {
    this.cartMain.querySelectorAll('.btn-remove').forEach(btn => {
      btn.addEventListener('click', () => {
        handleRemoveItem(btn.dataset.id);
      });
    });

    this.cartMain.querySelectorAll('.btn-details').forEach(btn => {
      btn.addEventListener('click', () => {
        handleDetailsItem(btn.dataset.id);
        this.cart.classList.toggle('is-invisible');
      });
    });
    
    this.cartMain.querySelector('.cart-btn-clear')
      .addEventListener('click', () => handleClearCart());
  }

  addListenersOrder(petsData, summary, handleOrder) {
    const cartOrder = this.cart.querySelector('form');

    cartOrder.addEventListener('submit', event => {
      event.preventDefault();

      const details = {};

      cartOrder.querySelectorAll('input').forEach(input => {
        const help = input.parentNode.nextElementSibling;
        const value = input.value;
        const name = input.dataset.order;

        help.innerHTML = '';

        if (!value) {
          help.innerHTML = this.templater
            .getTemplateFieldHelp('This field is required.');
          return;
        }

        if (name === 'phone' && !isValidPhone(value)) {
          help.innerHTML = this.templater
            .getTemplateFieldHelp('Not correctly. Example: +380671234567.');
          return;
        }
          
        if (name === 'email' && !isValidEmail(value)) {
          help.innerHTML = this.templater
            .getTemplateFieldHelp('Not correctly. Example: dog@animal.com.');
          return;
        }

        details[name] = value;
      });

      cartOrder.querySelectorAll('textarea').forEach(textarea => {
        const value = textarea.value;
        const name = textarea.dataset.order;

        if (value) details[name] = value;
      });

      if (details.name && details.phone && details.email && details.address) {
        const items = petsData.map((pet, idx) => this.templater.getTemplateOrderItems(pet, idx))
          .join('\n      ');

        handleOrder(this.templater.getTemplateOrder({summary, ...details}, items));

        cartOrder.reset();
      }
    });
  }

  updateCartCounter(number) {
    this.cartBtn.dataset.counter = number || '';
    this.cartBtn.classList.toggle('is-empty', number < 1);
  }

  renderItems(data, { totalPrice, countItems }, isAnimate) {
    const items = data.length
      ? data.map((item, idx) => this.templater.getTemplateCartItem(item, idx, isAnimate)).join('')
      : this.templater.getTemplateCartNoItem();

    const summary = this.templater.getTemplateCartSummary(countItems, totalPrice);

    this.cartMain.innerHTML = this.templater.getTemplateMainCartItems(items, summary);
  }

  renderOrder(data) {
    const { countItems, totalPrice } = data;
    const withClear = false;

    const summary = this.templater.getTemplateCartSummary(countItems, totalPrice, withClear);

    this.cartMain.innerHTML = this.templater.getTemplateMainCartOrder(summary, countItems);
  }

  get mainScrollTop() {
    return this.main.scrollTop;
  }
}
