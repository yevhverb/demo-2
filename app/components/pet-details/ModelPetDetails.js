export class ModelPetDetails {
  constructor() {
    this.allDetails;
    this._secondaryDetails;
    this.scrollTo;
  }

  saveDetails(pet, scrollTo) {
    this.allDetails = pet;
    this.scrollTo = scrollTo;
  }

  get primaryDetails() {
    let { id, breed, image, species, price, is_buy, ...secondary } = this.allDetails;

    this._secondaryDetails = secondary;

    return { breed, image, species, price, is_buy };
  }

  get secondaryDetails() {
    return Object.entries(this._secondaryDetails);
  }
}
