import { deleteReservation, getReservations, updateReservation } from "../api";
import { DELETE_RESERVATIONS, GET_RESERVATIONS, UPDATE_RESERVATION } from "../constants/actionTypes";

export const getReservationsByDate = (formData) => async(dispatch) =>{
    try {
        const { data } = await getReservations(formData);

        dispatch({ type: GET_RESERVATIONS, payload: data});
    }
    catch(err){
        console.log(err.message);
    }
}

export const deleteReservationById = (id, formData) => async(dispatch) => {
    try{
        await deleteReservation(id);

        const { data } = await getReservations(formData);
        dispatch({ type: DELETE_RESERVATIONS, payload: data});
    }
    catch(err){
        console.log(err.message);
    }
}

export const updateReservationById = (id, formData, date) => async(dispatch) => {
    try{
        await updateReservation(id, formData);

        const { data } = await getReservations(date);
        dispatch({ type: UPDATE_RESERVATION, payload: data });
    }
    catch(err){
        console.log(err.message);
    }
}