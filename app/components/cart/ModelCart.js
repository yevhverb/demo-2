export class ModelCart {
  constructor() {
    this.petsData = JSON.parse(sessionStorage.getItem('petshop-cart')) || [];
    this.userData = JSON.parse(sessionStorage.getItem('petshop-order')) || {};
    this.scrollTo;
    this.isCloseCart;
  }

  updateCartPetsData({ pet, isBuy }) {
    isBuy
      ? this.updatePetsData(pet)
      : this.removePetData(pet.id);
  }

  updatePetsData(pet) {
    if (this.isExistPetData(pet)) {
      this.petsData.unshift(pet);
      this.updateSessionStorage();
    }
  }

  removePetData(id) {
    this.petsData = this.petsData.filter(p => p.id != id);
    this.updateSessionStorage();
  }

  isExistPetData(pet) {
    return this.petsData.findIndex(p => p.id === pet.id) === -1;
  }

  updateUserData({ dataset, value }) {
    this.userData[dataset.order] = value.trim();
    this.updateSessionStorage();
  }

  clearUserData() {
    this.userData = {};
    this.updateSessionStorage();
  }

  updateSessionStorage() {
    sessionStorage.setItem('petshop-cart', JSON.stringify(this.petsData));
    sessionStorage.setItem('petshop-order', JSON.stringify(this.userData));
  }

  getPetDetails(id) {
    return this.petsData.find(p => p.id == id);
  }

  get summaryPetsData() {
    const totalPrice = this.petsData.reduce((acc, cur) => acc + cur.price, 0);
    const countItems = this.lengthPetsData;

    return { countItems, totalPrice };
  }

  get lengthPetsData() {
    return this.petsData.length;
  }
}
