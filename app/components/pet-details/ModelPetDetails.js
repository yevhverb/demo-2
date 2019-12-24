export class ModelPetDetails {
  constructor() {
    this.petDetailsData;
    this.secondaryPetDetailsData;
    this.scrollTo;
  }

  savePetDetailsData(pet, scrollTo) {
    this.petDetailsData = pet;
    this.scrollTo = scrollTo;
  }

  getPrimaryPetDetailsData() {
    let { id, breed, image, species, price, buy, ...secondary } = this.petDetailsData;
    this.secondaryPetDetailsData = secondary;
    return { breed, image, species, price, buy };
  }

  getSecondaryPetDetailsData() {
    return Object.entries(this.secondaryPetDetailsData);
  }
}
