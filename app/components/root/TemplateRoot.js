export class TemplateRoot {
  getTemplateRoot() {
    return `
      <header>
        <nav class="nav card">
          <div class="columns align-items-center">
            <div class="column is-2">
              <a href="./">
                <h1 class="title flex flex-row align-items-center is-size-5 has-text-weight-bold">
                  <span class="is-hidden-mobile">PET</span> 
                  <i class="fas fa-paw"></i>
                  <span class="is-hidden-mobile">SHOP</span>
                </h1>
              </a>
            </div>
            <div class="column search"></div>
            <div class="column is-2"></div>
          </div>
        </nav>
      </header>
      <main class="section has-padding-top-105">
        <div class="container">
          <div class="pet-cards columns is-multiline is-mobile"></div>
        </div>
      </main> 
    `;
  }
}
