import axios from 'axios';

import AuthHeader from './AuthHeader';

import { API_URL, PATHS } from '../utils/data';

class GoalsService {
  async getOrganizationGoals() {
    try {
      const response = await axios.get(`${API_URL}/goals`, {
        headers: AuthHeader(),
      });
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }

  async createGoalRequest(data) {
    try {
      const response = await axios.post(`${API_URL}/goals`, data, {
        headers: AuthHeader(),
      });
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }

  async updateGoalRequest(goalId, data) {
    try {
      const response = await axios.put(`${API_URL}/goals/${goalId}`, data, {
        headers: AuthHeader(),
      });
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }

  async getStaffGoalsByGoalId(goalId) {
    try {
      const response = await axios.get(`${API_URL}/goals/${goalId}`, {
        headers: AuthHeader(),
      });
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }

  async getStaffGoals() {
    try {
      const response = await axios.get(`${API_URL}/staffgoals`, {
        headers: AuthHeader(),
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return error.response.data;
    }
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

  async deleteGoal(goalId) {
    try {
      const response = await axios.delete(`${API_URL}/goals/${goalId}`, {
        headers: AuthHeader(),
      });
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }

  async deleteStaffGoal(staffGoalId) {
    try {
      const response = await axios.delete(
        `${API_URL}/goals/staffgoal/${staffGoalId}`,
        {
          headers: AuthHeader(),
        }
      );
      return response.data;
    } catch (error) {
      return error.response.data;
    }
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

export default new GoalsService();
