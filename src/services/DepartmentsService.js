// /* eslint-disable comma-dangle */
// /* eslint-disable class-methods-use-this */
// import axios from 'axios';
// import {
//   API_URL,
//   ORGANIZATION_PATH,
//   DEPARTMENT_PATH,
// } from '../utils/constants';
// import AuthHeader from './AuthHeader';

// class DepartmentsService {
//   async getOrganizationDepartments(organizationId) {
//     const response = await axios.get(
//       `${API_URL}/${ORGANIZATION_PATH}/${organizationId}/${DEPARTMENT_PATH}`,
//       {
//         headers: AuthHeader(),
//       }
//     );
//     return response.data.departments;
//   }

//   async addDepartment(organizationId, data) {
//     const response = await axios.post(
//       `${API_URL}/${ORGANIZATION_PATH}/${organizationId}/${DEPARTMENT_PATH}`,
//       data,
//       {
//         headers: AuthHeader(),
//       }
//     );
//     return response.data;
//   }
// }

// export default new DepartmentsService();
