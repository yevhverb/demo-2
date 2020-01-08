export class TemplateRoot {
  getTemplateRoot() {
    return `
      <header class="header">
        <nav class="nav card">
          <div class="container">
            <div class="columns align-items-center">
              <div class="column">
                <a href="./">
                  <h1 class="title flex flex-row align-items-center is-size-5 has-text-weight-bold">
                    <span class="has-padding-right-5">PET</span> 
                    <i class="fas fa-paw is-hidden-desktop-only is-hidden-widescreen-only"></i>
                    <span class="has-padding-left-5">SHOP</span>
                  </h1>
                </a>
              </div>
              <div class="column has-text-centered">
                <div class="dropdown drop-species is-full-width">
                  <div class="dropdown-trigger is-full-width">
                    <button class="button flex flex-row justify-space-between is-focused is-full-width is-rounded is-light is-empty has-text-weight-bold">
                      <span><i class="fas fa-paw has-margin-right-5"></i> ALL</span>
                      <i class="fas fa-angle-down has-margin-left-5"></i>
                    </button>
                  </div>
                  <div class="dropdown-menu" role="menu">
                    <div class="dropdown-content card animated fadeIn faster" style="animation-duration: 267ms;">
                      <div class="dropdown-item">
                        <button class="drop-species-btn button is-focused is-full-width is-rounded is-light is-empty is-uppercase has-text-weight-bold" 
                          data-species="">
                          <i class="fas fa-paw is-events-none has-margin-right-5"></i> ALL
                        </button>
                      </div>
                      <div class="dropdown-item">
                        <button class="drop-species-btn button is-focused is-full-width is-rounded is-light is-empty is-uppercase has-text-weight-bold" 
                          data-species="cat">
                          <i class="fas fa-cat is-events-none has-margin-right-5"></i>  CATS
                        </button>
                      </div>
                      <div class="dropdown-item">
                        <button class="drop-species-btn button is-focused is-full-width is-rounded is-light is-empty is-uppercase has-text-weight-bold" 
                          data-species="dog">
                          <i class="fas fa-dog is-events-none has-margin-right-5"></i> DOGS
                        </button>
                      </div>
                      <div class="dropdown-item">
                        <button class="drop-species-btn button is-focused is-full-width is-rounded is-light is-empty is-uppercase has-text-weight-bold" 
                          data-species="bird">
                          <i class="fas fa-dove is-events-none has-margin-right-5"></i> BIRDS
                        </button>
                      </div>
                      <div class="dropdown-item">
                        <button class="drop-species-btn button is-focused is-full-width is-rounded is-light is-empty is-uppercase has-text-weight-bold" 
                          data-species="fish">
                          <i class="fas fa-fish is-events-none has-margin-right-5"></i> FISH
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="column is-6-widescreen is-4-desktop search"></div>
              <div class="column has-text-centered">
                <div class="dropdown drop-sort is-full-width">
                  <div class="dropdown-trigger is-full-width">
                    <button class="button flex flex-row justify-space-between is-focused is-full-width is-rounded is-light is-empty has-text-weight-bold">
                      <span>NO SORT</span>
                      <i class="fas fa-angle-down has-margin-left-5"></i>
                    </button>
                  </div>
                  <div class="dropdown-menu" role="menu">
                    <div class="dropdown-content card animated fadeIn faster" style="animation-duration: 267ms;">
                      <div class="dropdown-item">
                        <button class="drop-sort-btn button is-focused is-full-width is-rounded is-light is-empty is-uppercase has-text-weight-bold" 
                          data-sort="no-sort">
                          NO SORT
                        </button>
                      </div>
                      <div class="dropdown-item">
                        <button class="drop-sort-btn button is-focused is-full-width is-rounded is-light is-empty is-uppercase has-text-weight-bold" 
                          data-sort="price-up">
                          <i class="fas fa-arrow-up is-events-none has-margin-right-5"></i> PRICE
                        </button>
                      </div>
                      <div class="dropdown-item">
                        <button class="drop-sort-btn button is-focused is-full-width is-rounded is-light is-empty is-uppercase has-text-weight-bold" 
                          data-sort="price-down">
                          <i class="fas fa-arrow-down is-events-none has-margin-right-5"></i> PRICE 
                        </button>
                      </div>
                      <div class="dropdown-item">
                        <button class="drop-sort-btn button is-focused is-full-width is-rounded is-light is-empty is-uppercase has-text-weight-bold" 
                          data-sort="birth-up">
                          <i class="fas fa-arrow-up is-events-none has-margin-right-5"></i> AGE 
                        </button>
                      </div>
                      <div class="dropdown-item">
                        <button class="drop-sort-btn button is-focused is-full-width is-rounded is-light is-empty is-uppercase has-text-weight-bold" 
                          data-sort="birth-down">
                          <i class="fas fa-arrow-down is-events-none has-margin-right-5"></i> AGE 
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="column has-text-right has-margin-right-15">
                <button 
                  class="cart-btn button is-focused is-full-width is-rounded is-light is-empty has-margin-top-5 has-margin-bottom-5 has-text-weight-bold">
                  <i class="fas fa-shopping-cart has-margin-right-5" style="color: inherit;"></i>
                  CART
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <main class="main section">
        <div class="container">
          <div class="flex flex-row justify-center" style="width: 100%;">
            <img src="app/assets/spinner.gif" style="max-height: 55px; background: none;">
          </div>
        </div>
      </main> 
      <article class="cart is-invisible">
        <section class="cart-body shadow-top has-background-white-ter">
          <nav class="nav card has-padding-15">
            <div class="container" style="max-width: 835px">
              <div class="columns align-items-center justify-space-between is-centered">
                <div class="column is-6">
                  <h1 class="title flex flex-row align-items-center is-size-5 has-text-weight-bold">
                    <span class="is-hidden-mobiles has-padding-right-5">PET</span> 
                    <i class="fas fa-paw"></i>
                    <span class="is-hidden-mobile has-padding-left-5">CART</span>
                  </h1>
                </div>
                <div class="column is-6 flex flex-row justify-flex-end">
                  <button 
                    class="cart-btn-items button is-focused is-rounded is-light is-empty has-text-weight-bold">
                    <i class="fas fa-paw has-margin-right-5" style="color: inherit;"></i>
                    PETS
                  </button>
                  <button 
                    class="cart-btn-order button is-focused is-rounded is-light is-empty has-text-weight-bold has-margin-right-20">
                    <i class="fas fa-cash-register has-margin-right-5" style="color: inherit;"></i>
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
