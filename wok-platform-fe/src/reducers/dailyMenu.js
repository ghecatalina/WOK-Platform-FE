import { GET_ALL, GET_DAILY, UPDATE, UPDATE_DAILY } from "../constants/actionTypes";

export default (dailyMenu = null, action) => {
    switch(action.type){
        case GET_DAILY:
            return action.payload;
        case UPDATE_DAILY:
            return action.payload;
        default:
            return dailyMenu;
    }
}