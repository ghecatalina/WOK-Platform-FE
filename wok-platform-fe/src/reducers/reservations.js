import { DELETE_RESERVATIONS, GET_RESERVATIONS, UPDATE_RESERVATION } from "../constants/actionTypes";

export default (reservations = [], action) => {
    switch(action.type){
        case GET_RESERVATIONS:
            return action.payload;
        case DELETE_RESERVATIONS:
            return action.payload;
        case UPDATE_RESERVATION:
            return action.payload;
        default:
            return reservations;
    }
}