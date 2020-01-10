import { calcBirthDay, calcAgeMonth } from '../../utils/index.js';

export class TemplatePetDetails {
  getTemplateAllDetails({ breed, image, species, price, is_buy }, secondary, isAnimate) {
    if (species === 'bird') species = 'dove';

    return `
      <div class="flex flex-row justify-center">
        <button class="btn-back button card is-rounded is-borderless has-margin-left-15 has-text-weight-bold">BACK</button>
      </div>
      <div class="columns is-centered has-margin-top-20 ${isAnimate ? 'animated fadeIn faster' : ''}">
        <div class="column is-3-widescreen is-4-desktop is-5-tablet">
          <article class="pet-details-left card is-full-width ">
            <header class="pet-details-left-header">
              <img src="${image}" alt="${breed}">
            </header>
            <main class="pet-details-left-main card shadow-top has-padding-15 has-padding-bottom-45">
              <div class="columns is-mobile align-items-center"
                style="border-bottom: 1.5px solid #f9f9f9;">
                <div class="column is-3 is-size-3 has-text-centered">
                  <i class="fas fa-${species} has-text-grey-light"></i>
                </div>
                <div class="column">
                  <h2 class="is-size-4 is-capitalized has-text-weight-bold">${breed}</h2>
                  <h3 class="is-size-6 has-text-weight-bold has-text-grey-light">BREED:</h3>
                </div>
              </div>
              <div class="columns is-mobile align-items-center">
                <div class="column is-3 is-size-3 has-text-centered">
                  <i class="fas fa-coins has-text-grey-light"></i>
                </div>
                <div class="column">
                  <span class="is-size-5 has-text-weight-bold has-text-grey">$ ${price.toFixed(2)}</span>
                  <h3 class="is-size-6 has-text-weight-bold has-text-grey-light">PRICE:</h3>
                </div>
              </div>
            </main>
            <footer class="pet-details-left-footer card shadow-top has-padding-15">
              <button 
                class="btn-buy button is-focused is-full-width is-rounded is-light is-success has-text-weight-bold
                ${is_buy ? 'is-danger' : ''}">
                ${is_buy ? 'IN CART' : 'BUY'}
              </button>
            </footer>
          </article>
        </div>
        <div class="column is-3-widescreen is-4-desktop is-5-tablet">
          <div class="pet-details-right card">
            <div class="columns is-multiline has-padding-top-10 has-padding-bottom-10">
              ${secondary}
            </div>
          </div>
        </div>
      </div>
    `;
  }
  
  getTemplateSecondaryDetails([key, value], idx, isAnimate) {
    key = key.replace('_', ' ').toUpperCase();

    if (key === 'BIRTH DATE') value = `${calcBirthDay(value)} (${calcAgeMonth(value)} mo.)`;
    if (key === 'WEIGHT') value = `${value} kg`;

    return `
      <div class="column is-12 ${isAnimate ? 'animated fadeIn faster' : ''}"
        style="border-bottom: 1.5px solid #f9f9f9; animation-delay: ${idx / 15}s;">
        <article 
          class="pet-details-sub flex flex-row align-items-center has-padding-5 has-padding-left-25 has-padding-right-25">
          <sectionc class="has-margin-left-15">
            <p class="is-size-5 ${isNaN(value[0]) ? 'is-capitalized' : ''} has-text-weight-bold has-text-grey">${value}</p>
            <h3 class="is-size-6 has-text-weight-bold has-text-grey-light">${key}:</h3>
          </section>
        </article>
      </div>
    `;
  }
}
