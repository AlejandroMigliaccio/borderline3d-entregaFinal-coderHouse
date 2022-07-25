import {getData, loadList} from "./products-card.js";
import {reloadCart} from "./cart.js";

reloadCart();
loadList(getData());

