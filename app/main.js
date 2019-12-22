import { PublisherSubscriber } from './share/PublisherSubscriber.js';
import { ControllerRoot } from './components/root/ControllerRoot.js';
import { ControllerSearch } from './components/search/ControllerSearch.js';
import { ControllerPetCards } from './components/pet-cards/ControllerPetCards.js';

const ps = new PublisherSubscriber();

const root = new ControllerRoot(ps.api);
const search = new ControllerSearch(ps.api);
const petCards = new ControllerPetCards(ps.api);
