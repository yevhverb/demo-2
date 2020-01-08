export class ModelPetCards {
  constructor() {
    this.petsOnPage = 20;
    this.petsSortType;
    this.petsData;

    this.resetCurIdxPetsData();
  }

  updatePetsData(pets) {
    this.petsData = pets;
    this.resetCurIdxPetsData();
  }

  resetCurIdxPetsData() {
    this.petsCurIdxPetsData = -this.petsOnPage;
  }

  getPagePetsData(isMore) {
    if (isMore !== null) {
      this.petsCurIdxPetsData += isMore ? this.petsOnPage : -this.petsOnPage;
    }

    return this.petsDataSorted.slice(this.petsCurIdxPetsData, this.petsCurIdxPetsData + this.petsOnPage);
  }

  calcPages() {
    return { 
      cur: Math.floor(this.petsCurIdxPetsData / this.petsOnPage + 1),
      all: Math.ceil(this.lengthPetsData / this.petsOnPage)
    }
  }

  getPetDetails(id) {
    return this.petsData.find(pet => pet.id == id);
  }

  get petsDataSorted() {    
    if (this.petsSortType === 'price-up') 
      return [...this.petsData].sort((petA, petB) => petA.price - petB.price);
    if (this.petsSortType === 'price-down')
      return [...this.petsData].sort((petA, petB) => petB.price - petA.price);
    if (this.petsSortType === 'birth-up')
      return [...this.petsData].sort((petA, petB) => petB.birth_date - petA.birth_date);
    if (this.petsSortType === 'birth-down')
      return [...this.petsData].sort((petA, petB) => petA.birth_date - petB.birth_date);
    
    return this.petsData;
  }

  get lengthPetsData() {
    return this.petsData.length;
  }
}
