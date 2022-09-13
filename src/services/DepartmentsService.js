import axios from 'axios';

import AuthHeader from './AuthHeader';

import { API_URL, PATHS } from '../utils/data';

class DepartmentsService {
  async getAllDepartments() {
    const response = await axios.get(`${API_URL}/departments/`, {
      headers: AuthHeader(),
    });
    return response.data.departments;
  }

  async createDepartment(data) {
    const response = await axios.post(`${API_URL}/departments`, data, {
      headers: AuthHeader(),
    });
    return response.data;
  }

  async deleteDepartment(departmentId) {
    const response = await axios.delete(
      `${API_URL}/departments/${departmentId}`,
      {
        headers: AuthHeader(),
      }
    );
    return response.data;
  }

  async updateDepartment(departmentId, data) {
    const response = await axios.put(
      `${API_URL}/departments/${departmentId}`,
      data,
      {
        headers: AuthHeader(),
      }
    );
    return response.data;
  }
}

export default new DepartmentsService();
