export class ModelRoot {
  constructor({ subscribe, publish }) {
    this.petsBase = 'https://jsonstorage.net/api/items/d301cfd4-7636-4dab-a1ae-753fbca366b4';
    this.petsStorage = JSON.parse(sessionStorage.getItem('petshop-cart')) || [];
    this.petsData;

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

        this.publish('onUpdatePetCards', this.petsData);
      });
  }

  handleSearch(search) {
    this.publish('onUpdatePetCards', 
      search 
      ? this.petsData.filter(pet => pet.breed.toLowerCase().indexOf(search) > -1) 
      : this.petsData
    );
  }

  handleChangePetsData(id) {
    const pet = this.petsData.find(pet => pet.id == id);
    pet.is_buy = !pet.is_buy;
  }
}
