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

    this.subscribe('onSearch', search => this.handleSearch(search));
    this.subscribe('onChangePetsData', id => this.handleChangePetsData(id));
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

        this.handlePetsBySpecies();
      });
  }

  handlePetsBySpecies(species) {
    this.petsDataBySpecies = species 
      ? this.petsData.filter(pet => pet.species === species) 
      : this.petsData

    this.search 
      ? this.handleSearch(this.search)
      : this.publish('onUpdatePetCards', this.petsDataBySpecies);
  }

  handleSearch(search) {
    this.search = search;

    this.publish('onUpdatePetCards', 
      this.search 
        ? this.petsDataBySpecies.filter(pet => pet.breed.toLowerCase().indexOf(search) > -1) 
        : this.petsDataBySpecies
    );
  }

  handleChangePetsData(id) {
    const pet = this.petsData.find(pet => pet.id == id);
    pet.is_buy = !pet.is_buy;
  }

  handlePetsBySort(type) {
    this.publish('onSortPets', type);
  }
}
