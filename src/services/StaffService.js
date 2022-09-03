import { importProtectWorkbook } from '@syncfusion/ej2/spreadsheet';
import axios from 'axios';
// import { API_URL, ORGANIZATION_PATH, STAFF_PATH } from '../utils/constants';
import AuthHeader from './AuthHeader';

import { API_URL, PATHS } from '../utils/data';

const { organizations, staff } = PATHS;

class StaffService {
  async getOrganizationStaff(organizationId) {
    const response = await axios.get(
      `${API_URL}/${ORGANIZATION_PATH}/${organizationId}/${STAFF_PATH}`,
      {
        headers: AuthHeader(),
      }
    );
    return response.data.staff;
  }

  async addStaff(organizationId, data) {
    const response = await axios.post(
      `${API_URL}/${ORGANIZATION_PATH}/${organizationId}/${STAFF_PATH}`,
      data,
      {
        headers: AuthHeader(),
      }
    );
    return response.data;
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

  async deleteStaff(organizationId, staffId) {
    const response = await axios.delete(
      `${API_URL}/${ORGANIZATION_PATH}/${organizationId}/${STAFF_PATH}/${staffId}`,
      {
        headers: AuthHeader(),
      }
    );
    return response.data;
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
