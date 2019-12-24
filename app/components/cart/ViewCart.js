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

  addListenersCommon(handleShowItems, handleCloseCart) {
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
  }

  addListenersNav(handleShowItems, handleShowOrder) {
    this.cart.querySelector('.cart-btn-items')
      .addEventListener('click', () => handleShowItems());

    this.cart.querySelector('.cart-btn-order')
      .addEventListener('click', () => handleShowOrder());
  }

  addListenersItems(handleRemoveItem) {
    this.cartMain.querySelectorAll('.cart-item-remove').forEach(btn => {
      btn.addEventListener('click', () => {
        handleRemoveItem(btn.dataset.id);
      });
    });
  }

  renderNav() {
    this.cartMain.insertAdjacentHTML('beforebegin', this.templater.getTemplateNavCart());
  }

  renderItems(data) {
    const items = data.map(item => this.templater.getTemplateCartItem(item)).join('');
    this.cartMain.innerHTML = this.templater.getTemplateMainCartItems(items);
  }

  renderOrder() {
    this.cartMain.innerHTML = this.templater.getTemplateMainCartOrder();
  }
}
