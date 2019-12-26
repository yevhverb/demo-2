export class ModelPetDetails {
  constructor() {
    this.petDetailsData;
    this.secondaryPetDetailsData;
    this.scrollTo;
  }

  saveData(pet, scrollTo) {
    this.petDetailsData = pet;
    this.scrollTo = scrollTo;
  }

  get primaryData() {
    let { id, breed, image, species, price, is_buy, ...secondary } = this.petDetailsData;
    this.secondaryPetDetailsData = secondary;
    return { breed, image, species, price, is_buy };
  }

  get secondaryData() {
    return Object.entries(this.secondaryPetDetailsData);
  }
}
