export class TemplateCart {
  getTemplateNavCart() {
    return `
      <nav class="flex flex-row justify-center has-padding-25">
        <button class="cart-btn-items card button is-medium is-rounded is-borderless is-size-6 has-text-weight-bold">
          ITEMS
        </button>
        <button class="cart-btn-order card button is-medium is-rounded is-borderless is-size-6 has-text-weight-bold">
          ORDER
        </button>
      </nav>
    `;
  }

  getTemplateMainCartItems(items) {
    return `
      <div class="container">
        <div class="cart-items columns is-multiline">
          ${items}
        </div>
      </div>
    `;
  }

  getTemplateCartItem(data) {
    return `
      <article class="cart-item column is-12">
        <div class="cart-item-remove" style="max-width: 500px; margin: 0 auto; word-wrap: break-word;"
          data-id="${data.id}">
          ${JSON.stringify(data)}
        </div>
      </article>
    `;
  }

  getTemplateMainCartOrder() {
    return `
      <div class="container">
        <div class="cart-order"></div>
      </div>
    `;
  }
}
