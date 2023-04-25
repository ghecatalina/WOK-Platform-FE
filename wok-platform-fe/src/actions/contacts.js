import { getContacts } from "../api"
import { GET_CONTACTS } from "../constants/actionTypes";

export const getContactsByDate = (formData) => async(dispatch) => {
    try{
        const { data } = await getContacts(formData);

    dispatch({ type: GET_CONTACTS, payload: data });
    }
    catch(err){
        console.log(err.message);
    }
}