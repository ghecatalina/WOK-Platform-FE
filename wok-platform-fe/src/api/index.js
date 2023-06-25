import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
import axios from "axios";

export const api = axios.create({ baseURL: 'https://localhost:7104/' });

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('tk');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

//signalR
export const signalrConnection = new HubConnectionBuilder()
  .withUrl("https://localhost:7104/messages")
  .configureLogging(LogLevel.Information)
  .build();

//categories
export const getCategories = () => api.get('categories');
export const addCategory = (formData) => api.post('categories', formData);
export const updateCategory = (id, formData) => api.put(`categories/${id}`, formData);
export const deleteCategory = (id) => api.delete(`categories/${id}`);
export const getCategoryById = (id) => api.get(`categories/${id}`);

//items
export const getItemsByCategory = (categoryId) => api.get(`categories/${categoryId}/items`);
export const getItemByCategoryAndId = (categoryId, itemId) => api.get(`categories/${categoryId}/items/${itemId}`);
export const addItemByCategory = (categoryId, formData) => api.post(`categories/${categoryId}/items`, formData);
export const updateItemByCategory = (categoryId, itemId, formData) => api.put(`categories/${categoryId}/items/${itemId}`, formData);
export const deleteItemByCategory = (categoryId, itemId) => api.delete(`categories/${categoryId}/items/${itemId}`);

//daily menu
export const getDailyMenu = () => api.get('dailymenu');
export const updateDailyMenu = (dailyMenu) => api.put('dailymenu', dailyMenu);

//auth
export const login = (formData) => api.post('auth/login', formData);

//reservations
export const getAvailableTables = (formData) => api.get('reservations/available-tables',{params: formData});
export const createReservation = (formData) => api.post('reservations/', formData);
export const getReservations = (formData) => api.get('reservations', {params: formData});
export const deleteReservation = (id) => api.delete(`reservations/${id}`);
export const updateReservation = (id, formData) => api.put(`reservations/${id}`, formData);

//contacts
export const createContact = (formData) => api.post('/contacts', formData);
export const getContacts = (formData) => api.get('/contacts', {params: formData});

//messages
export const getMessages = () => api.get('/client-messages');
