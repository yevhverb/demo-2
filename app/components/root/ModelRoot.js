export class ModelRoot {
  constructor({ subscribe, publish }) {
    this.petsBase = 'https://jsonstorage.net/api/items/d301cfd4-7636-4dab-a1ae-753fbca366b4';
    this.petsStorage = JSON.parse(sessionStorage.getItem('petshop-cart')) || [];
    this.petsData;

    this.subscribe = subscribe;
    this.publish = publish;

    this.getPetsData();

    this.subscribe('onSearch', search => this.handleSearch(search));
    this.subscribe('onUpdateCart', id => this.handleUpdateCart(id));
  }

  getPetsData() {
    fetch(this.petsBase)
      .then(response => response.json())
      .then(data => {
        this.petsData = data.map(pet => { 
          pet.buy = false; 
          return pet; 
        });

        this.petsStorage.forEach(item => {
          const pet = this.petsData.find(pet => pet.id == item.id);
          if (pet) pet.buy = true;
        });

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

  handleUpdateCart(id) {
    const pet = this.petsData.find(pet => pet.id === id);
    pet.buy = !pet.buy;

    if (!pet.buy) this.publish('onDontBuyPet', pet.id);
  }
}
