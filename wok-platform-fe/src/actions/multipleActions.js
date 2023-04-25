import { GET_ALL } from "../constants/actionTypes";
import { getAllCategories } from "./categories";
import { getDailyMenuById } from "./dailyMenu";

export const getCategoriesAndDaily = () => async (dispatch) => {
    try {
      await Promise.all(
            [
                dispatch(getAllCategories()), 
                dispatch(getDailyMenuById())
            ]
        );
    } catch (err) {
      console.log(err.message);
    }
  };