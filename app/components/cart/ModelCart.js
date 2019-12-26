export class ModelCart {
  constructor() {
    this.petsData = JSON.parse(sessionStorage.getItem('petshop-cart')) || [];
    this.scrollTo;
  }

  updateCart({ pet, isBuy }) {
    isBuy
    ? this.addPetData(pet)
    : this.removePetData(pet.id);
  }

  addPetData(pet) {
    if (this.isNotContainsPetData(pet)) {
      this.petsData.unshift(pet);
      this.updateLocalStorage();
    }
  }

  removePetData(id) {
    this.petsData = this.petsData.filter(p => p.id != id);
    this.updateLocalStorage();
  }

  isNotContainsPetData(pet) {
    return this.petsData.findIndex(p => p.id === pet.id) === -1;
  }

  updateLocalStorage() {
    sessionStorage.setItem('petshop-cart', JSON.stringify(this.petsData));
  }

  getPetDetails(id) {
    return this.petsData.find(p => p.id == id);
  }

  get lengthPetsData() {
    return this.petsData.length;
  }
}
