import axios from 'axios';

import AuthHeader from './AuthHeader';

import { API_URL, PATHS } from '../utils/data';

class DepartmentsService {
  async getAllDepartments() {
    try {
      const response = await axios.get(`${API_URL}/departments/`, {
        headers: AuthHeader(),
      });
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }

  async createDepartment(data) {
    try {
      const response = await axios.post(`${API_URL}/departments`, data, {
        headers: AuthHeader(),
      });
      return response.data;
    } catch (error) {
      return error.response.data;
      console.log(error);
    }
  }

  async updateDepartment(departmentId, data) {
    try {
      const response = await axios.put(
        `${API_URL}/departments/${departmentId}`,
        data,
        {
          headers: AuthHeader(),
        }
      );
      return response.data;
    } catch (error) {}
  }

  async deleteDepartment(departmentId) {
    try {
      const response = await axios.delete(
        `${API_URL}/departments/${departmentId}`,
        {
          headers: AuthHeader(),
        }
      );
      return response.data;
    } catch (error) {}
  }
}

export default new DepartmentsService();
