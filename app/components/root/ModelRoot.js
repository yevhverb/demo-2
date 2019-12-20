export class ModelRoot {
  constructor({ emit }) {
    this.petsBase = 'https://jsonstorage.net/api/items/d301cfd4-7636-4dab-a1ae-753fbca366b4';
    this.petsData;

    this.emit = emit;

    this.getPetsData();
  }

  async getPetsData() {
    this.petsData = await fetch(this.petsBase).then(response => response.json());
    this.emit('fetchedPetsData', this.petsData);
  }
}
