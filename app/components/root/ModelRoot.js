export class ModelRoot {
  constructor({ publish, subscribe }) {
    this.petsBase = 'https://jsonstorage.net/api/items/d301cfd4-7636-4dab-a1ae-753fbca366b4';
    this.petsData;

    this.subscribe = subscribe;
    this.publish = publish;

    this.getPetsData();

    this.subscribe('onSearch', search => this.handleSearch(search));
  }

  getPetsData() {
    fetch(this.petsBase)
      .then(response => response.json())
      .then(data => {
        this.petsData = data;
        this.publish('onUpdatePetsData', this.petsData);
      });
  }

  handleSearch(search) {
    this.publish('onUpdatePetsData', 
      search 
      ? this.petsData.filter(pet => pet.breed.toLowerCase().indexOf(search) > -1) 
      : this.petsData
    );
  }
}
