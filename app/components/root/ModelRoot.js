export class ModelRoot {
  constructor({ subscribe, publish }) {
    this.petsBase = 'https://jsonstorage.net/api/items/d301cfd4-7636-4dab-a1ae-753fbca366b4';
    this.petsStorage = JSON.parse(sessionStorage.getItem('petshop-cart')) || [];
    this.petsDataBySpecies;
    this.petsData;
    this.search;

    this.subscribe = subscribe;
    this.publish = publish;

    this.getPetsData();

    this.subscribe('onSearch', search => this.handleOnSearch(search));
    this.subscribe('onChangePetsData', id => this.handleOnChangePetsData(id));
  }

  getPetsData() {
    fetch(this.petsBase)
      .then(response => response.json())
      .then(data => {
        this.petsData = data.map(pet => { 
          pet.is_buy = false; 
          return pet; 
        });

        this.petsStorage.forEach(item => {
          const pet = this.petsData.find(pet => pet.id == item.id);
          pet.is_buy = true;
        });

        this.handleOnPetsBySpecies();
      });
  }

  handleOnPetsBySpecies(species) {
    this.petsDataBySpecies = species 
      ? this.petsData.filter(pet => pet.species === species) 
      : this.petsData

    this.search 
      ? this.handleOnSearch(this.search)
      : this.publish('onUpdatePetCards', this.petsDataBySpecies);
  }

  handleOnSearch(search) {
    this.search = search;

    this.publish('onUpdatePetCards', 
      this.search 
        ? this.petsDataBySpecies.filter(pet => pet.breed.toLowerCase().indexOf(search) > -1) 
        : this.petsDataBySpecies
    );
  }

  handleOnChangePetsData(id) {
    const pet = this.petsData.find(pet => pet.id == id);
    pet.is_buy = !pet.is_buy;
  }

  handleOnPetsBySort(type) {
    this.publish('onSortPets', type);
  }
}
