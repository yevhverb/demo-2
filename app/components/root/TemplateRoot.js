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
                    <span class="is-hidden-desktop-only is-hidden-widescreen-only has-padding-right-5">PET</span> 
                    <i class="fas fa-paw"></i>
                    <span class="is-hidden-desktop-only is-hidden-widescreen-only has-padding-left-5">SHOP</span>
                  </h1>
                </a>
              </div>
              <div class="column has-text-centered">
                <div class="dropdown drop-species is-empty is-full-width">
                  <div class="dropdown-trigger is-full-width">
                    <button class="button flex flex-row justify-space-between is-focused is-full-width is-rounded is-light is-empty has-text-weight-bold">
                      <span>ALL</span>
                      <i class="fas fa-angle-down"></i>
                    </button>
                  </div>
                  <div class="dropdown-menu" role="menu">
                    <div class="dropdown-content card animated fadeIn faster" style="animation-duration: 267ms;">
                      <div class="dropdown-item">
                        <button class="drop-species-btn button is-focused is-full-width is-rounded is-light is-empty is-uppercase has-text-weight-bold" 
                          data-species="">
                          ALL
                        </button>
                      </div>
                      <div class="dropdown-item">
                        <button class="drop-species-btn button is-success is-focused is-full-width is-rounded is-light is-empty is-uppercase has-text-weight-bold" 
                          data-species="cat">
                          CAT
                        </button>
                      </div>
                      <div class="dropdown-item">
                        <button class="drop-species-btn button is-success is-focused is-full-width is-rounded is-light is-empty is-uppercase has-text-weight-bold" 
                          data-species="dog">
                          DOG
                        </button>
                      </div>
                      <div class="dropdown-item">
                        <button class="drop-species-btn button is-success is-focused is-full-width is-rounded is-light is-empty is-uppercase has-text-weight-bold" 
                          data-species="bird">
                          BIRD
                        </button>
                      </div>
                      <div class="dropdown-item">
                        <button class="drop-species-btn button is-success is-focused is-full-width is-rounded is-light is-empty is-uppercase has-text-weight-bold" 
                          data-species="fish">
                          FISH
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="column is-6 search"></div>
              <div class="column has-text-centered">
                <div class="dropdown is-full-width">
                  <div class="dropdown-trigger is-full-width">
                    <button class="btn-pets-sort button flex flex-row justify-space-between is-focused is-full-width is-rounded is-light is-empty has-text-weight-bold">
                      <span>SORT BY</span>
                      <span class="icon is-small">
                        <i class="fas fa-angle-down"></i>
                      </span>
                    </button>
                  </div>
                  <div class="dropdown-menu" role="menu">
                    <div class="dropdown-content">
                      <div class="dropdown-item">
                        <p>You can insert <strong>any type of content</strong> within the dropdown menu.</p>
                      </div>
                      <hr class="dropdown-divider">
                      <div class="dropdown-item">
                        <p>You simply need to use a <code>&lt;div&gt;</code> instead.</p>
                      </div>
                      <hr class="dropdown-divider">
                      <a href="#" class="dropdown-item">
                        This is a link
                      </a>
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
        <div class="container"></div>
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
