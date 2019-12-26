export class TemplateRoot {
  getTemplateRoot() {
    return `
      <header class="header">
        <nav class="nav card">
          <div class="container">
            <div class="columns align-items-center">
              <div class="column is-2">
                <a href="./">
                  <h1 class="title flex flex-row align-items-center is-size-5 has-text-weight-bold">
                    <span class="is-hidden-mobiles has-padding-right-5">PET</span> 
                    <i class="fas fa-paw"></i>
                    <span class="is-hidden-mobile has-padding-left-5">SHOP</span>
                  </h1>
                </a>
              </div>
              <div class="column search"></div>
              <div class="column is-2 has-text-right">
                <button 
                  class="cart-btn button is-focused is-half-width is-rounded is-light is-empty has-margin-5 has-text-weight-bold has-margin-right-15">
                  <i class="fas fa-shopping-cart has-margin-right-5" style="color: inherit;"></i>
                  CART
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <main class="main section">
        <div class="container"></div>
      </main> 
      <article class="cart is-invisible">
        <section class="cart-body shadow-top has-background-white-ter">
          <nav class="nav has-padding-20 has-padding-left-60 has-padding-right-60">
            <div class="container">
              <div class="columns align-items-center is-centered">
                <div class="column is-2 has-text-centered">
                  <button class="cart-btn-items card button is-medium is-rounded is-borderless is-size-6 has-text-weight-bold">
                    ITEMS
                  </button>
                </div>
                <div class="column is-1 has-text-centered">
                  <h1 class="title flex flex-row align-items-center justify-center is-size-5 has-text-weight-bold">
                    <span class="is-hidden-mobile has-padding-left-5">CART</span>
                  </h1>
                </div>
                <div class="column is-2 has-text-centered">
                  <button class="cart-btn-order card button is-medium is-rounded is-borderless is-size-6 has-text-weight-bold">
                    ORDER
                  </button>
                </div>
              </div>
            </div>
          </nav>
        <main class="cart-main"></main>
        </section>
      </article>
    `;
  }
}
