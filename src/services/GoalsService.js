import axios from 'axios';

import AuthHeader from './AuthHeader';

import { API_URL, PATHS } from '../utils/data';

class GoalsService {
  async getOganizationGoals() {
    const response = await axios.get(`${API_URL}/goals`, {
      headers: AuthHeader(),
    });
    return response.data;
  }

  async requestGoal(data) {
    const response = await axios.post(`${API_URL}/goals`, data, {
      headers: AuthHeader(),
    });
    return response.data;
  }

  async getStaffGoalsByGoalId(organizationId, goalId) {
    const response = await axios.get(`${API_URL}/goals`, {
      headers: AuthHeader(),
    });
    return response.data;
  }

  async getStaffGoals(organizationId, staffId) {
    const response = await axios.get(
      `${API_URL}/${ORGANIZATION_PATH}/${organizationId}/${GOAL_PATH}/${STAFF_PATH}/${staffId}`,
      {
        headers: AuthHeader(),
      }
    );
    return response.data;
  }

  async uploadStaffGoal(organizationId, staffGoalId, data) {
    const response = await axios.put(
      `${API_URL}/${ORGANIZATION_PATH}/${organizationId}/${GOAL_PATH}/staffgoal/${staffGoalId}`,
      data,
      {
        headers: AuthHeader(),
      }
    );
    return response.data;
  }

  async downloadStaffGoal(organizationId, staffGoalId) {
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

export default new GoalsService();
