export class ModelPetCards {
  constructor() {
    this.petsData;
    this.petsCurentIdx = -20;
  }

  updatePetsData(pets) {
    this.petsData = pets;
    this.petsCurentIdx = -20;
  }

  getSlicePetsData(isMore) {
    if (isMore !== null) this.petsCurentIdx += isMore ? 20 : -20;

    return this.petsData.slice(this.petsCurentIdx, this.petsCurentIdx + 20);
  }

  calcPaginationPetsData() {
    return { 
      cur: Math.floor(this.petsCurentIdx / 20 + 1),
      all: Math.ceil(this.petsData.length / 20)
    }
  }

  get lengthPetsData() {
    return this.petsData.length;
  }
}
