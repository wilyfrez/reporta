import axios from 'axios';

import AuthHeader from './AuthHeader';

import { API_URL, PATHS } from '../utils/data';

class ReportsService {
  async getOrganizationReports() {
    try {
      const response = await axios.get(`${API_URL}/reports`, {
        headers: AuthHeader(),
      });
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }

  async createReportRequest(data) {
    try {
      const response = await axios.post(`${API_URL}/reports`, data, {
        headers: AuthHeader(),
      });
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }

  async updateReportRequest(reportId, data) {
    try {
      const response = await axios.put(`${API_URL}/reports/${reportId}`, data, {
        headers: AuthHeader(),
      });
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }

  async getStaffReportsByReportId(reportId) {
    try {
      const response = await axios.get(`${API_URL}/reports/${reportId}`, {
        headers: AuthHeader(),
      });
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }

  async getStaffReports() {
    try {
      const response = await axios.get(`${API_URL}/staffreports`, {
        headers: AuthHeader(),
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return error.response.data;
    }
  }

  async uploadStaffReport(organizationId, staffGoalId, data) {
    const response = await axios.put(
      `${API_URL}/${ORGANIZATION_PATH}/${organizationId}/${GOAL_PATH}/staffgoal/${staffGoalId}`,
      data,
      {
        headers: AuthHeader(),
      }
    );
    return response.data;
  }

  async deleteRepport(reportId) {
    try {
      const response = await axios.delete(`${API_URL}/reports/${reportId}`, {
        headers: AuthHeader(),
      });
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }

  async deleteStaffReport(staffGoalId) {
    try {
      const response = await axios.delete(
        `${API_URL}/reports/staffgoal/${staffGoalId}`,
        {
          headers: AuthHeader(),
        }
      );
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }

  async submitStaffReport(staffReportId, data) {
    const response = await axios.put(
      `${API_URL}/staffreports/${staffReportId}`,
      data,
      {
        headers: AuthHeader(),
      }
    );
    console.log(response);
    return response.data;
  }

  async downloadStaffGoal(staffGoalId) {
    const response = await axios.get(
      `${API_URL}/${ORGANIZATION_PATH}/${organizationId}/${GOAL_PATH}/staffgoal/${staffGoalId}/download`,
      {
        headers: AuthHeader(),
        responseType: 'blob',
      }
    );
    console.log(response);
    return response.data;
  }
}

export default new ReportsService();
