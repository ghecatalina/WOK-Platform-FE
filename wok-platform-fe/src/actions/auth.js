import { apiWithToken, login } from "../api";
import { AUTH } from "../constants/actionTypes";

export const signin = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await login(formData);
    
        dispatch({ type: AUTH, data });

        data.role === 'Admin'
            ? navigate('/admin/categories')
            : navigate('/worker/messages')

    } catch (error) {
        console.log(error);
    }
};