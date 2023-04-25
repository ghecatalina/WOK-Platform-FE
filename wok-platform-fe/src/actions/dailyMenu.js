import { getDailyMenu, updateDailyMenu } from "../api"
import { GET_ALL, GET_DAILY, UPDATE, UPDATE_DAILY } from "../constants/actionTypes";

export const getDailyMenuById = () => async(dispatch) => {
    try {
        const { data } = await getDailyMenu();

        dispatch({ type: GET_DAILY, payload: data });
    }
    catch(err){
        console.log(err.message);
    }
}

export const updateDailyMenuById = (dailyMenu) => async(dispatch) => {
    try {
        await updateDailyMenu(dailyMenu);
        const { data } = await getDailyMenu();
        dispatch({ type: UPDATE_DAILY, payload: data });
    }
    catch(err){
        console.log(err.message);
    }
}