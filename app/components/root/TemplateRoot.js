export class TemplateRoot {
  getTemplateRoot() {
    return `
      <main class="section has-margin-bottom-65">
        <div class="container">
          <div class="pet-cards columns is-multiline is-mobile"></div>
        </div>
      </main> 
      <header class="nav shadow-top section has-padding-15 has-padding-left-35">
        <div class="container">
          <h1 class="title is-size-5 has-text-weight-bold has-text-centered flex flex-column">
            <span>PET <i class="fas fa-paw"></i> SHOP</span>
          </h1>
        </div>
      </header>
    `;
  }
}
