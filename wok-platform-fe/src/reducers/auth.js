import { AUTH } from "../constants/actionTypes";

export default (authData = null , action) => {
    switch (action.type) {
        case AUTH:
            localStorage.setItem('tk', action?.data.tk);
            localStorage.setItem('id', action?.data.id);
            localStorage.setItem('role', action?.data.role);
    
            return authData;
        // case LOGOUT:
        //     localStorage.clear();
        //     return null;
        default:
            return authData;
    }
};