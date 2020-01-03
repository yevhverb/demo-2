import { calcAgeMonth } from '../../helpers/index.js';

export class TemplateCart {
  getTemplateMainCartItems(items, summary) {
    return `
      <div class="container has-margin-top-30 has-padding-bottom-35" style="max-width: 835px;">
        <div class="columns is-12 is-centered">
          ${summary}
        </div>
        <div class="cart-items columns is-12 is-multiline">
          ${items}
        </div>
      </div>
    `;
  }

  getTemplateCartItem({ id, image, breed, species, gender, birth_date, price }, idx, isAnimate) {
    if (species === 'bird') species = 'dove';

    return `
      <div class="column is-12">
        <article class="cart-item card flex flex-row ${isAnimate ? 'animated fadeIn fast' : ''}"
          style="animation-delay: ${idx / 10}s">
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

  getTemplateCartNoItem() {
    return `
      <div class="column is-12">
        <h3 class="title is-size-5 has-text-centered animated fadeIn faster">CART IS EMPTY :(</h3>
      </div>
    `;
  }

  getTemplateMainCartOrder(summary, countItems) {
    return `
      <div class="container has-margin-top-30 has-padding-bottom-35" style="max-width: 835px;">
        <div class="cart-order">
          <div class="columns is-12 is-centered">
            ${summary}
          </div>
          <form class="card has-margin-top-10 has-padding-25 has-padding-bottom-35 animated fadeIn faster" 
            style="border-radius: 20px;">
            <fieldset ${countItems ? '' : 'disabled'}>
              <div class="columns is-multiline" style="margin: 0;">
                <div class="column is-6">
                  <div class="field has-margin-bottom-10 animated fadeIn faster" 
                    style="position: relative; animation-delay: .034s">
                    <label class="label has-text-grey has-margin-left-25">
                      Name
                      <span class="has-text-danger">*</span>
                    </label>
                    <div class="control">
                      <input class="input order-field is-full-width is-size-6 has-text-weight-semibold has-background-light" 
                        type="text" 
                        placeholder="e.g. Dog"
                        data-order="name">
                    </div>
                    <p class="help is-size-6 has-padding-left-25"
                      style="position: absolute;">
                    </p>
                  </div>
                </div>
                <div class="column is-6">
                  <div class="field has-margin-bottom-10 animated fadeIn faster" 
                    style="position: relative; animation-delay: .067s">
                    <label class="label has-text-grey has-margin-left-25">
                      Phone
                      <span class="has-text-danger">*</span>
                    </label>
                    <div class="control">
                      <input class="input order-field is-full-width is-size-6 has-text-weight-semibold has-background-light" 
                        type="text" 
                        placeholder="e.g. +380123456789"
                        data-order="phone">
                    </div>
                    <p class="help is-size-6 has-padding-left-25"
                      style="position: absolute;">
                    </p>
                  </div>
                </div>
                <div class="column is-6">
                  <div class="field has-margin-bottom-10 animated fadeIn faster" 
                    style="position: relative; animation-delay: .1s">
                    <label class="label has-text-grey has-margin-left-25 ">
                      Email
                      <span class="has-text-danger">*</span>
                    </label>
                    <div class="control">
                      <input class="input order-field is-full-width is-size-6 has-text-weight-semibold has-background-light" 
                        type="text" 
                        placeholder="e.g. dog@animal.com"
                        data-order="email">
                    </div>
                    <p class="help is-size-6 has-padding-left-25"
                      style="position: absolute;">
                    </p>
                  </div>
                </div>
                <div class="column is-6">
                  <div class="field has-margin-bottom-10 animated fadeIn faster"
                    style="position: relative; animation-delay: .134s">
                    <label class="label has-text-grey has-margin-left-25">
                      Address
                      <span class="has-text-danger">*</span>
                    </label>
                    <div class="control">
                      <input class="input order-field is-full-width is-size-6 has-text-weight-semibold has-background-light" 
                        type="text" 
                        placeholder="e.g. 23 Dog st."
                        data-order="address">
                    </div>
                    <p class="help is-size-6 has-padding-left-25"
                      style="position: absolute;">
                    </p>
                  </div>
                </div>
                <div class="column is-12">
                  <div class="field has-margin-bottom-10 animated fadeIn faster"
                    style="animation-delay: .167s">
                    <label class="label has-text-grey has-margin-left-25">Notes</label>
                    <div class="control">
                      <textarea class="textarea order-field is-full-width is-size-6 has-text-weight-bold has-background-light" 
                        placeholder="e.g. Please, cut this dog..."
                        style="min-height: 6em;"
                        data-order="note"></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </fieldset>
            <div class="column is-12">
              <button class="btn-remove button is-focused is-rounded is-light is-success is-full-width has-text-weight-bold"
                ${countItems ? '' : 'disabled'}
                type="submit">
                CONFIRM ORDER
              </button>
            </div>
          </form>
        </div>
      </div>
    `;
  }

  getTemplateOrder({ name, phone, email, address, note, summary }, items) {
    return `
      **Name:** ${name}
      **Phone:** ${phone}
      **Email:** ${email}
      **Address:** ${address}
      **Total:** $${summary.totalPrice.toFixed(2)}
      ${note ? `**Note:** ${note}` : ''}
      **Items:** 
      ${items}
    `;
  }

  getTemplateOrderItems({ id, breed, price }, idx) {
    return `${idx + 1}. [${id}], ${breed}, $${price.toFixed(2)};`;
  }

  getTemplateCartSummary(count, total, withClear = true) {
    return `
      <div class="column cart-total flex flex-row align-items-center ${withClear ? 'justify-space-between' : 'justify-flex-end'} has-padding-15 has-margin-bottom-10">
        ${withClear
          ? ` <button class="cart-btn-clear button card is-medium is-rounded is-borderless is-size-6 has-text-weight-bold" ${count ? '' : 'disabled'}>
                CLEAR CART
              </button> ` 
          : ''}
        <h2 class="title is-size-5 is-uppercase has-padding-top-10 has-padding-bottom-10">
          <span class="has-margin-right-10">
            <span class="has-text-grey-light has-margin-right-10">Pets: </span>
            <span class="has-text-grey">${count}</span>
          </span>
          <span class="has-margin-right-5">
            <span class="has-text-grey-light has-margin-right-10">Total: </span>
            <span class="has-text-grey">$ ${total.toFixed(2)}</span>
          </span>
        </h2>
      </div>
    `;
  }

  getTemplateFieldHelp(text) {
    return `
      <span class="has-text-weight-medium has-text-danger animated fadeIn faster">
        ${text}
      </span>
    `;
  }
}
