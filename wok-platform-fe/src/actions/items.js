import { GET_ALL, CREATE, UPDATE, DELETE, GET_ITEM, UPDATE_ITEM } from '../constants/actionTypes';
import { deleteItemByCategory, getItemByCategoryAndId } from '../api/index.js';
import { updateItemByCategory } from '../api/index.js';
import { getItemsByCategory } from '../api/index.js';
import { addItemByCategory } from '../api/index.js';

export const getItems = (categoryId) => async (dispatch) => {
    try {
        const { data } = await getItemsByCategory(categoryId);

        dispatch({ type: GET_ALL, payload: data });
    } 
    catch(err) {
        console.log(err.message);
    }
}

export const getItem = (categoryId, itemId) => async (dispatch) => {
    try {
        const { data } = await getItemByCategoryAndId(categoryId, itemId);

        dispatch({ type: GET_ITEM, payload: {item: data}});
    }
    catch(err) {
        console.log(err.message);
    }
}

export const createItem = (categoryId, item) => async (dispatch) => {
    try {
        const { data } = await addItemByCategory(categoryId, item);

        dispatch({ type: CREATE, payload: data });
    }
    catch(err){
        console.log(err.message);
    }
}

export const updateItem = (categoryId, itemId, item, navigate) => async (dispatch) => {
    try {
        const { data } = await updateItemByCategory(categoryId, itemId, item);
    
        dispatch({ type: UPDATE_ITEM, payload: data });
        navigate(`/admin/categories/${categoryId}/items`);
    }
    catch (err) {
        console.log(err.message);
    }
}

export const deleteItem = (categoryId, itemId) => async (dispatch) => {
    try {
        await deleteItemByCategory(categoryId, itemId);

        dispatch({type: DELETE, payload: itemId });
    }
    catch(err) {
        console.log(err.message);
    }
}

