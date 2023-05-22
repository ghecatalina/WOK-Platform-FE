import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
import axios from "axios";

export const api = axios.create({ baseURL: 'https://localhost:7104/' });

const token = localStorage.getItem('tk');
export const apiWithToken = axios.create({
    baseURL: 'https://localhost:7104/',
    timeout: 1000,
    headers: {'Authorization': 'Bearer ' + token}
  });

//signalR
export const signalrConnection = new HubConnectionBuilder()
  .withUrl("https://localhost:7104/messages")
  .configureLogging(LogLevel.Information)
  .build();

//categories
export const getCategories = () => api.get('categories');
export const addCategory = (formData) => apiWithToken.post('categories', formData);
export const updateCategory = (id, formData) => apiWithToken.put(`categories/${id}`, formData);
export const deleteCategory = (id) => apiWithToken.delete(`categories/${id}`);

//items
export const getItemsByCategory = (categoryId) => api.get(`categories/${categoryId}/items`);
export const getItemByCategoryAndId = (categoryId, itemId) => api.get(`categories/${categoryId}/items/${itemId}`);
export const addItemByCategory = (categoryId, formData) => apiWithToken.post(`categories/${categoryId}/items`, formData);
export const updateItemByCategory = (categoryId, itemId, formData) => apiWithToken.put(`categories/${categoryId}/items/${itemId}`, formData);
export const deleteItemByCategory = (categoryId, itemId) => apiWithToken.delete(`categories/${categoryId}/items/${itemId}`);

//daily menu
export const getDailyMenu = () => api.get('dailymenu');
export const updateDailyMenu = (dailyMenu) => apiWithToken.put('dailymenu', dailyMenu);

//auth
export const login = (formData) => api.post('auth/login', formData);

//reservations
export const getAvailableTables = (formData) => api.get('reservations/available-tables',{params: formData});
export const createReservation = (formData) => api.post('reservations/', formData);
export const getReservations = (formData) => apiWithToken.get('reservations', {params: formData});
export const deleteReservation = (id) => apiWithToken.delete(`reservations/${id}`);
export const updateReservation = (id, formData) => apiWithToken.put(`reservations/${id}`, formData);

//contacts
export const createContact = (formData) => api.post('/contacts', formData);
export const getContacts = (formData) => apiWithToken.get('/contacts', {params: formData});

//messages
export const getMessages = () => apiWithToken.get('/client-messages');
