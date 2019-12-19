export class ModelAnimalCard {
  constructor() {
    this.data = 'https://jsonstorage.net/api/items/d301cfd4-7636-4dab-a1ae-753fbca366b4';
  }

  getData() {
    return fetch(this.data)
      .then(response => response.json());
  }
}
