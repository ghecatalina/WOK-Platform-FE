import { combineReducers } from "redux";
import items from './items';
import categories from "./categories";
import dailyMenu from "./dailyMenu";
import reservations from "./reservations";
import contacts from "./contacts";
import messages from "./messages";

export default combineReducers({
    items: items,
    categories: categories,
    dailyMenu: dailyMenu,
    reservations: reservations,
    contacts: contacts,
    messages: messages
});