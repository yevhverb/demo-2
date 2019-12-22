export class ModelSearch {
  constructor() {
    this.searchPrev = '';
    this.searchCurrent = '';
    this.searchHistory = [];
  }

  saveSearchCurrent(search) {
    this.searchPrev = this.searchCurrent;
    this.searchCurrent = search;
    
    if (search) this.searchHistory.push(search);
  }

  get isSearchDifferent() {
    return this.searchCurrent !== this.searchPrev;
  }
}
