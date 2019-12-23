export class TemplateRoot {
  getTemplateRoot() {
    return `
      <header class="header">
        <nav class="nav card">
          <div class="container">
            <div class="columns align-items-center">
              <div class="column is-2">
                <a href="./">
                  <h1 class="title flex flex-row align-items-center is-size-5 has-text-weight-bold">
                    <span class="is-hidden-mobiles has-padding-right-5">PET</span> 
                    <i class="fas fa-paw"></i>
                    <span class="is-hidden-mobile has-padding-left-5">SHOP</span>
                  </h1>
                </a>
              </div>
              <div class="column search"></div>
              <div class="column is-2"></div>
            </div>
          </div>
        </nav>
      </header>
      <main class="main section has-padding-top-105">
        <div class="container"></div>
      </main> 
    `;
  }
}
