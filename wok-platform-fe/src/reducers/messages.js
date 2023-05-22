import { GET_MESSAGES } from "../constants/actionTypes";

export default (messages = [], action) => {
    switch(action.type){
        case GET_MESSAGES:
            return action.payload;
        default:
            return messages;
    }
}