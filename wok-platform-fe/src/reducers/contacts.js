import { GET_CONTACTS } from "../constants/actionTypes";

export default (contacts = [], action) => {
    switch(action.type){
        case GET_CONTACTS:
            return action.payload;
        default:
            return contacts;
    }
}