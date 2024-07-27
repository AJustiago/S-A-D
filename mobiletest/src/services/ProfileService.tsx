import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_URL } from '../config/config';

const request = async (endpoint: string, method: string, body?: any, token?: string) => {
  try {
    const headers: { [key: string]: string } = {
      'Content-Type': 'application/json',
    };

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch(`${API_URL}${endpoint}`, {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API request error:', error);
    throw error;
  }
};

export const loginUser = async (credentials: { email: string; password: string }) => {
  const response = await request('/user', 'POST', credentials);
  if (response.token) {
    await AsyncStorage.setItem('jwt', response.token);
  }
  return response;
};

export const registerUser = async (userData: { email: string; password: string; name: string }) => {
  return request('/user/register', 'POST', userData);
};


export const getUserDetails = async (userId: string) => {
  const token = await AsyncStorage.getItem('jwt'); 
  return request(`/user/${userId}`, 'GET', undefined, token || '');
};
