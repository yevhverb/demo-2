export class TemplateAnimalCard {
  constructor() {
    this.dateNow = new Date();
  }

  getAnimalCardTemplate({ id, image, breed, species, gender, price, birth_date }) {
    const dateOld = new Date(birth_date);
    birth_date = Math.ceil((this.dateNow.getTime() - dateOld.getTime()) / 2592000000);

    species = species.toLowerCase();
    if (species === 'bird') species = 'dove';

    price = price.toFixed(2);
    breed = breed[0].toUpperCase() + breed.slice(1); 

    return `
      <div class="column is-narrow is-3-widescreen is-4-desktop is-6-tablet is-12-mobile has-margin-bottom-15">
        <article class="animal-card card" data-id="${id}">
          <header class="animal-card-header">
            <div class="animal-card-img">
              <img src="${image}" alt="${breed}" loading="lazy">
            </div>
          </header>
          <main class="animal-card-main shadow-top has-padding-15 has-padding-bottom-50 has-background-white">
            <section class="columns is-2 is-variable align-items-center"
              style="border-bottom: 1.5px solid #f9f9f9;">
              <div class="column is-3 is-size-3 has-text-centered ">
                <i class="fas fa-${species} has-text-grey-light"></i>
              </div>
              <div class="column">
                <p class="is-size-5 has-text-weight-bold">${breed}</p>
                <span class="is-size-6 has-text-weight-medium has-text-grey-light">${gender} /</span> 
                <span class="is-size-6 has-text-weight-medium has-text-grey-light">${birth_date} month</span>
              </div>
            </section>
            <section class="flex flex-row justify-center has-padding-top-5">
              <span class="is-size-5 has-text-weight-bold has-text-grey">$ ${price}</span>
            </section>
          </main>
          <footer class="animal-card-footer shadow-top has-padding-10 has-background-white flex flex-row">
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
}
