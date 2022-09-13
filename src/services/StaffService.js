import axios from 'axios';

import AuthHeader from './AuthHeader';

import { API_URL, PATHS } from '../utils/data';
import AuthService from './AuthService';

class StaffService {
  async getAllStaff() {
    try {
      const response = await axios.get(`${API_URL}/staff`, {
        headers: AuthHeader(),
      });
      return response.data.staff;
    } catch (error) {
      if (error.response.logout) {
        AuthService.logout();
      }
    }
  }

  async registerStaffAccount(data) {
    try {
      const response = await axios.post(`${API_URL}/staff`, data, {
        headers: AuthHeader(),
      });
      return response.data;
    } catch (error) {
      if (error.response.logout) {
        AuthService.logout();
      }
    }
  }

  async updateStaff(organizationId, data, staffId) {
    const response = await axios.put(
      `${API_URL}/${ORGANIZATION_PATH}/${organizationId}/${STAFF_PATH}/${staffId}`,
      data,
      {
        headers: AuthHeader(),
      }
    );
    return response.data;
  }

  async deleteStaffAccount(staffId) {
    try {
      const response = await axios.delete(`${API_URL}/staff/${staffId}`, {
        headers: AuthHeader(),
      });
      return response.data;
    } catch (error) {
      if (error.response.logout) {
        AuthService.logout();
      }
    }
  }

  async resetStaffPassword(organizationId, staffId) {
    const response = await axios.put(
      `${API_URL}/${ORGANIZATION_PATH}/${organizationId}/${STAFF_PATH}/${staffId}/resetStaffPassword`,
      {
        headers: AuthHeader(),
      }
    );
    return response.data;
  }
}

export default new StaffService();
