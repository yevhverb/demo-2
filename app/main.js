import { EventEmitter } from './share/EventEmitter.js';
import { ControllerRoot } from './components/root/ControllerRoot.js';
import { ControllerPetCards } from './components/pet-cards/ControllerPetCards.js';

const eventEmitter = new EventEmitter();

const root = new ControllerRoot(eventEmitter.props);
const animalCards = new ControllerPetCards(eventEmitter.props);
