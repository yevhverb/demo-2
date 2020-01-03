export class ModelPetCards {
  constructor() {
    this.petsCount = 20;
    this.petsCurIdx = -this.petsCount;
    this.petsSort;
    this.petsData;
  }

  updatePetsData(pets) {
    this.petsData = pets;
    this.petsCurIdx = -20;
  }

  getSlicePetsData(isMore) {
    if (isMore !== null) this.petsCurIdx += isMore ? this.petsCount : -this.petsCount;
    return this.petsDataSorted.slice(this.petsCurIdx, this.petsCurIdx + this.petsCount);
  }

  get petsDataSorted() {    
    if (this.petsSort === 'price-up') 
      return [...this.petsData].sort((petA, petB) => petA.price - petB.price);
    if (this.petsSort === 'price-down')
      return [...this.petsData].sort((petA, petB) => petB.price - petA.price);
    if (this.petsSort === 'birth-up')
      return [...this.petsData].sort((petA, petB) => petB.birth_date - petA.birth_date);
    if (this.petsSort === 'birth-down')
      return [...this.petsData].sort((petA, petB) => petA.birth_date - petB.birth_date);
    
    return this.petsData;
  }

  calcPagination() {
    return { 
      cur: Math.floor(this.petsCurIdx / this.petsCount + 1),
      all: Math.ceil(this.petsData.length / this.petsCount)
    }
  }

  getPetDetails(id) {
    return this.petsData.find(pet => pet.id == id);
  }

  get lengthPetsData() {
    return this.petsData.length;
  }
}
