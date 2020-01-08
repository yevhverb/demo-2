import { calcAgeMonth } from '../../share/helpers/index.js';

export class TemplatePetCards {
  getTemplatePetCards(html) {
    return `
      <div class="pet-cards columns is-multiline is-mobile">${html}</div>
    `;
  }

  getTemplatePetCard({ id, image, breed, species, gender, price, birth_date, is_buy }, idx, isAnimate) {
    if (species === 'bird') species = 'dove';

    return `
      <div class="column is-narrow is-3-widescreen is-4-desktop is-6-tablet is-12-mobile has-margin-bottom-15">
        <article class="pet-card card ${isAnimate ? 'animated fadeIn faster' : ''}"
          style="animation-delay: ${idx / 35}s">
          <header class="pet-card-header">
            <div class="pet-card-img">
              <img src="${image}" alt="${breed}" loading="lazy">
            </div>
          </header>
          <main class="pet-card-main shadow-top has-padding-15 has-padding-bottom-50 has-background-white">
            <section class="columns is-mobile align-items-center"
              style="border-bottom: 1.5px solid #f9f9f9;">
              <div class="column is-3 is-size-3 has-text-centered">
                <i class="fas fa-${species.toLowerCase()} has-text-grey-light"></i>
              </div>
              <div class="column is-9">
                <h3 class="pet-card-title is-size-5 is-capitalized has-text-weight-bold">${breed}</h3>
                <span class="is-size-6 is-capitalized has-text-weight-bold has-text-grey-light">${gender} /</span> 
                <span class="is-size-6 has-text-weight-bold has-text-grey-light">${calcAgeMonth(birth_date)} mo.</span>
              </div>
            </section>
            <section class="flex flex-row justify-center has-padding-top-5">
              <span class="is-size-5 has-text-weight-bold has-text-grey">$ ${price.toFixed(2)}</span>
            </section>
          </main>
          <footer class="pet-card-footer shadow-top has-padding-10 has-background-white flex flex-row">
            <button class="btn-buy button is-focused is-half-width is-rounded is-light is-success has-margin-5 has-text-weight-bold 
              ${is_buy ? 'is-danger' : ''}" data-id="${id}">
              ${is_buy ? 'IN CART' : 'BUY'}
            </button>
            <button 
              class="btn-details button is-focused is-half-width is-rounded is-light is-warning has-margin-5 has-text-weight-bold"
              data-id="${id}">
              DETAILS
            </button>
          </footer>
        </article>
      </div>
    `;
  }

  getTemplatePagination({ cur, all }) {
    return `
      <nav class="flex flex-row justify-center align-items-center is-rounded is-full-width has-margin-top-25 has-padding-left-25 has-padding-right-25 has-text-weight-bold">
        <button class="pag-prev card button is-medium is-rounded is-borderless is-size-6 has-text-weight-bold"
          ${cur === 1 ? 'disabled': ''}>
          PREV
        </button>
        <span class="has-padding-right-20 has-padding-left-20 has-text-grey">${cur} of ${all}</span>
        <button class="pag-next card button is-medium is-rounded is-borderless is-size-6 has-text-weight-bold"
          ${cur === all ? 'disabled': ''}>
          NEXT
        </button>
      </nav>
    `;
  }

  getTemplateNoData() {
    return `
      <h1 class="title is-size-3 is-uppercase has-text-centered is-full-width animated fadeIn fast">
        Such a pet was not found :(
      </h1>
    `;
  }
}
