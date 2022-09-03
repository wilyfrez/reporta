// /* eslint-disable comma-dangle */
// /* eslint-disable class-methods-use-this */
// import axios from 'axios';
// import { API_URL, ORGANIZATION_PATH, CATEGORY_PATH } from '../utils/constants';
// import AuthHeader from './AuthHeader';

// class CategoriesService {
//   async getOrganizationCategories(organizationId) {
//     const response = await axios.get(
//       `${API_URL}/${ORGANIZATION_PATH}/${organizationId}/${CATEGORY_PATH}`,
//       {
//         headers: AuthHeader(),
//       }
//     );
//     return response.data.categories;
//   }

//   async addCategory(organizationId, data) {
//     const response = await axios.post(
//       `${API_URL}/${ORGANIZATION_PATH}/${organizationId}/${CATEGORY_PATH}`,
//       data,
//       {
//         headers: AuthHeader(),
//       }
//     );
//     return response.data;
//   }
// }

// export default new CategoriesService();
