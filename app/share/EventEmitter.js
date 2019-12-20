export class EventEmitter {
  constructor() {
    this.events = {};
    this.props = {
      on: this.on.bind(this),
      emit: this.emit.bind(this)
    }
  }

  on(event, listener) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    
    this.events[event].push(listener);
  }
  
  emit(event, args) {
    if (!this.events[event]) {
      this.events[event] = [];
    }

    this.events[event].forEach(listener => listener(args));
  }
}
