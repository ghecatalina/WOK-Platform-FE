import { CREATE, DELETE, GET_ALL, GET_ITEM, UPDATE, UPDATE_ITEM } from "../constants/actionTypes";

export default (items = [], action) => {
    switch(action.type){
        case GET_ALL:
            return action.payload;
        case GET_ITEM:
            return action.payload.item;
        case CREATE:
            return [...items, action.payload];
        case UPDATE_ITEM:
            return items.map((item) => (item.id === action.payload.id ? action.payload : item));
        case DELETE:
            return items.filter((item) => item.id !== action.payload);
        default:
            return items;
    }
}