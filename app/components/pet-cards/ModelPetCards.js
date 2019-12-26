export class ModelPetCards {
  constructor() {
    this.petsCount = 20;
    this.petsCurIdx = -this.petsCount;
    this.petsData;
  }

  updatePetsData(pets) {
    this.petsData = pets;
    this.petsCurIdx = -20;
  }

  getSlicePetsData(isMore) {
    if (isMore !== null) this.petsCurIdx += isMore ? this.petsCount : -this.petsCount;
    return this.petsData.slice(this.petsCurIdx, this.petsCurIdx + this.petsCount);
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
