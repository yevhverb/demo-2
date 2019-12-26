import { calcAgeMonth } from '../../helpers/index.js';

export class TemplateCart {
  getTemplateMainCartItems(items) {
    return `
      <div class="container has-margin-top-25 has-padding-bottom-35">
        <div class="cart-items columns is-multiline">
          ${items}
        </div>
      </div>
    `;
  }

  getTemplateCartItem({ id, image, breed, species, gender, birth_date, price }) {
    if (species === 'bird') species = 'dove';

    return `
      <div class="column is-12">
        <article class="cart-item card flex flex-row">
          <header class="cart-item-header">
            <div class="cart-item-img">
              <img src="${image}" alt="${breed}" loading="lazy">
            </div>
          </header>
          <main class="cart-item-main shadow-left">
            <section class="columns is-mobile align-items-center has-padding-20 has-max-width-300"
              style="margin: 0;">
              <div class="column is-3 is-size-3 has-text-centered">
                <i class="fas fa-${species} has-text-grey-light"></i>
              </div>
              <div class="column is-9">
                <p class="is-size-5 is-capitalized has-text-weight-bold">${breed}</p>
                <span class="is-size-6 is-capitalized has-text-weight-bold has-text-grey-light">${gender} /</span> 
                <span class="is-size-6 has-text-weight-bold has-text-grey-light">${calcAgeMonth(birth_date)} mo.</span>
              </div>
            </section>
            <section class="flex flex-row justify-center has-min-width-200 has-padding-30 has-padding-right-50"
              style="border-left: 1.5px solid #f9f9f9;">
              <span class="is-size-5 has-text-weight-bold has-text-grey">$ ${price.toFixed(2)}</span>
            </section>  
          </main>
          <footer class="cart-item-footer shadow-left has-padding-15 has-background-white">
            <button class="btn-remove button is-focused is-rounded is-light is-danger is-full-width has-text-weight-bold"
              data-id="${id}">
              REMOVE
            </button>
            <button class="btn-details button is-focused is-rounded is-light is-warning is-full-width has-text-weight-bold has-margin-top-15"
              data-id="${id}">
              DETAILS
            </button>
          </footer>
        </article>
      </div>
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
