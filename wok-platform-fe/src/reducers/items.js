import { CREATE, DELETE, END_LOADING, GET_ALL, GET_ITEM, START_LOADING, UPDATE, UPDATE_ITEM } from "../constants/actionTypes";

export default ( state = { isLoading: true, items: []}, action ) => {
    switch(action.type){
        case START_LOADING:
            return { ...state, isLoading: true };
        case END_LOADING:
            return { ...state, isLoading: false };
        case GET_ALL:
            return {...state, items: action.payload};
        // case GET_ITEM:
        //     return action.payload.item;
        case CREATE:
            return { ...state, items: [...state.items, action.payload] };
        case UPDATE_ITEM:
            return {...state, items: action.payload};
        case DELETE:
            return { ...state, items: state.items.filter((item) => item.id !== action.payload) };
        default:
            return state;
    }
}