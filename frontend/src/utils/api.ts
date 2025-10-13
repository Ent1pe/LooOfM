import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000';

export const api = axios.create({
  baseURL: API_BASE_URL,
});

// Test backend connection
export const testBackendConnection = async () => {
  try {
    const response = await api.get('/health');
    console.log('✅ Backend connection successful:', response.data);
    return response.data;
  } catch (error) {
    console.error('❌ Backend connection failed:', error);
    return null;
  }
};

// Get bathroom data
export const getBathrooms = async () => {
  try {
    const response = await api.get('/api/bathrooms');
    return response.data;
  } catch (error) {
    console.error('Failed to fetch bathrooms:', error);
    return [];
  }
};