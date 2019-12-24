export class ModelCart {
  constructor() {
    this.petsData = JSON.parse(sessionStorage.getItem('petshop-cart')) || [];
    this.scrollTo;
  }

  addPetData(pet) {
    if (this.isNotContainsPetData(pet)) {
      this.petsData.push(pet);
      this.updateLocalStorage();
    }

    console.log('add', this.petsData);
  }

  removePetData(id) {
    this.petsData = this.petsData.filter(p => p.id != id);
    this.updateLocalStorage();

    console.log('remove', this.petsData);
  }

  isNotContainsPetData(pet) {
    return this.petsData.findIndex(p => p.id === pet.id) === -1;
  }

  updateLocalStorage() {
    sessionStorage.setItem('petshop-cart', JSON.stringify(this.petsData));
  }
}
