import { getCategories, getDailyMenu, updateCategory } from "../api/index.js"
import { GET_ALL, GET_ITEMS, UPDATE } from "../constants/actionTypes";

export const getAllCategories = () => async(dispatch) => {
    try{
        const { data } = await getCategories();

        dispatch({ type: GET_ITEMS, payload: data});
    }
    catch(err){
        console.log(err.message);
    }
}

export const updateCategorybyId = (id, formData) => async(dispatch) => {
    try {
        const { data } = await updateCategory(id, formData);

        dispatch({ type: UPDATE, payload: data});
    }
    catch(err){
        console.log(err.message);
    }
} 