import { GET_ALL, GET_ITEMS, UPDATE } from "../constants/actionTypes";

export default (categories = [], action) => {
    switch(action.type){
        case GET_ITEMS:
            return action.payload;
        case UPDATE:
            return categories.map((category) => (category.id === action.payload.id ? action.payload : category));
        default:
            return categories;
    }
}