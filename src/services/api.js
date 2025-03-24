import axios from 'axios';

const BASE_URL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getCampers = async ({ page = 1, limit = 4, ...params } = {}) => {
  try {
    const response = await api.get('/campers', {
      params: {
        page,
        limit,
        ...params,
      },
    });
    return response.data;
  } catch (error) {
    if (error.status === 404) {
      return { items: [], total: 0 };
    }
    throw new Error('Failed to fetch campers');
  }
};

export const getCamperById = async (id) => {
  try {
    const response = await api.get(`/campers/${id}`);
    return response.data;
  } catch {
    throw new Error('Failed to fetch camper details');
  }
};