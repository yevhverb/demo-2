import { PublisherSubscriber } from './share/PublisherSubscriber.js';
import { ControllerRoot } from './components/root/ControllerRoot.js';
import { ControllerSearch } from './components/search/ControllerSearch.js';
import { ControllerPetCards } from './components/pet-cards/ControllerPetCards.js';
import { ControllerPetDetails } from './components/pet-details/ControllerPetDetails.js';
import { ControllerCart } from './components/cart/ControllerCart.js';

const ps = new PublisherSubscriber();

const root = new ControllerRoot(ps.api);
const search = new ControllerSearch(ps.api);
const petCards = new ControllerPetCards(ps.api);
const petDetails = new ControllerPetDetails(ps.api);
const cart = new ControllerCart(ps.api);
