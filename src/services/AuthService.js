import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../utils/data';
import AuthHeader from './AuthHeader';

class AuthService {
  async register(data) {
    try {
      const response = await axios.post(`${API_URL}/register`, data);
      return response.data;
    } catch (error) {
      return {
        status: false,
        message: 'Ooops! Something went wrong. Try again',
        responseMessage: error.message,
      };
    }
  }

  async login(data) {
    try {
      const response = await axios.post(`${API_URL}/login`, data);
      return response.data;
    } catch (error) {
      return {
        status: false,
        message: 'Ooops! Something went wrong. Try again',
        responseMessage: error.message,
      };
    }
  }

  async loginWithToken() {
    try {
      const response = await axios.get(`${API_URL}/loginWithToken`, {
        headers: AuthHeader(),
      });
      return response.data;
    } catch (error) {
      return {
        status: false,
        message: 'Ooops! Something went wrong. Try again',
        responseMessage: error.message,
      };
    }
  }

  async verify(token) {
    try {
      const response = await axios.get(`${API_URL}/verify/${token}`);
      return response.data;
    } catch (error) {
      return {
        status: false,
        message: 'Ooops! Something went wrong. Try again',
        responseMessage: error.message,
      };
    }
  }

  async activate(token, data) {
    try {
      const response = await axios.post(`${API_URL}/activate/${token}`, data);
      return response.data;
    } catch (error) {
      return {
        status: false,
        message: 'Ooops! Something went wrong. Try again',
        responseMessage: error.message,
      };
    }
  }

  logout() {
    localStorage.removeItem('user');
    navigate('/login');
  }

  getCurrentUser() {
    if (localStorage.getItem('user') === 'undefined') {
      localStorage.removeItem('user');
    }
    return JSON.parse(localStorage.getItem('user'));
  }
}

export default new AuthService();
