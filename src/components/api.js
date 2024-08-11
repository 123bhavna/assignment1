import axios from 'axios';

const API_BASE_URL = 'http://your-api-base-url.com';

export const createService = (service) => axios.post(`${API_BASE_URL}/recharge/service`, service);
export const updateService = (id, service) => axios.patch(`${API_BASE_URL}/recharge/service/${id}`, service);
export const getService = (id) => axios.get(`${API_BASE_URL}/api/recharge/service/${id}`);
export const getAllServices = () => axios.get(`${API_BASE_URL}/recharge/service`);
export const deleteService = (id) => axios.delete(`${API_BASE_URL}/recharge/service/${id}`);