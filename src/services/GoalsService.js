// /* eslint-disable comma-dangle */
// /* eslint-disable class-methods-use-this */
// import axios from 'axios';
// import {
//   API_URL,
//   ORGANIZATION_PATH,
//   GOAL_PATH,
//   STAFF_PATH,
// } from '../utils/constants';
// import AuthHeader from './AuthHeader';

// class GoalsService {
//   async getOrganizationGoals(organizationId) {
//     const response = await axios.get(
//       `${API_URL}/${ORGANIZATION_PATH}/${organizationId}/${GOAL_PATH}`,
//       {
//         headers: AuthHeader(),
//       }
//     );
//     return response.data;
//   }

//   async requestGoal(organizationId, data) {
//     const response = await axios.post(
//       `${API_URL}/${ORGANIZATION_PATH}/${organizationId}/${GOAL_PATH}`,
//       data,
//       {
//         headers: AuthHeader(),
//       }
//     );
//     return response.data;
//   }

//   async getStaffGoalsByGoalId(organizationId, goalId) {
//     const response = await axios.get(
//       `${API_URL}/${ORGANIZATION_PATH}/${organizationId}/${GOAL_PATH}/${goalId}`,
//       {
//         headers: AuthHeader(),
//       }
//     );
//     return response.data;
//   }

//   async getStaffGoals(organizationId, staffId) {
//     const response = await axios.get(
//       `${API_URL}/${ORGANIZATION_PATH}/${organizationId}/${GOAL_PATH}/${STAFF_PATH}/${staffId}`,
//       {
//         headers: AuthHeader(),
//       }
//     );
//     return response.data;
//   }

//   async uploadStaffGoal(organizationId, staffGoalId, data) {
//     const response = await axios.put(
//       `${API_URL}/${ORGANIZATION_PATH}/${organizationId}/${GOAL_PATH}/staffgoal/${staffGoalId}`,
//       data,
//       {
//         headers: AuthHeader(),
//       }
//     );
//     return response.data;
//   }

//   async downloadStaffGoal(organizationId, staffGoalId) {
//     const response = await axios.get(
//       `${API_URL}/${ORGANIZATION_PATH}/${organizationId}/${GOAL_PATH}/staffgoal/${staffGoalId}/download`,
//       {
//         headers: AuthHeader(),
//         responseType: 'blob',
//       }
//     );
//     console.log(response);
//     return response.data;
//   }
// }

// export default new GoalsService();
