export class TemplatePetCards {
  constructor() {
    this.dateNow = new Date();
  }

  getTemplatePetCard({ id, image, breed, species, gender, price, birth_date }, idx) {
    const age = Math.ceil((this.dateNow.getTime() - new Date(birth_date).getTime()) / 2592000000);

    breed = breed[0].toUpperCase() + breed.slice(1); 
    price = price.toFixed(2);
    species = species.toLowerCase();
    if (species === 'bird') species = 'dove';

    return `
      <div class="column is-narrow is-3-widescreen is-4-desktop is-6-tablet is-12-mobile has-margin-bottom-15">
        <article class="pet-card card animated fadeIn fast" data-id="${id}"
          style="animation-delay: ${idx / 10}s">
          <header class="pet-card-header">
            <div class="pet-card-img">
              <img src="${image}" alt="${breed}" loading="lazy">
            </div>
          </header>
          <main class="pet-card-main shadow-top has-padding-15 has-padding-bottom-50 has-background-white">
            <section class="columns is-mobile align-items-center"
              style="border-bottom: 1.5px solid #f9f9f9;">
              <div class="column is-3 is-size-3 has-text-centered">
                <i class="fas fa-${species} has-text-grey-light"></i>
              </div>
              <div class="column is-9">
                <p class="is-size-5 has-text-weight-bold" style="white-space: nowrap">${breed}</p>
                <span class="is-size-6 has-text-weight-medium has-text-grey-light">${gender} /</span> 
                <span class="is-size-6 has-text-weight-medium has-text-grey-light">${age} month</span>
              </div>
            </section>
            <section class="flex flex-row justify-center has-padding-top-5">
              <span class="is-size-5 has-text-weight-bold has-text-grey">$ ${price}</span>
            </section>
          </main>
          <footer class="pet-card-footer shadow-top has-padding-10 has-background-white flex flex-row">
            <button class="button is-focused is-half-width is-rounded is-light is-success has-margin-5 has-text-weight-bold">
              BUY
            </button>
            <button class="button is-focused is-half-width is-rounded is-light is-warning has-margin-5 has-text-weight-bold">
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
        <button class="pag-prev card button is-medium is-rounded is-borderless is-size-6 has-text-weight-bold has-text-grey"
          ${cur === 1 ? 'disabled': ''}>
          PREV
        </button>
        <span class="has-padding-right-20 has-padding-left-20 has-text-grey">${cur} of ${all}</span>
        <button class="pag-next card button is-medium is-rounded is-borderless is-size-6 has-text-weight-bold has-text-grey"
          ${cur === all ? 'disabled': ''}>
          NEXT
        </button>
      </nav>
    `;
  }

  getTemplateNoneData() {
    return `
      <h1 class="title is-size-3 is-uppercase has-text-centered is-full-width animated fadeIn fast">Such a pet was not found :(</h1>
    `;
  }
}
