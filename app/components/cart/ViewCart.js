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

  renderOrder() {
    this.cartMain.innerHTML = this.templater.getTemplateMainCartOrder();
  }

  get mainScrollTop() {
    return this.main.scrollTop;
  }
}
