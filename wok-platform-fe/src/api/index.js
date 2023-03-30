import axios from "axios";

export const api = axios.create({ baseURL: 'https://localhost:7104/' });

//categories
export const getCategories = () => api.get('categories');

//daily menu
export const getDailyMenu = () => api.get('dailymenu');